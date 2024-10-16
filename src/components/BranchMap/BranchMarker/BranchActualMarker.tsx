import React from "react";
import { Marker, Popup } from "react-leaflet";

import { ActualLocationMarkerIcon } from "../../Sedes/Marker";

interface BranchActualMarkerProps {
  branch: { lat: number; lng: number };
}

const BranchActualMarker: React.FC<BranchActualMarkerProps> = ({ branch }) => {
  const { lat, lng } = branch;
  return (
    <Marker position={[lat, lng]} icon={ActualLocationMarkerIcon}>
      <Popup>Tu ubicación actual</Popup>
    </Marker>
  );
};

export default BranchActualMarker;
