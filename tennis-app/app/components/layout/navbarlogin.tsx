import React, { useState } from "react";
import { auth, db } from "@/app/firebase/firebaseConfig";
import { signOut, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import Modal from "../reusable/deletemodal";

interface SideNavbarProps {
    setView: (view: string) => void;
    activeView: string;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ setView, activeView }) => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/");
    };

    const handleDeleteUser = async () => {
        const user = auth.currentUser;
        if (user) {
            try {
                // Delete user data from Firestore
                await deleteDoc(doc(db, "users", user.uid));

                // Delete user authentication
                await deleteUser(user);

                // Redirect to home page
                router.push("/");
            } catch (error) {
                console.error("Error deleting user: ", error);
            }
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="fixed h-screen w-64 bg-black flex flex-col items-center">
            {/* Profile pics */}
            <div className="h-20 w-20 mt-4 overflow-hidden rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    className="h-20 w-20 p-5 text-white bg-gray-500 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            </div>

            {/* List of tabs */}
            <ul className="flex flex-col p-4 mt-4 w-full">
                <li className="mb-4">
                    <button onClick={() => setView('home')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'home' ? 'bg-white !text-black' : 'text-white'}`}>
                        Home
                    </button>
                </li>
                <li className="mb-4">
                    <button onClick={() => setView('map')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'map' ? 'bg-white !text-black' : 'text-white'}`}>
                        Map
                    </button>
                </li>
                <li className="mb-4">
                    <button onClick={() => setView('favorite')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'favorite' ? 'bg-white !text-black' : 'text-white'}`}>
                        Favorite
                    </button>
                </li>
                <li className="mb-4">
                    <button onClick={() => setView('library')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'library' ? 'bg-white !text-black' : 'text-white'}`}>
                        Library
                    </button>
                </li>
                <li className="mb-4">
                    <button onClick={handleLogout} className="text-white text-2xl w-full py-4 px-2 mb-2">
                        Logout
                    </button>
                </li>
                <li>
                    <button onClick={openModal} className="text-red-500 text-2xl w-full py-4 px-2 mb-2">
                        Delete Account
                    </button>
                </li>
            </ul>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={handleDeleteUser}
                title="Confirm Deletion"
                description="Are you sure you want to delete your account? This action cannot be undone."
            />
        </nav>
    );
};

export default SideNavbar;
