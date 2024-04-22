import React from "react";
import OutlineButton from "../OutlineButton/OutlineButton";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useClosestBranchStore } from "../../context/closestBranchStore";
export const ActionsButtons = () => {
  const { acf } = useClosestBranchStore();
  const boton = acf?.botones;
  return (
    <div className="flex justify-center md:justify-end md:gap-[20px]">
      <OutlineButton
        href={boton && boton[0].boton.url}
        type="button"
        id="volver"
        value="Volver"
        title="Volver"
      >
        {boton && boton[0].boton.title}
      </OutlineButton>

      <PrimaryButton
        type="submit"
        id="agendarCita"
        to={boton && boton[1].boton.url}
      >
        {boton && boton[1].boton.title}
      </PrimaryButton>
    </div>
  );
};
