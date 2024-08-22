import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';
import { courts } from '@/data/courtsData'; // Ensure this path is correct

const libraries: Libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
const center = {
  lat: 43.65307591580248,
  lng: -79.38768760409539,
};

const Map: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Ensure this is set in your environment variables
    libraries,
  });

  const [visibleCourts, setVisibleCourts] = useState(courts);
  const [selectedCourt, setSelectedCourt] = useState<any | null>(null);
  const [showMarkers, setShowMarkers] = useState(false); // State to manage marker visibility

  const onMarkerClick = (court: any) => {
    setSelectedCourt(court);
  };

  const onBoundsChanged = (map: google.maps.Map) => {
    const bounds = map.getBounds();
    if (bounds) {
      const visible = courts.filter(court => bounds.contains(new google.maps.LatLng(court.lat, court.lng)));
      setVisibleCourts(visible);
    }
  };

  const toggleMarkers = () => {
    setShowMarkers(!showMarkers);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="relative">
      <h2>Google Map</h2>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onLoad={map => onBoundsChanged(map)}
        onBoundsChanged={() => onBoundsChanged}
      >
        {showMarkers && visibleCourts.map((court) => (
          <Marker
            key={court.id}
            position={{ lat: court.lat, lng: court.lng }}
            title={court.name}
            onClick={() => onMarkerClick(court)}
          />
        ))}
        {selectedCourt && (
          <InfoWindow
            position={{ lat: selectedCourt.lat, lng: selectedCourt.lng }}
            onCloseClick={() => setSelectedCourt(null)}
            options={{ pixelOffset: new google.maps.Size(0, -30) }}
          >
            <div>
              <h2>{selectedCourt.name}</h2>
              <p>{selectedCourt.description}</p>
              <ul>
                {selectedCourt.tags.map((tag: string, index: number) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
      <button onClick={toggleMarkers} 
      className="absolute bottom-6 left-2 bg-lime-300 rounded-md px-4 py-2 text-lg font-semibold transition-transform transform hover:scale-105">
        {showMarkers ? 'Hide Markers' : 'Display All Markers'}
      </button>
    </div>
  );
};

export default Map;
