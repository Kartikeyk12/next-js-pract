// TODO (DONE): Implement error boundary for review page
// ! Error Boundry Component- to handle errors in nextjs we can create a file named error.tsx in
// ! the same directory as the page that may throw an error.
// ! This component will be rendered when an error occurs in the page or any of its child components.

// * For handling errors in nested routes, we can create an error.tsx file in the nested route directory.
// * and it will bubble up the error to the nearest error boundary.

"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    console.info("Reloading the page...");
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <h2 className="text-red-600">Something went wrong! {error.message}</h2>
      <button onClick={reload} className="underline text-blue-600 pointer">
        Try again
      </button>
    </>
  );
}
