import React, { Suspense } from "react";
import { ActionsButtons } from "./ActionsButtosSedes";
import Loading from "../Loading";
import HeaderSedes from "./HeaderSede/HeaderSedes";
import BranchMap from "../BranchMap";

const MapComponent: React.FC = () => {
  return (
    <section id="mapaContainer" className="p-[16px]">
      <Suspense fallback={<Loading />}>
        <HeaderSedes />
        <div className="mb-4">
          <BranchMap />
        </div>
        <ActionsButtons />
      </Suspense>
    </section>
  );
};

export default MapComponent;
