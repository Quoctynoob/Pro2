// app/components/LoginModal.tsx
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebase/firebaseConfig";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose(); // Close the modal on successful login
      router.push("/dashboard");
    }
    catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose(); // Close the modal on successful login
      router.push("/dashboard");
    }
    catch (err: any) {
      setError(err.message);
    }
  };

  const handleGithubSignIn = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
      onClose();
      router.push("/dashboard");
    }
    catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-6 text-black">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="divide-y-8 divide-white">
            <div className="flex items-center justify-center">
              <button type="button" className="flex items-center bg-white border border-gray-300 rounded-lg px-16 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={handleGoogleSignIn}>
                  <img src="/icons/logingoogle.svg" alt="google icon" className="h-6 w-6 mr-2"/>
                  <span>Continue with Google</span>
              </button>
            </div>

            <div className="flex items-center justify-center">
              <button type="button" className="flex items-center bg-gray-600 border border-gray-300 rounded-lg shadow-md px-16 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-offset-gray-200" onClick={handleGithubSignIn}>
                <img src="/icons/logingithub.svg" alt="github icon" className="h-6 w-6 mr-2" />
                <span>Continue with GitHub</span>
              </button>
            </div>
          </div>

          <div className=" border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Or Sign in with e-mail
            </div>
          </div>
            
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>

          <div className="text-black">
            <label>Don't have an account with us? </label>
            <a href="/signup" className="text-blue-500"><u>Register Here</u></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;