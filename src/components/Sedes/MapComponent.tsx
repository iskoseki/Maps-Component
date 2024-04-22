import React, { Suspense } from "react";
import { ActionsButtons } from "./ActionsButtosSedes";
import Loading from "../Loading";
import SelectorSedes from "./SelectorSede/SelectorSedes";
import Google from "./Google";

const MapComponent: React.FC = () => {
  return (
    <section id="mapaContainer" className="p-[16px]">
      <SelectorSedes />
      <div className="mb-4">
        <Suspense fallback={<Loading />}>
          <Google />
        </Suspense>
      </div>
      <ActionsButtons />
    </section>
  );
};

export default MapComponent;
