import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SideNavbar from "./navbarlogin";

import Home from "./Home";
import Map from "./Map";
import Favorite from "./Favorite";
import SearchBar from "./SearchBar";

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
              <p>Loading user data...</p>
            )
          ) : (
            <p>Loading...</p>
          )}
      </div>
    </div>
    
  );
};

export default DashboardContent;
