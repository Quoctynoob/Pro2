import React from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { useRouter } from "next/router";

interface SideNavbarProps {
    setView: (view: string) => void;
    activeView: string;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ setView, activeView  }) => {
    const router = useRouter();


    const handleLogout = async () => {
        await signOut(auth);
        router.push("/");
    };

    return (
        <nav className="fixed h-screen w-64 bg-black">
            <ul className="flex flex-col p-4">
                <li className="mb-4">
                    <button onClick={() => setView('home')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'home' ? 'bg-white !text-black' : 'text-white'}`}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('map')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'map' ? 'bg-white !text-black' : 'text-white'}`}>
                        Map
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('favorite')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'favorite' ? 'bg-white !text-black' : 'text-white'}`}>
                        Favorite
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('addcourts')} className={`text-2xl w-full py-4 px-2 mb-2 transition-colors duration-300 rounded-md ${activeView === 'addcourts' ? 'bg-white !text-black' : 'text-white'}`}>
                        Add Courts
                    </button>
                </li>
                <li>
                    <button onClick={handleLogout} className="text-white text-2xl w-full py-4 px-2 mb-2">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default SideNavbar;