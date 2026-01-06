import Link from "next/link";

export default function InterceptingConcept() {
  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            🧪 Intercepting Routes Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Test all types of intercepting routes in Next.js. Click the links below
            from different pages to see how intercepting routes work.
          </p>
        </div>

        {/* Definition Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            📖 What are Intercepting Routes?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Intercepting Routes</strong> allow you to intercept route navigation
            and show a different UI (like a modal or overlay) instead of navigating to a
            new page. This creates a seamless user experience where content appears in a
            modal when navigating from certain routes, but still shows the full page when
            accessed directly via URL.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded mt-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Key Point:</strong> Intercepting routes only work for{" "}
              <strong>client-side navigation</strong> (Link clicks, router.push). Direct
              URL access always shows the full page.
            </p>
          </div>
        </div>

        {/* Syntax Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              (.) Same Level
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Intercepts navigation at the same level. Example: from /blogs to
              /blogs/[blogId]
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200">
              app/blogs/(.)[blogId]/page.tsx
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              (..) One Level Up
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Intercepts from one level up (cannot be used at root). Example: from
              /product/1 to /blogs/blog1
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200">
              app/product/[productId]/(..)blogs/[blogId]/page.tsx
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              (..)(..) Two Levels Up
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Intercepts from two levels up (cannot be used at root). Example: from /category/1 to /product/1/reviews/review1
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200">
              app/category/[categoryId]/(..)(..)product/[productId]/reviews/[reviewId]/page.tsx
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              (...) From Root
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Intercepts from anywhere in the app. Catches navigation from any route.
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200">
              app/(...)blogs/[blogId]/page.tsx
            </div>
          </div>
        </div>

        {/* Test Section 1: Same Level (.) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            1️⃣ Test Same Level Intercept (.)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Navigate to the blogs page first, then click a blog link to see the (.)
            intercepting route in action.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/blogs"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
            >
              Go to Blogs Page →
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Once on /blogs, click any blog link to see the modal appear instead of
            navigating to the full page.
          </p>
        </div>

        {/* Test Section 2: From Root (...)} */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            2️⃣ Test Root Level Intercept (...)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Click these blog links from this page (or any page) to see the (...)
            intercepting route. It catches navigation from anywhere!
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/blogs/blog1"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition font-semibold"
            >
              Blog 1
            </Link>
            <Link
              href="/blogs/blog2"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition font-semibold"
            >
              Blog 2
            </Link>
            <Link
              href="/blogs/blog3"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition font-semibold"
            >
              Blog 3
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            These links will show a modal because of the (...) intercepting route that
            catches navigation from anywhere.
          </p>
        </div>

        {/* Test Section 3: One Level Up (..)} */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            3️⃣ Test One Level Up Intercept (..)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Navigate to a product page first, then click a blog link to see the (..)
            intercepting route. This demonstrates (..) in a nested context.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/product/1"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Go to Product 1 →
            </Link>
            <Link
              href="/product/2"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Go to Product 2 →
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Once on a product page, click a blog link there to see the (..) intercepting
            route modal.
          </p>
        </div>

        {/* Test Section 4: Two Levels Up (..)(..)} */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            4️⃣ Test Two Levels Up Intercept (..)(..)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Navigate to a category page first, then click a review link to see the (..)(..)
            intercepting route. This demonstrates intercepting routes two levels up in a nested context.
            <strong className="block mt-2 text-yellow-600 dark:text-yellow-400">
              Note: (..)(..) cannot be used at root level, only in nested contexts.
            </strong>
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/category/electronics"
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition font-semibold"
            >
              Go to Electronics Category →
            </Link>
            <Link
              href="/category/clothing"
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition font-semibold"
            >
              Go to Clothing Category →
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Once on a category page, click any review link there to see the (..)(..) intercepting
            route modal. This intercepts navigation from /category/[categoryId] to /product/[productId]/reviews/[reviewId]
            (two levels up).
          </p>
        </div>

        {/* Test Section 5: Nested Route (.)} */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            5️⃣ Test Nested Route Intercept (.)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Navigate to a product page and click a review link to see nested intercepting
            routes in action (same level intercept).
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <Link
              href="/product/1"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              Go to Product 1 →
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Once on the product page, click any review link to see the nested (.)
            intercepting route modal (intercepts from /product/1 to /product/1/reviews/review1).
          </p>
        </div>

        {/* Direct Access Note */}
        <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
            ⚠️ Important Note
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Intercepting routes <strong>only work for client-side navigation</strong>.
            If you type a URL directly in the browser or refresh the page, you'll see the
            full page (not the modal). This is by design - users expect full pages when
            accessing URLs directly.
          </p>
          <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-800 rounded">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Try it:</strong> Type{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                /blogs/blog1
              </code>{" "}
              directly in your browser address bar - you'll see the full page, not the
              modal!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


