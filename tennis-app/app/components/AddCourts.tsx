import React, { useState } from 'react';
import { db, storage } from '../firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const courtDetails = [
  'Indoor',
  'Outdoor',
  'Clay',
  'Grass',
  'Hard', // Add your court details here
];

const AddCourts: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [info, setInfo] = useState('');
  const [detail, setDetail] = useState(courtDetails[0]);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !info || !image) return;

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `courts/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      // Save court data to Firestore
      await addDoc(collection(db, 'courts'), {
        name,
        address,
        info,
        detail,
        imageUrl,
      });

      setName('');
      setAddress('');
      setInfo('');
      setDetail(courtDetails[0]);
      setImage(null);
      alert('Court added successfully');
    } catch (error) {
      console.error('Error adding court: ', error);
      alert('Failed to add court');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Court Name"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Court Address"
        className="p-2 border border-gray-300 rounded"
      />
      <textarea
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        placeholder="Court Information"
        className="p-2 border border-gray-300 rounded"
      />
      <select
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        {courtDetails.map((detail) => (
          <option key={detail} value={detail}>
            {detail}
          </option>
        ))}
      </select>
      <input
        type="file"
        onChange={handleImageChange}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Court
      </button>
    </form>
  );
};

export default AddCourts;