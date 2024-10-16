import { useState, useEffect } from "react";

// Convierte grados a radianes
const toRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};

// Función para calcular la distancia usando la fórmula de Haversine
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  if (!lat1 || !lng1 || !lat2 || !lng2) {
    return null; // Si alguna coordenada no está disponible, no calculamos
  }

  const earthRadiusKm = 6371; // Radio de la tierra en kilómetros

  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadiusKm * c;
};

// Hook para calcular la distancia entre dos puntos
const useDistanceBetweenPoints = (displayedLocation, selectedBranch) => {
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    if (
      displayedLocation &&
      displayedLocation.lat &&
      displayedLocation.lng &&
      selectedBranch &&
      selectedBranch.acf &&
      selectedBranch.acf.lat &&
      selectedBranch.acf.lng
    ) {
      const lat1 = parseFloat(displayedLocation.lat);
      const lng1 = parseFloat(displayedLocation.lng);
      const lat2 = parseFloat(selectedBranch.acf.lat);
      const lng2 = parseFloat(selectedBranch.acf.lng);

      if (!isNaN(lat1) && !isNaN(lng1) && !isNaN(lat2) && !isNaN(lng2)) {
        const dist = calculateDistance(lat1, lng1, lat2, lng2);
        setDistance(dist);
      } else {
        setDistance(null);
      }
    } else {
      setDistance(null);
    }
  }, [displayedLocation, selectedBranch]);

  return distance;
};

export default useDistanceBetweenPoints;
