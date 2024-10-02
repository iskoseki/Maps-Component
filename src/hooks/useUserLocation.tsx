import { useState, useEffect } from "react";

const useUserLocation = () => {
  const defaultLocation = { lat: 19.4326, lng: -99.1332 }; // Ciudad de México por defecto
  const [location, setLocation] = useState(defaultLocation);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as string | null);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  useEffect(() => {
    if (useCurrentLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (err) => {
          if (err.code === err.PERMISSION_DENIED) {
            setError("User denied Geolocation");
          } else {
            setError(err.message);
          }
          setLoading(false);
        }
      );
    } else {
      setLocation(defaultLocation);
      setLoading(false);
    }
  }, [useCurrentLocation]);

  return {
    location,
    loading,
    error,
    useCurrentLocation,
    setUseCurrentLocation,
  };
};

export default useUserLocation;
