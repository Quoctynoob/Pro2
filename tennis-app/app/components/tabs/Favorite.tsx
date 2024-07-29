import React, { useState, useEffect } from 'react';
import CourtCard from '../reusable/CourtCard'; // Import the CourtCard component
import { courts } from '@/data/courtsData'; // Adjust the path as needed

interface Court {
  id: string;
  name: string;
  image: string;
  tags?: string[];
}

interface FavoriteProps {
  favorites: string[];
  onFavoriteToggle: (id: string) => void;
}

const Favorite: React.FC<FavoriteProps> = ({ favorites, onFavoriteToggle }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Favorite Courts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map(id => {
          const court = courts.find((court: Court) => court.id === id);
          if (!court) return null;
          return (
            <CourtCard
              key={court.id}
              id={court.id}
              name={court.name}
              image={court.image}
              tags={court.tags} // Pass the tags data here
              link={`/courts/${court.id}`}
              isFavorite={true}
              onFavoriteToggle={onFavoriteToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorite;
