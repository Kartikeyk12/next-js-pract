# Next.js Concepts in This Project

This document explains all the Next.js concepts used in this project. The language is kept simple and easy to understand.

---

## Table of Contents

1. [App Router](#1-app-router)
2. [Layouts](#2-layouts)
3. [Pages](#3-pages)
4. [Dynamic Routes](#4-dynamic-routes)
5. [Catch-all Routes](#5-catch-all-routes)
6. [Route Groups](#6-route-groups)
7. [API Routes](#7-api-routes)
8. [Server Components](#8-server-components)
9. [Client Components](#9-client-components)
10. [Navigation](#10-navigation)
11. [Metadata](#11-metadata)
12. [Static Site Generation (SSG)](#12-static-site-generation-ssg)
13. [Context API](#13-context-api)
14. [File Uploads](#14-file-uploads)
15. [Hydration](#15-hydration)

---

## 1. App Router

### What is it?
The App Router is Next.js's new way of organizing your files. Instead of a `pages` folder, you use an `app` folder. Each folder inside `app` becomes a route in your website.

### How it's used in this project:
- All routes are inside the `app` folder
- Each folder like `about`, `blogs`, `product` creates a URL path
- The `app/layout.tsx` file wraps all pages

### Example from project:
```
app/
  ├── page.tsx          → / (home page)
  ├── about/
  │   └── page.tsx      → /about
  └── blogs/
      └── page.tsx      → /blogs
```

---

## 2. Layouts

### What is it?
A layout is a component that wraps multiple pages. It helps you share the same structure (like header, sidebar, footer) across different pages without repeating code.

### How it's used in this project:
- `app/layout.tsx` is the root layout that wraps all pages
- It includes Sidebar, Header, Footer, and Context Providers
- All pages automatically get this layout

### Example from project:
```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Sidebar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

---

## 3. Pages

### What is it?
A page is a component that shows content for a specific route. Each `page.tsx` file creates a page that users can visit.

### How it's used in this project:
- `app/page.tsx` → Home page (/)
- `app/about/page.tsx` → About page (/about)
- `app/blogs/page.tsx` → Blogs list page (/blogs)

### Example from project:
```tsx
// app/about/page.tsx
export default function About() {
  return <h1>About ME!!</h1>
}
```

---

## 4. Dynamic Routes

### What is it?
Dynamic routes let you create pages with changing URLs. Instead of creating separate pages for each item, you use brackets `[]` to make a route that accepts different values.

### How it's used in this project:
- `app/blogs/[blogId]/page.tsx` → /blogs/1, /blogs/2, /blogs/3
- `app/product/[productId]/page.tsx` → /product/123, /product/456
- `app/product/[productId]/reviews/[reviewId]/page.tsx` → /product/123/reviews/5

### Example from project:
```tsx
// app/blogs/[blogId]/page.tsx
export default async function BlogDetails({ params }) {
  const blogId = (await params).blogId;
  return <h1>Welcome! You are now on Blog {blogId}</h1>;
}
```

**Note:** In Next.js 15+, `params` is a Promise, so you need to `await` it.

---

## 5. Catch-all Routes

### What is it?
Catch-all routes can match multiple URL segments. They use double brackets `[[...files]]` and can match any number of path segments.

### How it's used in this project:
- `app/files/[[...files]]/page.tsx` matches:
  - `/files` (no segments)
  - `/files/folder1` (one segment)
  - `/files/folder1/subfolder` (two segments)
  - `/files/folder1/subfolder/file` (three segments)
  - And so on...

### Example from project:
```tsx
// app/files/[[...files]]/page.tsx
const params = useParams();
const path = ((params?.files as string[]) || undefined)?.join("/") || "";
// If URL is /files/folder1/subfolder
// path will be "folder1/subfolder"
```

---

## 6. Route Groups

### What is it?
Route groups use parentheses `()` to organize routes without affecting the URL. They help you group related pages together.

### How it's used in this project:
- `app/(auth)/` → Groups login and register pages
- `app/(routeGroupExample)/` → Example route group
- These folders don't appear in the URL

### Example:
```
app/
  ├── (auth)/
  │   ├── login/       → /login (not /(auth)/login)
  │   └── register/    → /register
```

---

## 7. API Routes

### What is it?
API routes let you create backend endpoints (like GET, POST, DELETE) directly in your Next.js app. They live in the `app/api` folder.

### How it's used in this project:
- `app/api/files/route.ts` → Handles GET and DELETE requests
- `app/api/files/upload/route.ts` → Handles POST requests for file uploads

### Example from project:
```tsx
// app/api/files/route.ts
export async function GET(req: Request) {
  // Handle GET request
  return NextResponse.json(files);
}

export async function DELETE(req: Request) {
  // Handle DELETE request
  return NextResponse.json({ success: true });
}
```

---

## 8. Server Components

### What is it?
Server Components run on the server, not in the browser. They can directly access databases, file systems, and APIs. They are the default in Next.js App Router.

### How it's used in this project:
- Most pages are Server Components by default
- They can be `async` and fetch data directly
- No "use client" directive needed

### Example from project:
```tsx
// app/blogs/[blogId]/page.tsx
export default async function BlogDetails({ params }) {
  // This runs on the server
  const blogId = (await params).blogId;
  return <h1>Blog {blogId}</h1>;
}
```

---

## 9. Client Components

### What is it?
Client Components run in the browser. You need them when you use React hooks (useState, useEffect), event handlers (onClick), or browser APIs (localStorage).

### How it's used in this project:
- Components with `"use client"` directive
- Header, Sidebar, FilesPage use client components
- Context providers are client components

### Example from project:
```tsx
// app/components/Header.tsx
"use client";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  return (
    <header>
      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
```

---

## 10. Navigation

### What is it?
Next.js provides special components and hooks for navigating between pages without full page reloads.

### How it's used in this project:

#### Link Component:
```tsx
import Link from "next/link";

<Link href="/about">About</Link>
```

#### useRouter Hook:
```tsx
"use client";
import { useRouter } from "next/navigation";

const router = useRouter();
router.back(); // Go back to previous page
```

#### useParams Hook:
```tsx
"use client";
import { useParams } from "next/navigation";

const params = useParams();
const blogId = params.blogId; // Get dynamic route parameter
```

---

## 11. Metadata

### What is it?
Metadata helps search engines and browsers understand your page. It includes title, description, and other SEO information.

### How it's used in this project:
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Tech Related Next'
}
```

This sets the page title that appears in the browser tab.

---

## 12. Static Site Generation (SSG)

### What is it?
SSG pre-renders pages at build time, making them super fast. Next.js generates HTML files for these pages before users visit them.

### How it's used in this project:

#### generateStaticParams:
```tsx
// app/blogs/[blogId]/page.tsx
export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const blogs = await response.json();
  return blogs.map((blog) => ({ blogId: String(blog.id) }));
}
```
This tells Next.js which blog pages to generate at build time.

#### dynamicParams:
```tsx
export const dynamicParams = false;
```
This prevents Next.js from generating pages at runtime that weren't pre-generated.

---

## 13. Context API

### What is it?
React Context lets you share data across components without passing props through every level. In this project, it's used for theme and sidebar state.

### How it's used in this project:

#### Theme Context:
```tsx
// app/context/ThemeContext.tsx
"use client";
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  // ... theme logic
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### Usage:
```tsx
const { darkMode, toggleTheme } = useTheme();
```

---

## 14. File Uploads

### What is it?
Handling file uploads from the browser to the server using FormData and API routes.

### How it's used in this project:
```tsx
// Client side (app/files/[[...files]]/page.tsx)
const uploadFile = async (file: File) => {
  const form = new FormData();
  form.append("file", file);
  form.append("path", path);
  
  await fetch("/api/files/upload", {
    method: "POST",
    body: form,
  });
};

// Server side (app/api/files/upload/route.ts)
export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File;
  const buffer = Buffer.from(await file.arrayBuffer());
  // Save file to disk
}
```

---

## 15. Hydration

### What is it?
Hydration is when React "wakes up" server-rendered HTML in the browser. Sometimes there can be mismatches between server and client HTML.

### How it's used in this project:
```tsx
// app/layout.tsx
<html lang="en" suppressHydrationWarning>
```
The `suppressHydrationWarning` attribute prevents warnings when server and client HTML differ slightly (like theme classes).

---

# Interview Questions and Answers

## Q1: What is the App Router in Next.js?
**Answer:** The App Router is Next.js's file-based routing system using the `app` directory. Each folder becomes a route, and `page.tsx` files create pages. It replaced the older `pages` directory and offers better features like layouts, server components, and streaming.

---

## Q2: What's the difference between Server Components and Client Components?
**Answer:** 
- **Server Components** (default): Run on the server, can access databases/APIs directly, can't use hooks or event handlers, faster and more secure.
- **Client Components** (need `"use client"`): Run in the browser, can use hooks (useState, useEffect), event handlers (onClick), and browser APIs (localStorage).

**Example:** If you need a button with onClick, use a Client Component. If you're just displaying data from an API, use a Server Component.

---

## Q3: How do dynamic routes work in Next.js?
**Answer:** Dynamic routes use square brackets `[]` in folder names. For example, `[blogId]` creates a route that accepts any value. The value is available in the `params` prop. In Next.js 15+, `params` is a Promise, so you need to `await` it.

**Example:**
```tsx
// app/blogs/[blogId]/page.tsx
export default async function Page({ params }) {
  const { blogId } = await params;
  return <h1>Blog {blogId}</h1>;
}
```

---

## Q4: What are catch-all routes?
**Answer:** Catch-all routes use `[[...name]]` (double brackets) to match multiple URL segments. They can match zero or more segments. Useful for file systems or nested navigation.

**Example:** `app/files/[[...files]]/page.tsx` matches:
- `/files`
- `/files/folder1`
- `/files/folder1/subfolder/file`

---

## Q5: What is generateStaticParams?
**Answer:** `generateStaticParams` is a function that tells Next.js which dynamic routes to pre-generate at build time. It returns an array of parameter objects. This enables Static Site Generation (SSG) for dynamic routes.

**Example:**
```tsx
export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map(blog => ({ blogId: String(blog.id) }));
}
```

---

## Q6: What does dynamicParams = false do?
**Answer:** When `dynamicParams = false`, Next.js will NOT generate pages at runtime for routes that weren't pre-generated. If a user visits a route that wasn't in `generateStaticParams`, they'll get a 404 instead of the page being generated on-demand.

---

## Q7: How do you handle file uploads in Next.js?
**Answer:** 
1. Create a form with file input on the client
2. Use FormData to send the file
3. Create an API route to handle POST request
4. Use `req.formData()` to get the file
5. Save it using Node.js `fs` module

**Example:**
```tsx
// Client
const form = new FormData();
form.append("file", file);
await fetch("/api/upload", { method: "POST", body: form });

// API Route
const form = await req.formData();
const file = form.get("file") as File;
```

---

## Q8: What are route groups?
**Answer:** Route groups use parentheses `()` in folder names. They organize routes without affecting the URL. Useful for grouping related pages or applying different layouts.

**Example:** `app/(auth)/login/page.tsx` creates `/login`, not `/(auth)/login`.

---

## Q9: How do you use Context API in Next.js?
**Answer:** 
1. Create a context with `createContext`
2. Create a provider component (must be Client Component)
3. Wrap your app with the provider in layout
4. Use `useContext` hook to access the context

**Note:** Context providers must be Client Components (`"use client"`), but they can wrap Server Components.

---

## Q10: What is suppressHydrationWarning?
**Answer:** `suppressHydrationWarning` is an HTML attribute that prevents React from warning about differences between server and client HTML. Useful when you intentionally have differences, like theme classes that are added on the client.

---

## Q11: How do you create API routes in Next.js App Router?
**Answer:** Create a `route.ts` file in `app/api/your-route/` folder. Export functions named after HTTP methods (GET, POST, DELETE, etc.). Use `NextResponse` to return responses.

**Example:**
```tsx
// app/api/users/route.ts
export async function GET() {
  return NextResponse.json({ users: [] });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ success: true });
}
```

---

## Q12: What's the difference between Link and useRouter?
**Answer:**
- **Link**: A component for navigation. Use it for links in JSX. It prefetches pages and provides better performance.
- **useRouter**: A hook for programmatic navigation. Use it when you need to navigate based on logic (like after form submission).

**Example:**
```tsx
// Link - for JSX
<Link href="/about">About</Link>

// useRouter - for logic
const router = useRouter();
router.push("/about");
router.back();
```

---

## Q13: How do you access route parameters in Client Components?
**Answer:** Use the `useParams` hook from `next/navigation`. It returns an object with all dynamic route parameters.

**Example:**
```tsx
"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const blogId = params.blogId;
  return <h1>Blog {blogId}</h1>;
}
```

---

## Q14: What is metadata in Next.js?
**Answer:** Metadata is information about your page (title, description, etc.) that helps with SEO and browser display. You export a `metadata` object from layouts or pages.

**Example:**
```tsx
export const metadata = {
  title: 'My Page',
  description: 'Page description'
}
```

---

## Q15: Why are params a Promise in Next.js 15+?
**Answer:** In Next.js 15, `params` became a Promise to support async route resolution and better streaming. You must `await` params before using them. This allows Next.js to optimize how routes are resolved.

**Example:**
```tsx
// Next.js 15+
export default async function Page({ params }) {
  const { id } = await params;
  // Use id
}

// Old way (Next.js 14 and earlier)
export default function Page({ params }) {
  const { id } = params;
  // Use id
}
```

---

## Q16: How do you handle multiple dynamic segments?
**Answer:** Create nested folders with brackets. For example, `app/product/[productId]/reviews/[reviewId]/page.tsx` creates routes like `/product/123/reviews/5`. Access both in params.

**Example:**
```tsx
export default async function Page({ params }) {
  const { productId, reviewId } = await params;
  return <h1>Product {productId}, Review {reviewId}</h1>;
}
```

---

## Q17: What's the difference between catch-all and optional catch-all routes?
**Answer:**
- **Catch-all** `[...slug]`: Must match at least one segment. `/files/[...slug]` won't match `/files`.
- **Optional catch-all** `[[...slug]]`: Can match zero or more segments. `/files/[[...slug]]` matches both `/files` and `/files/folder1`.

---

## Q18: How do you prevent hydration mismatches?
**Answer:** 
1. Use `suppressHydrationWarning` on elements with intentional differences
2. Initialize state from localStorage in `useEffect`, not during render
3. Use a script tag in layout to set initial values before React hydrates

**Example from project:**
```tsx
<script dangerouslySetInnerHTML={{
  __html: `/* Set theme before React loads */`
}} />
```

---

## Q19: Can you use hooks in Server Components?
**Answer:** No. Server Components cannot use React hooks (useState, useEffect, etc.) or browser APIs. Hooks only work in Client Components. If you need hooks, add `"use client"` to your component.

---

## Q20: How do you structure a Next.js App Router project?
**Answer:**
```
app/
  ├── layout.tsx          # Root layout
  ├── page.tsx            # Home page
  ├── about/
  │   └── page.tsx        # /about
  ├── blogs/
  │   ├── page.tsx        # /blogs
  │   └── [blogId]/
  │       └── page.tsx    # /blogs/123
  ├── api/
  │   └── files/
  │       └── route.ts    # /api/files
  └── components/         # Shared components
```

---

## Summary

This project demonstrates:
- ✅ App Router file-based routing
- ✅ Server and Client Components
- ✅ Dynamic and catch-all routes
- ✅ API routes with multiple HTTP methods
- ✅ Static Site Generation (SSG)
- ✅ Context API for state management
- ✅ File uploads
- ✅ Navigation (Link, useRouter, useParams)
- ✅ Layouts and metadata
- ✅ Route groups
- ✅ Hydration handling

All these concepts work together to build a modern, fast, and scalable Next.js application!

