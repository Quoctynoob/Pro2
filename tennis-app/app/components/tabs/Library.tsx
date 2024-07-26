import React from 'react';
import { courts } from '@/data/courtsData'; // Adjust the path as needed
import CourtCard from '../reusable/CourtCard'; // Import the CourtCard component

const Library: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Courts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courts.map(court => (
          <CourtCard
            key={court.id}
            id={court.id}
            name={court.name}
            image={court.image}
            tags={court.tags} // Pass the tags data here
            link={`/courts/${court.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;