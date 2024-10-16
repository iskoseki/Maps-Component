import React from "react";
import { CSSTransition } from "react-transition-group";
import SedesCounter from "../../Sedes/SedesCounter";
import SearchBar from "../SearchBar";
import "./BranchMapHeader.css"; // Archivo CSS para la animación

export default function BranchMapHeader({
  branches,
  useCurrentLocation,
  setUseCurrentLocation,
  setSelectedLocation,
  setClosePopups,
  handleLocationChange,
}) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true); // Activar la animación cuando el componente se monta
  }, []);

  return (
    <CSSTransition
      in={show}
      timeout={8000}
      classNames="slide-down"
      unmountOnExit
    >
      <div className="flex justify-center  md:justify-between flex-col-reverse md:flex-row  items-center mb-[10px] text-sm font-semibold text-[#757575] hover:cursor-pointer h-[35px] relative py-8 md:py-0">
        <SedesCounter num={branches.length} />
        <SearchBar onLocationChange={handleLocationChange} />
        <label className="flex items-center gap-1 hover:cursor-pointer">
          <input
            type="checkbox"
            checked={useCurrentLocation}
            onChange={() => {
              setUseCurrentLocation(!useCurrentLocation);
              if (!useCurrentLocation) {
                setSelectedLocation(null);
                setClosePopups(true); // Cerrar popups al cambiar la ubicación
              } else {
                setClosePopups(false); // Si se vuelve a seleccionar, no cerrar popups
              }
            }}
          />
          <span className="text-[#757575] text-xs">Ubicación actual</span>
        </label>
      </div>
    </CSSTransition>
  );
}
