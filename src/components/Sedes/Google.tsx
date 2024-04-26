import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./MapItems/SearchBar";
import SedesCounter from "./SedesCounter";

import { initMap } from "./initMap";

declare global {
  interface Window {
    google: google.maps.Map | undefined;
  }
}

const defaultLocation = { lat: 19.43534430248748, lng: -99.13470289762083 };
const Google: React.FC = () => {
  const [storesCounter, setStoresCounter] = useState<number>(0);
  const mapRef = useRef(null);
  const [location, setLocation] = useState(defaultLocation);

  let map;
  let service;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        initMap(
          setStoresCounter,
          service,
          map,
          mapRef,
          position.coords.latitude,
          position.coords.longitude
        );
      },
      () => {
        initMap(
          setStoresCounter,
          service,
          map,
          mapRef,
          defaultLocation.lat,
          defaultLocation.lng
        );
      }
    );
  }, []);

  useEffect(() => {
    initMap(setStoresCounter, service, map, mapRef, location.lat, location.lng);
  }, [location]);

  return (
    <>
      {storesCounter === 0 ? (
        <p className="text-center font-thin">
          No se encuentran sucursales cercanas en tu ubicacion actual, intentalo
          de nuevo.
        </p>
      ) : (
        <SedesCounter num={storesCounter} />
      )}

      <div className="flex flex-col">
        <div className="absolute z-50 mx-1 ">
          <SearchBar onLocationChange={setLocation} />
        </div>
        <div ref={mapRef} style={{ width: "100%", height: "350px" }} />
      </div>
    </>
  );
};

export default Google;
