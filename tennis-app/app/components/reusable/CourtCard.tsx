import React, { useState } from 'react';
import Link from 'next/link';

interface CourtCardProps {
  id: string;
  name: string;
  image: string;
  tags?: string[]; // Optional tags prop
  link: string; // Destination URL for the link
  isFavorite: boolean;
  onFavoriteToggle: (id: string) => void;
}

const CourtCard: React.FC<CourtCardProps> = ({ id, name, image, tags, link, isFavorite, onFavoriteToggle }) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default link behavior
    onFavoriteToggle(id);
  };

  return (
    <Link href={link} legacyBehavior>
      <a className="relative bg-black flex flex-col justify-between border rounded-xl shadow-md transition duration-500 hover:scale-105 transform-gpu shadow-primary-400" id={id}>
        <div className="relative w-full rounded-t-xl overflow-hidden">
          <div className="relative w-full aspect-video">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-1 p-1 bg-gradient-to-b text-black bg-mintCream name-container">
              <h2 className="text-sm font-semibold">{name}</h2>
            </div>
            <div className="absolute top-0 left-0 p-2 cursor-pointer" onClick={handleFavoriteClick}>
              {isFavorite ? (
                <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-yellow-500">
                  <g fill="none" fillRule="evenodd">
                    <path d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z" fill="#000000" className="fill-f6ab27"></path>
                    <path d="M17.148 38.872a6.124 6.124 0 0 0-1.654-5.264L6.07 23.983l12.857-1.957a5.966 5.966 0 0 0 4.49-3.37L29 6.802l5.581 11.85a5.969 5.969 0 0 0 4.492 3.374l12.857 1.957-9.426 9.627a6.125 6.125 0 0 0-1.652 5.264l2.184 13.348-11.194-6.167a5.88 5.88 0 0 0-5.683 0l-11.195 6.167 2.184-13.35Z" fill="#F4CD1E" className="fill-f4cd1e"></path>
                  </g>
                </svg>
              ) : (
                <svg viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-gray-500">
                  <g fill="none" fillRule="evenodd">
                    <path d="M30.757 1.144 38.2 16.948a1.968 1.968 0 0 0 1.475 1.123l16.644 2.534a2.08 2.08 0 0 1 1.086 3.502L45.362 36.408a2.115 2.115 0 0 0-.563 1.818l2.843 17.37a1.98 1.98 0 0 1-2.843 2.164l-14.887-8.201a1.88 1.88 0 0 0-1.824 0l-14.887 8.2a1.98 1.98 0 0 1-2.843-2.163l2.843-17.37a2.115 2.115 0 0 0-.563-1.818L.594 24.107a2.08 2.08 0 0 1 1.086-3.502l16.644-2.534a1.968 1.968 0 0 0 1.475-1.123l7.444-15.804a1.92 1.92 0 0 1 3.514 0Z" fill="#000000" className="fill-f6ab27"></path>
                    <path d="M17.148 38.872a6.124 6.124 0 0 0-1.654-5.264L6.07 23.983l12.857-1.957a5.966 5.966 0 0 0 4.49-3.37L29 6.802l5.581 11.85a5.969 5.969 0 0 0 4.492 3.374l12.857 1.957-9.426 9.627a6.125 6.125 0 0 0-1.652 5.264l2.184 13.348-11.194-6.167a5.88 5.88 0 0 0-5.683 0l-11.195 6.167 2.184-13.35Z" fill="#ffffff" className="fill-f4cd1e"></path>
                  </g>
                </svg>
              )}
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
