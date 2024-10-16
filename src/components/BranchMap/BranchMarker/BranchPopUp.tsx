// BranchPopup.tsx
import React from "react";
import { Popup } from "react-leaflet";
import { Branch } from "../types/branchMap";

interface BranchPopupProps {
  branch: Branch;
  distanceToBranch?: number | null;
}

const BranchPopup: React.FC<BranchPopupProps> = ({
  branch,
  distanceToBranch,
}) => {
  return (
    <Popup>
      <div>
        <p className="text-base font-light text-[#757575] mt-0 mb-2 ">
          {branch.title.rendered},{" "}
          <span className="italic">#{branch.acf.nro_sucursal}</span>
        </p>
        <span>Dirección</span>
        <p className="text-[#A6192E] my-1">
          {branch.acf.calle} {branch.acf.numero}, {branch.acf.colonia},{" "}
          {branch.acf.municipio}, {branch.acf.estado}.
        </p>

        {distanceToBranch && (
          <p className="text-[#757575] font-light">
            a {distanceToBranch.toFixed(2)}km
          </p>
        )}
      </div>
    </Popup>
  );
};

export default BranchPopup;
