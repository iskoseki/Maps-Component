import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./MapItems/SearchBar";
import SedesCounter from "./SedesCounter";
import { getClosestStore } from "../../utils/ClosestStore";
import createMarker from "./MapItems/CreateMarker";

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
        initMap(position.coords.latitude, position.coords.longitude);
      },
      () => {
        initMap(defaultLocation.lat, defaultLocation.lng);
      }
    );
  }, []);

  useEffect(() => {
    initMap(location.lat, location.lng);
  }, [location]);

  const initMap = async (lat: number, lng: number) => {
    try {
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      if (!Map) {
        throw new Error("Map not found");
      }
      map = new Map(mapRef.current!, {
        center: { lat, lng },
        zoom: 14,
        mapTypeControl: false,
        zoomControl: true,
        scaleControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        mapId: "305176337867",
      });

      service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(
        {
          fields: [
            "geometry",
            "location",
            "name",
            "vicinity",
            "business_status",
            "utc_offset_minutes",
          ],
          location: { lat, lng },
          radius: "5000",
          type: ["store"],
          name: ["Montepío Luz Saviñón"],
        },
        (results, status) => {
          setStoresCounter(results.length);
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const closestStore = getClosestStore(location, results);

            for (let i = 0; i < results.length; i++) {
              if (results[i] !== closestStore) {
                createMarker(map, results[i], false);
              }
            }
          }
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

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
