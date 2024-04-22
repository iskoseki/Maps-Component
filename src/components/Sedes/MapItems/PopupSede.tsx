import React, { useEffect, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
import { getDistanceInKm } from "../../../utils/getDistance";
import { useClosestBranchStore } from "../../../context/closestBranchStore";
import { CustomMarkerIcon } from "../Marker";

export default function PopupSede({ branch, open }) {
  const markerRef = useRef(null);

  const { actualLocation } = useClosestBranchStore();
  const distance = getDistanceInKm(
    actualLocation.lat,
    actualLocation.lng,
    branch.geometry.location.lat,
    branch.geometry.location.lng
  );

  useEffect(() => {
    if (markerRef.current && open) {
      markerRef.current.openPopup();
    }
  }, []);

  return (
    <Marker
      ref={markerRef}
      position={branch.geometry.location}
      icon={CustomMarkerIcon}
    >
      <Popup>
        <div className="flex flex-col items-start gap-1 w-[10.25rem] transition-all duration-900 ease-in-out">
          <div className="text-[#c04356]  text-xs font-semibold leading-[normal]">
            {branch.Nombre}
          </div>
          <div className="text-[#c04356]  text-sm font-bold leading-[normal]">
            {branch.vicinity}
          </div>
          <div className="text-[#d97b89]  text-xs font-bold leading-[normal]">
            Distancia: {distance.toFixed(2)} km
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
