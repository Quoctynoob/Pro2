// app/components/AuthForm.tsx
import { useState } from 'react';
import LoginModal from './LoginModal';
import { useRouter } from 'next/router';

const AuthForm: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const router = useRouter();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Authentication</h1>
        <div className="flex flex-col space-y-4">
          <button
            onClick={openLoginModal}
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

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
};

export default AuthForm;