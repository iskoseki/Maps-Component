const createMarker = (map, place, isClosest) => {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new window.google.maps.marker.AdvancedMarkerElement({
    map,
    position: place.geometry.location,
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

  if (isClosest) {
    infowindow.open(map, marker);
  }
};

export default createMarker;
