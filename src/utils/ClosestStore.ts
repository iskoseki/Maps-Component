import haversine from "haversine-distance";

export const getClosestStore = (location, stores) => {
    let closestStore = null;
    let shortestDistance = Infinity;

    stores.forEach((store) => {
      const storeLocation = store.geometry.location;
      const distance = haversine(location, storeLocation);

      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestStore = store;
      }
    });

    return closestStore;
  };