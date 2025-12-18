"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type FileItem = {
  name: string;
  size: number;
  url: string;
  isImage: boolean;
};
interface User {
  id: number;
  username: string;
  email: string;
}
export default function FilesPage() {
  const params = useParams();
  console.info(params);
  const path = ((params?.files as string[]) || undefined)?.join("/") || "";
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = () => {
    if (!username || !email) return alert("Please fill all fields");

    const newUser = {
      id: Date.now(), // simple id
      username,
      email,
    };

    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  useEffect(() => {
    fetch(`/api/files?path=${path}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setFiles(data);
        setLoading(false);
      });
  }, [path]);

  const uploadFile = async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    form.append("path", path);

    await fetch("/api/files/upload", {
      method: "POST",
      body: form,
    });

    location.reload();
  };
  const loadFiles = async () => {
    const res = await fetch(`/api/files?path=${path}`);
    setFiles(await res.json());
  };
  const deleteFile = async (fileName: string) => {
    await fetch(`/api/files?path=${path}&file=${fileName}`, {
      method: "DELETE",
    });
    loadFiles();
  };

  return (
    <>
      <div className="p-8 max-w-6xl mx-auto">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          <Link href="/">Go Home</Link>
        </button>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="something@gmail.com"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleAddUser}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add User
            </button>
          </div>
        </form>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border">{user.id}</td>
                <td className="py-2 px-4 border">{user.username}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          Files / {path || "root"}
        </h1>

        <label className="inline-block mb-4">
          <input
            type="file"
            className="hidden"
            onChange={(e) => e.target.files && uploadFile(e.target.files[0])}
          />
          <span className="px-4 py-2 bg-black text-white rounded cursor-pointer hover:bg-gray-800">
            Upload File
          </span>
        </label>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Preview</th>
                  <th className="text-left p-3">File Name</th>
                  <th className="text-left p-3">Size (KB)</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr key={file.name} className="border-t">
                    <td className="p-3">
                      {file.isImage ? (
                        <img
                          src={file.url}
                          alt={file.name}
                          className="h-14 w-14 object-cover rounded border"
                        />
                      ) : (
                        <div className="h-14 w-14 flex items-center justify-center text-xs bg-gray-200 rounded">
                          N/A
                        </div>
                      )}
                    </td>
                    <td className="p-3">
                      <a
                        href={file.url}
                        target="_blank"
                        className="text-blue-600 hover:underline"
                      >
                        {file.name}
                      </a>
                    </td>
                    <td className="p-3">{(file.size / 1024).toFixed(2)}</td>
                    <td className="p-3 flex gap-2">
                      <a
                        href={file.url}
                        download
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        Download
                      </a>
                      <button
                        onClick={() => deleteFile(file.name)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
