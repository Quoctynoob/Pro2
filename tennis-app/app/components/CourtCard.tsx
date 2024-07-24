import React from 'react';
import Link from 'next/link';

interface CourtCardProps {
  id: string;
  name: string;
  image: string;
  tags?: string[]; // Optional tags prop
  link: string; // Destination URL for the link
}

const CourtCard: React.FC<CourtCardProps> = ({ id, name, image, tags, link }) => {
  return (
    <Link href={link} legacyBehavior>
      <a className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
        <div className="relative">
          <div className="relative w-full aspect-video">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="font-medium text-sm">Popular court</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 px-4 py-2">
          {tags && tags.length > 0 && (
            <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  title="type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </a>
    </Link>
  );
};

export default CourtCard;