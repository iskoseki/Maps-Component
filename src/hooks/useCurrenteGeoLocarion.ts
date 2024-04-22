import { useEffect, useState } from "react";

type PositionError = {
    code: number;
  message: string;
  PERMISSION_DENIED: number;
  POSITION_UNAVAILABLE: number;
  TIMEOUT: number;
};

const useUserLocation = (): {
  location: { lat: number; lng: number } | null;
  error: string | null;
} => {
  const [location, setLocation] = useState<null | { lat: number; lng: number }>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const geoSuccess = (position: GeolocationPosition) => {
      const newLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setLocation(newLocation);
    };

    const geoError = (error: PositionError) => {
      let errorMessage = "Geolocation is not supported by this browser.";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = "User denied geolocation access.";
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = "Geolocation information is not available.";
          break;
        case error.TIMEOUT:
          errorMessage = "Geolocation timed out.";
          break;
        default:
          break;
      }
      setError(errorMessage);
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

    // Cleanup function to prevent memory leaks
    return () => {
      navigator.geolocation.clearWatch(0);
    };
  }, []);

  return { location, error };
};

export default useUserLocation;
