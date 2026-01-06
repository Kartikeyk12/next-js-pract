import { comments } from "../data";

export async function GET() {
  return new Response(JSON.stringify(comments));
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const newComment = {
    id: comments.length + 1,
    text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), { status: 201 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  const index = comments.findIndex((comment) => comment.id === id);
    if (index !== -1) {
    comments.splice(index, 1);
    return new Response(null, { status: 204 });
  } else {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
    });
  }
}