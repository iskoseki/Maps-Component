import React from "react";
import { Marker } from "react-leaflet";
import { Branch } from "../types/branchMap";
import BranchPopUp from "./BranchPopUp";
import { CustomMarkerIcon } from "../../Sedes/Marker";

interface BranchMarkerProps {
  branch: Branch;
}

const BranchMarker: React.FC<BranchMarkerProps> = ({ branch }) => {
  return (
    <Marker
      key={branch.id}
      position={[
        parseFloat(branch.acf.latitud),
        parseFloat(branch.acf.longitud),
      ]}
      icon={CustomMarkerIcon}
    >
      <BranchPopUp branch={branch} />
    </Marker>
  );
};

export default BranchMarker;
