import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/** 
 * Similar to GET and DELETE methods, this POST method handles file uploads.
 * It processes multipart/form-data requests, saves the uploaded file to the specified directory,
 * and creates the directory if it doesn't exist.
 * ? SIMILAR TO Node.js + Express file upload handling but using Next.js 13+ route handlers.
**/

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File;
  const relativePath = (form.get("path") as string) || "";

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadDir = path.join(process.cwd(), "public/uploads", relativePath);
  fs.mkdirSync(uploadDir, { recursive: true });

  fs.writeFileSync(path.join(uploadDir, file.name), buffer);

  return NextResponse.json({ success: true });
}
