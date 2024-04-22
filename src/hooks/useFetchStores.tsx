import { useState, useEffect } from "react";
import { getClosestStore } from "../utils/ClosestStore";
export const useFetchStores = (location) => {
  const [data, setData] = useState<google.maps.places.PlaceResult[] | null>(
    null
  );
  const [closeStore, setCloseStore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStores = () => {
      setLoading(true);
      const map = new google.maps.Map(document.createElement("div"));
      const request: google.maps.places.PlaceSearchRequest = {
        fields: ["displayName", "location", "businessStatus"],

        location: new google.maps.LatLng(location.lat, location.lng),
        radius: 5000,
        keyword: "Montepío Luz Saviñón",
      };

      const service = new google.maps.places.PlacesService(map);

      service.getDetails(
        {
          placeId: "...",
          fields: ["opening_hours", "utc_offset_minutes"],
        },
        (result, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(result);
          }
        }
      );

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          results && setData(results);
          console.log(results);
        }
      });

      setLoading(false);
    };

    fetchStores();
  }, [location]);

  useEffect(() => {
    if (data) {
      const closestStore = getClosestStore(location, data);
      setCloseStore(closestStore);
    }
  }, [location, data]);

  return {
    stores: data,
    closeStore,
    loading,
    error,
  };
};
