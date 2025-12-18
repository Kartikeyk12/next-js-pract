# 🚀 Next.js Practice Project

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

**A modern, full-featured Next.js application built with the latest technologies**

[![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=for-the-badge)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📖 About

This is a comprehensive Next.js practice project showcasing modern web development techniques, including dynamic routing, API routes, file management, theme switching, and responsive UI components. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

> ⚠️ **Note:** This project is currently **in progress** and actively being developed. New features and improvements are being added regularly.

---

## ✨ Features

### 🎨 User Interface
- **🌓 Dark/Light Mode Toggle** - Seamless theme switching with persistent preferences
- **📱 Responsive Design** - Fully responsive layout that works on all devices
- **🎯 Collapsible Sidebar** - Smooth, animated sidebar navigation
- **💫 Modern UI** - Beautiful, clean interface built with Tailwind CSS v4

### 🛠️ Functionality
- **📄 Dynamic Routing** - Dynamic routes for blogs, products, and nested pages
- **📁 File Management System** - Complete CRUD operations for file handling
- **📤 File Upload** - Upload and manage files with preview capabilities
- **🔍 File Browser** - Navigate through file directories with ease
- **👥 User Management** - Add and manage users with a simple interface

### 🏗️ Architecture
- **⚡ App Router** - Next.js 16 App Router for optimal performance
- **🎣 React Context** - Theme and Sidebar state management with Context API
- **🔌 API Routes** - RESTful API endpoints for file operations
- **📦 TypeScript** - Full type safety throughout the application

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16.0.10 |
| **UI Library** | React 19.2.1 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Build Tool** | Next.js Built-in |
| **Linting** | ESLint |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd next-pract
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
next-pract/
├── app/
│   ├── about/              # About page
│   ├── api/                # API routes
│   │   └── files/          # File management API
│   ├── blogs/              # Blog pages with dynamic routing
│   │   └── [blogId]/       # Dynamic blog routes
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # App header with theme toggle
│   │   ├── Sidebar.tsx     # Collapsible sidebar
│   │   └── Footer.tsx      # App footer
│   ├── context/            # React Context providers
│   │   ├── ThemeContext.tsx    # Theme management
│   │   └── SidebarContext.tsx  # Sidebar state
│   ├── files/              # File management pages
│   │   └── [[...files]]/   # Catch-all file routes
│   ├── product/            # Product pages
│   │   └── [productId]/    # Dynamic product routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
│   └── uploads/            # Uploaded files directory
└── package.json
```

---

## 🎯 Available Pages

- **🏠 Home** (`/`) - Main landing page with navigation cards
- **ℹ️ About** (`/about`) - About page
- **📦 Products** (`/product`) - Product listing page
  - **Product Details** (`/product/[productId]`) - Individual product pages
    - **Reviews** (`/product/[productId]/reviews/[reviewId]`) - Product reviews
- **📝 Blogs** (`/blogs`) - Blog listing page
  - **Blog Details** (`/blogs/[blogId]`) - Individual blog posts
- **📁 Files** (`/files`) - File management interface with CRUD operations

---

## 🎨 Key Features Explained

### Dark Mode Toggle
The application includes a fully functional dark/light mode toggle that:
- Persists user preference in localStorage
- Respects system preferences on first visit
- Applies theme instantly without flash
- Works seamlessly with Tailwind CSS v4

### File Management
A complete file management system with:
- File upload functionality
- File preview (images and videos)
- Directory navigation
- File listing with metadata
- RESTful API endpoints

### Dynamic Routing
Leverages Next.js dynamic routing for:
- Blog posts with dynamic `[blogId]` routes
- Product pages with nested `[productId]` routes
- File browser with catch-all `[[...files]]` routes

---

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🔮 Roadmap

This project is actively being developed. Planned features include:

- [ ] Authentication system
- [ ] Database integration
- [ ] Enhanced file management features
- [ ] Blog content management
- [ ] Product catalog improvements
- [ ] Search functionality
- [ ] Performance optimizations
- [ ] Unit and integration tests
- [ ] Documentation improvements

---

## 🤝 Contributing

Contributions are welcome! This is a practice project, so feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Share feedback

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Built with ❤️ as a Next.js learning and practice project.

---

<div align="center">

**⭐ If you find this project helpful, consider giving it a star! ⭐**

Made with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)

</div>
