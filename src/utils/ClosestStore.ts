export const getClosestStore = (location, branches): any => {
  const toRadians = (deg) => (deg * Math.PI) / 180;

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distancia en km
  };

  let closest = null;
  let minDistance = Infinity;

  branches.forEach((branch) => {
    const distance = calculateDistance(
      location.lat,
      location.lng,
      parseFloat(branch.acf.latitud),
      parseFloat(branch.acf.longitud)
    );
    if (distance < minDistance) {
      minDistance = distance;
      closest = branch;
    }
  });

  return closest;
};
