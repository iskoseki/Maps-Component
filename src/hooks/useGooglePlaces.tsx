import { useState, useCallback } from "react";
import axios from "axios";

interface Place {
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  name: string;
  // Puedes añadir aquí otros campos que necesites
}

const useGooglePlaces = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [error, setError] = useState(null);

  const searchPlaces = useCallback(async (query, location) => {
    try {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
        {
          params: {
            key: "AIzaSyAEAqj3lBLe8Feb4bh11rIVqQ9AvEOUXdM",
            location: `${location.latitude},${location.longitude}`,
            radius: 5000,
            name: query,
          },
        }
      );

      setPlaces(response.data.results);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  return { places, searchPlaces, error };
};

export default useGooglePlaces;
