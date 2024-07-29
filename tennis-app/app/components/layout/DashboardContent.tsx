import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, User, signOut, deleteUser } from "firebase/auth";
import { auth, db } from "@/app/firebase/firebaseConfig";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import SideNavbar from "./navbarlogin";

import Home from "../tabs/Home";
import Map from "../tabs/Map";
import Favorite from "../tabs/Favorite";
import Library from "../tabs/Library";
import SearchBar from "../reusable/SearchBar";
import LoadingPage from "../reusable/LoadingPage";

const DashboardContent: React.FC = () => {
  // State to store user data
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [view, setView] = useState<string>('home');
  const [favorites, setFavorites] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Listener for authentication state change
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Authentication user
        setUser(user);

        // Fetch user-specific data from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
      // If not redirect back to home page
      else {
        router.push("/");
      }
    });

    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);

    return () => unsubscribe();
  }, [router]);

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

  const handleFavoriteToggle = (id: string) => {
    const updatedFavorites = favorites.includes(id) ? favorites.filter(favId => favId !== id) : [...favorites, id];
    setFavorites(updatedFavorites);

    // Update localStorage or other persistent storage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  // Switch statement to change tab but on the same page
  const renderContent = () => {
    switch(view) {
      case 'map':
        return <Map/>
      case 'favorite':
        return <Favorite favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />
      case 'library':
        return <Library favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />
      default:
        return <Home username={userData.username}/>
    }
  };

  if (!user || !userData) {
    return <LoadingPage />;
  }

  return (
    <div className="flex">
      {/* Navbar */}
      <SideNavbar setView={setView} activeView={view} firstName={userData.firstName} lastName={userData.lastName} onDeleteUser={handleDeleteUser}/>

      {/* Main Content Area */}
      <div className="flex-1 min-h-screen bg-green-50 p-6 ml-64">
        <SearchBar />
        {renderContent()}
      </div>
    </div>
    
  );
};

export default DashboardContent;
