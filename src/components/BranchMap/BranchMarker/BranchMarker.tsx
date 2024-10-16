import React, { useEffect } from "react";
import { Marker } from "react-leaflet";
import { Branch } from "../types/branchMap";
import BranchPopUp from "./BranchPopUp";
import { CustomMarkerIcon } from "../../Sedes/Marker";

interface BranchMarkerProps {
  branch: Branch;
  onSelect: (branch: Branch) => void;
  distanceToBranch: number | null;
  markerRef: any;
}

const BranchMarker: React.FC<BranchMarkerProps> = ({
  branch,
  onSelect,
  distanceToBranch,
  markerRef,
}) => {
  useEffect(() => {
    // Asigna la referencia del marker
    if (markerRef && markerRef.current) {
      markerRef.current.leafletElement = markerRef;
    }
  }, [markerRef]);
  return (
    <Marker
      key={branch.id}
      ref={markerRef}
      position={[
        parseFloat(branch.acf.latitud),
        parseFloat(branch.acf.longitud),
      ]}
      icon={CustomMarkerIcon}
      eventHandlers={{
        click: () => {
          onSelect(branch);
        },
      }}
    >
      <BranchPopUp branch={branch} distanceToBranch={distanceToBranch} />
    </Marker>
  );
};

export default BranchMarker;
