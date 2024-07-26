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
      <a className="relative bg-black flex flex-col justify-between border rounded-xl shadow-md transition duration-500 hover:scale-105 transform-gpu shadow-primary-400" id={id}>
        <div className="relative w-full rounded-t-xl overflow-hidden">
          <div className="relative w-full aspect-video">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-1 p-1 bg-gradient-to-b text-black bg-mintCream name-container">
              <h2 className="text-sm font-semibold">{name}</h2>
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
                  className="flex items-center cursor-pointer gap-0.5 bg-modpurple text-black px-2 py-0.5 rounded-full"
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