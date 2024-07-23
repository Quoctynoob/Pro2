// pages/courts/[id].tsx
import { useRouter } from 'next/router';
import { courts } from '@/data/courtsData'; // Adjust the path as needed

const CourtDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const court = courts.find(court => court.id === id);

  if (!court) {
    return <p>Court not found</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{court.name}</h1>
      <img src={court.image} alt={court.name} className="w-64 h-64 mb-4" />
      <p>Latitude: {court.lat}</p>
      <p>Longitude: {court.lng}</p>
    </div>
  );
};

export default CourtDetails;