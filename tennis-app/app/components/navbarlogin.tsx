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
                    <button onClick={() => setView('home')} className={`text-white ${activeView === 'home' ? 'bg-white !text-black rounded-lg' : ''}`}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('map')} className={`text-white ${activeView === 'map' ? 'bg-white !text-black' : ''}`}>
                        Map
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('favorite')} className={`text-white ${activeView === 'favorite' ? 'bg-white !text-black' : ''}`}>
                        Favorite
                    </button>
                </li>
                <li>
                    <button onClick={() => setView('addcourts')} className={`text-white ${activeView === 'addcourts' ? 'bg-white !text-black' : ''}`}>
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