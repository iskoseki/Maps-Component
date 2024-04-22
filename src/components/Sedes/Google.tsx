import React, { useEffect, useRef, useState } from "react";
import SearchBar from "./MapItems/SearchBar";
import SedesCounter from "./SedesCounter";
import { Loader } from "@googlemaps/js-api-loader";
import { getClosestStore } from "../../utils/ClosestStore";

declare global {
  interface Window {
    google: google.maps.Map | undefined;
  }
}

const defaultLocation = { lat: 19.43534430248748, lng: -99.13470289762083 }; // Ubicación por defecto (México)

const Google: React.FC = () => {
  const closestMarkerRef = useRef(null);
  const closestInfoWindowRef = useRef(null);
  const [storesCounter, setStoresCounter] = useState<number>(0);
  const mapRef = useRef(null);
  const [location, setLocation] = useState(defaultLocation);
  const googleKey = import.meta.env.VITE_GOOGLEKEY;
  let map;
  let service;
  const loader = new Loader({
    apiKey: googleKey,
    version: "weekly",
  });

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
      await loader.load();
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      map = new Map(mapRef.current!, {
        center: { lat, lng },
        zoom: 12,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: true,
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
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
            const closestStore = getClosestStore(location, results);
            createMarker(closestStore);
          }
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const createMarker = (place) => {
    if (!place.geometry || !place.geometry.location) return;
    const svgIcon = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0003 15.3337C15.1163 15.3337 14.2684 14.9825 13.6433 14.3573C13.0182 13.7322 12.667 12.8844 12.667 12.0003C12.667 11.1163 13.0182 10.2684 13.6433 9.6433C14.2684 9.01818 15.1163 8.66699 16.0003 8.66699C16.8844 8.66699 17.7322 9.01818 18.3573 9.6433C18.9825 10.2684 19.3337 11.1163 19.3337 12.0003C19.3337 12.4381 19.2474 12.8715 19.0799 13.2759C18.9124 13.6804 18.6669 14.0478 18.3573 14.3573C18.0478 14.6669 17.6804 14.9124 17.2759 15.0799C16.8715 15.2474 16.4381 15.3337 16.0003 15.3337ZM16.0003 2.66699C13.525 2.66699 11.151 3.65032 9.40066 5.40066C7.65032 7.151 6.66699 9.52497 6.66699 12.0003C6.66699 17.8083 13.0921 25.9109 15.2805 28.5021C15.6627 28.9547 16.3379 28.9547 16.7202 28.5021C18.9085 25.9109 25.3337 17.8083 25.3337 12.0003C25.3337 9.52497 24.3503 7.151 22.6 5.40066C20.8496 3.65032 18.4757 2.66699 16.0003 2.66699Z" fill="#E65369"/></svg>`;
    const svgAsDataURL = `data:image/svg+xml,${encodeURIComponent(svgIcon)}`;
    const marker = new window.google.maps.Marker({
      map,
      position: place.geometry.location,
      icon: {
        url: svgAsDataURL,
        scaledSize: new window.google.maps.Size(32, 32), // size of the icon
      },
    });

    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${place.geometry.location.lat()},${place.geometry.location.lng()}`;
    const infowindow = new window.google.maps.InfoWindow({
      content: `<div>
                <strong>${place.name}</strong><br>
                ${place.vicinity}<br>
                <a target="_blank" href="${googleMapsUrl}">Abrir en Google Maps</a>
              </div>`,
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  };

  return (
    <>
      <SedesCounter num={storesCounter} />
      <div className="flex flex-col">
        <div className="absolute  z-50 mx-1 ">
          <SearchBar onLocationChange={setLocation} />
        </div>
        <div ref={mapRef} style={{ width: "100%", height: "350px" }} />
      </div>
    </>
  );
};

export default Google;
