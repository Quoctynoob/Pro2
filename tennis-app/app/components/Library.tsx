import React, { useState, useEffect } from 'react';
import { courts } from '@/data/courtsData'; // Adjust the path as needed
import { auth, db } from '../firebase/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import CourtCard from '../components/CourtCard'; // Import the CourtCard component

const Library: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setFavorites(userDoc.data().favorites || []);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleToggleFavorite = async (id: string) => {
    let updatedFavorites;
    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter(favoriteId => favoriteId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }
    setFavorites(updatedFavorites);
    if (user) {
      await setDoc(doc(db, 'users', user.uid), { favorites: updatedFavorites }, { merge: true });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Courts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courts.map(court => (
          <CourtCard
            key={court.id}
            userId={user?.uid}
            id={court.id}
            name={court.name}
            image={court.image}
            onToggleFavorite={handleToggleFavorite}
            isFavorite={favorites.includes(court.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
