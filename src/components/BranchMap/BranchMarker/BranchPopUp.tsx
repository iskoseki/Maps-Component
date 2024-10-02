// BranchPopup.tsx
import React from "react";
import { Popup } from "react-leaflet";
import { Branch } from "../types/branchMap";

interface BranchPopupProps {
  branch: Branch;
}

const BranchPopup: React.FC<BranchPopupProps> = ({ branch }) => {
  return (
    <Popup>
      <div>
        <h3>
          {branch.acf.calle} {branch.acf.numero}
        </h3>
        <p>
          {branch.acf.colonia}, {branch.acf.municipio}, {branch.acf.estado}
        </p>
        <p>Tel: {branch.acf.telefono}</p>
      </div>
    </Popup>
  );
};

export default BranchPopup;
