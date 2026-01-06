import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/product", label: "Products" },
    { href: "/blogs", label: "Blogs" },
    { href: "/files", label: "All Files CRUD" },
    { href: "/intercepting-concept", label: "Explore Intercepting Routes →" },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-black mb-8 text-center">
        Welcome Home!
      </h1>
      <p className="text-gray-600 dark:text-black-300 text-lg mb-6 text-center">
        Navigate through the pages below:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex items-center justify-center text-center cursor-pointer
                            transition transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl
                            duration-300 ease-in-out"
            >
              <span className="text-gray-800 dark:text-white font-semibold text-lg">
                {link.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
