"use client";

import { useEffect, useState } from "react";

type Comment = {
  id: number;
  text: string;
};

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch comments on load
  useEffect(() => {
    fetch("http://localhost:3000/comments/api", {
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch comments");
        return res.json();
      })
      .then((data) => setComments(data));
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const text = (form.elements.namedItem("text") as HTMLInputElement).value;

    await fetch("http://localhost:3000/comments/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    form.reset();

    // Re-fetch updated comments
    const res = await fetch("http://localhost:3000/comments/api", {
      cache: "no-store",
    });
    const updated = await res.json();
    setComments(updated);

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      {/* Comments Card */}
      <div className="rounded-2xl bg-white shadow-md p-5">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          💬 Comments
        </h2>

        <ul className="space-y-3">
          <div>
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:shadow-sm transition"
              >
                <span className="text-xs font-medium text-gray-400 mr-2">
                  #{comment.id}
                </span>
                <span className="text-gray-700">{comment.text}</span>
              </li>
            ))}
          </div>

          {comments.length === 0 && (
            <p className="text-sm text-gray-400 text-center">
              No comments yet. Be the first 🚀
            </p>
          )}
        </ul>
      </div>

      {/* Add Comment Card */}
      <div className="rounded-2xl bg-white shadow-md p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          ➕ Add a new comment
        </h3>

        <form onSubmit={onSubmit} className="flex gap-2">
          <input
            type="text"
            name="text"
            required
            placeholder="Write something..."
            className="flex-1 rounded-xl border border-gray-300 px-4 py-2 text-sm
                       focus:outline-none focus:ring-2 focus:ring-black/10
                       transition"
          />

          <button
            disabled={loading}
            type="submit"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white
                       hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed
                       transition"
          >
            {loading ? "Adding..." : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
