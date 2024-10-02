import L from "leaflet";
export const CustomMarkerIcon = L.divIcon({
  className: "custom-icon",
  html: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0003 15.3337C15.1163 15.3337 14.2684 14.9825 13.6433 14.3573C13.0182 13.7322 12.667 12.8844 12.667 12.0003C12.667 11.1163 13.0182 10.2684 13.6433 9.6433C14.2684 9.01818 15.1163 8.66699 16.0003 8.66699C16.8844 8.66699 17.7322 9.01818 18.3573 9.6433C18.9825 10.2684 19.3337 11.1163 19.3337 12.0003C19.3337 12.4381 19.2474 12.8715 19.0799 13.2759C18.9124 13.6804 18.6669 14.0478 18.3573 14.3573C18.0478 14.6669 17.6804 14.9124 17.2759 15.0799C16.8715 15.2474 16.4381 15.3337 16.0003 15.3337ZM16.0003 2.66699C13.525 2.66699 11.151 3.65032 9.40066 5.40066C7.65032 7.151 6.66699 9.52497 6.66699 12.0003C6.66699 17.8083 13.0921 25.9109 15.2805 28.5021C15.6627 28.9547 16.3379 28.9547 16.7202 28.5021C18.9085 25.9109 25.3337 17.8083 25.3337 12.0003C25.3337 9.52497 24.3503 7.151 22.6 5.40066C20.8496 3.65032 18.4757 2.66699 16.0003 2.66699Z" fill="#E65369"/>
</svg>
`,
  iconSize: [38, 95],
  iconAnchor: [16, 16],
  shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  shadowSize: [50, 64],
  shadowAnchor: [4, 62],
  popupAnchor: [0, 0],
});
export const ActualLocationMarkerIcon = L.divIcon({
  className: "custom-icon",
  html: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#C04356"/>
</svg>


`,
  iconSize: [38, 95],
  iconAnchor: [6, 8],
});
