/**
 * * API route to handle file listing and deletion in the uploads directory. 
 * * this is an example of a ROUTE HANDLER in Next.js 13+.
 * ? Route handlers allow you to create API endpoints using the same file-based routing system as pages
 * ? and components. It lets you build restful endpoints with complete control over request and response handling.
 * * Features: keys are secure as it runs on server side.
 * * - No need to create seperate server.
 */


import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const relativePath = searchParams.get('path') || ''

  const baseDir = path.join(process.cwd(), 'public/uploads')
  const targetDir = path.join(baseDir, relativePath)

  if (!fs.existsSync(targetDir)) {
    return NextResponse.json([])
  }

  const files = fs.readdirSync(targetDir).map(file => {
    const fullPath = path.join(targetDir, file)
    const stat = fs.statSync(fullPath)
    const ext = path.extname(file).toLowerCase()

    return {
      name: file,
      size: stat.size,
      url: `/uploads/${relativePath}/${file}`.replace('//', '/'),
      isImage: ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext),
    }
  })

  return NextResponse.json(files)
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const relativePath = searchParams.get('path') || ''
  const fileName = searchParams.get('file')

  if (!fileName) {
    return NextResponse.json({ error: 'File not provided' }, { status: 400 })
  }

  const filePath = path.join(
    process.cwd(),
    'public/uploads',
    relativePath,
    fileName
  )

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
  }

  return NextResponse.json({ success: true })
}
