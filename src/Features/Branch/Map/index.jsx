import React from "react";
import "./style.css";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
export default function Map({ data }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAoUo8F1eA3IsBClHC0WQM8GKQMpFZ42Io",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <MapData data={data} />;
}
function MapData({ data }) {
  const center = { lat: data.lat, lng: data.lng };
  return (
    <div className="md:h-[50vh] h-[30vh]">
      <GoogleMap
        zoom={17}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} zIndex={1000} visible={true} opacity={1} />
      </GoogleMap>
    </div>
  );
}
