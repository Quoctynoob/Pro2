import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth, db } from "@/app/firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SideNavbar from "./navbarlogin";

import Home from "../tabs/Home";
import Map from "../tabs/Map";
import Favorite from "../tabs/Favorite";
import Library from "../tabs/Library";
import SearchBar from "../reusable/SearchBar";

const DashboardContent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [note, setNote] = useState<string>("");
  const [view, setView] = useState<string>('home');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        // Fetch user-specific data from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          setNote(userDoc.data().note || "");
        }
      } 
      else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const renderContent = () => {
    switch(view) {
      case 'map':
        return <Map/>
      case 'favorite':
        return <Favorite/>
      case 'library':
        return <Library/>
      default:
        return <Home/>
    }
  }
  return (
    <div className="flex">
      <SideNavbar setView={setView} activeView={view}/> {/* Add the Sidebar component */}
      <div className="flex-1 min-h-screen bg-green-50 p-6 ml-64">
          <SearchBar />
          {user ? (
            userData ? (
              <div>
                {renderContent()}
              </div>
            ) : (
              <div className='flex space-x-2 justify-center items-center bg-green-50 h-screen dark:invert'>
                <span className='sr-only'>Loading...</span>
                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
              </div>
            )
          ) : (
            <div className='flex space-x-2 justify-center items-center bg-green-50 h-screen dark:invert'>
              <span className='sr-only'>Loading...</span>
              <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
              <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
              <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
            </div>
          )}
      </div>
    </div>
    
  );
};

export default DashboardContent;
