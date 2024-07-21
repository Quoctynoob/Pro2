import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import SideNavbar from "./navbarlogin";

const DashboardContent: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [note, setNote] = useState<string>("");
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
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSaveNote = async () => {
    if (user) {
      await updateDoc(doc(db, "users", user.uid), {
        note
      });
      alert("Note saved successfully!");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
   /*<div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        {user ? (
          userData ? (
            <div>
              <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
              <p className="text-xl mb-4">Welcome, {userData.email}</p>
              <div className="mb-4">
                <label className="block text-gray-700">Your Note</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  rows={5}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                ></textarea>
              </div>
              <button onClick={handleSaveNote} className="bg-blue-500 text-white p-2 rounded">
                Save Note
              </button>
              <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mt-4">
                Logout
              </button>
            </div>
          ) : (
            <p>Loading user data...</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>*/
    <div className="bg-green-50 min-h-screen">
      <SideNavbar/>
    </div>
  );
};

export default DashboardContent;
