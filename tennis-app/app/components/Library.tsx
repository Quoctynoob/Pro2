import React from 'react';
import { courts } from '@/data/courtsData'; // Adjust the path as needed
import Link from 'next/link';
import CourtCard from '../components/CourtCard'; // Import the CourtCard component

const Library: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Courts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courts.map(court => (
          <Link href={`/courts/${court.id}`} key={court.id}>
            <CourtCard id={court.id} name={court.name} image={court.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Library;