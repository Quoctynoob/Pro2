// app/components/AuthForm.tsx
import { useRouter } from "next/router";

export default function AuthForm() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Authentication</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => router.push("/login")}
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="w-full bg-green-500 text-white p-2 rounded"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}