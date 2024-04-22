import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { ActualLocationMarkerIcon } from "../Marker";

export default function ActualLocationUser({ actualLocation }) {
  const map = useMap();
  // Centra el mapa al renderizar el componente
  useEffect(() => {
    if (actualLocation) {
      map.flyTo(actualLocation);
    }
  }, [actualLocation, map]);
  return (
    <Marker position={actualLocation} icon={ActualLocationMarkerIcon}>
      <Popup>
        <div className="text-[#c04356]  text-xs font-semibold leading-[normal]">
          Tu ubicación actual.
        </div>
      </Popup>
    </Marker>
  );
}
