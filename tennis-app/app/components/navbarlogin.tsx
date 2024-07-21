import React from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useRouter } from "next/router";

interface SideNavbarProps {
    setView: (view: string) => void;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ setView }) => {
    const router = useRouter();


    const handleLogout = async () => {
        await signOut(auth);
        router.push("/");
      };

    return (
        <nav className="fixed h-screen w-64 bg-black">
            <ul>
                <li className="mb-4">
                    <button onClick={() => setView('home')} className="text-black bg-white block w-full text-left p-2 hover:bg-gray-700 rounded">
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('map')} className="text-white">
                        Map
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('favorite')} className="text-white">
                        Favorite
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('addcourts')} className="text-white">
                        Add Courts
                    </button>
                </li>
                <li>
                    <button onClick={handleLogout} className="text-white">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default SideNavbar;