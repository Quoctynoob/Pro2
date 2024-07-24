import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url'; // Import the correct type

const libraries: Libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
const center = {
  lat: 43.65307591580248,
  lng: -79.38768760409539,
};

interface MarkerType {
  id: string;
  lat: number;
  lng: number;
  name: string;
  time: Date;
}

const Map: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Ensure this is set in your environment variables
    libraries,
  });

  const [markers, setMarkers] = useState<MarkerType[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const name = prompt("Enter a name for the marker:");
      if (name) {
        setMarkers((current) => [
          ...current,
          {
            id: new Date().toISOString(),
            lat: event.latLng!.lat(), // Use non-null assertion
            lng: event.latLng!.lng(), // Use non-null assertion
            name,
            time: new Date(),
          },
        ]);
      }
    }
  }, []);

  const onMarkerClick = (marker: MarkerType) => {
    setSelectedMarker(marker);
  };

  const onMarkerRightClick = (markerId: string) => {
    setMarkers((current) => current.filter((marker) => marker.id !== markerId));
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <h2>Google Map</h2>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        onClick={onMapClick}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => onMarkerClick(marker)}
            onRightClick={() => onMarkerRightClick(marker.id)}
          >
            {selectedMarker?.id === marker.id && (
              <InfoWindow
                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div>
                  <h2>{selectedMarker.name}</h2>
                  <p>{selectedMarker.time.toLocaleString()}</p>
                  <button onClick={() => onMarkerRightClick(selectedMarker.id)}>Delete</button>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;