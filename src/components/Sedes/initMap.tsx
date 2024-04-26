import { getClosestStore } from "../../utils/ClosestStore";
import createMarker from "./MapItems/CreateMarker";

export const initMap = async (
  setStoresCounter,
  service,
  map,
  mapRef,
  lat: number,
  lng: number
) => {
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
