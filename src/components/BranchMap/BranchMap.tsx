import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import BranchMarker from "./BranchMarker";
import useUserLocation from "../../hooks/useUserLocation";
import useBranches from "../../hooks/useBranches";
import Loading from "../Loading";
import SearchBar from "./SearchBar";

const RecenterMap = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([location?.lat, location?.lng], map.getZoom());
  }, [location, map]);
  return null;
};

const BranchMap = () => {
  const {
    branches,
    loading: branchesLoading,
    error: branchesError,
  } = useBranches();
  const {
    location: currentLocation,
    loading: locationLoading,
    useCurrentLocation,
    setUseCurrentLocation,
  } = useUserLocation();

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setUseCurrentLocation(false);
  };

  const displayedLocation = selectedLocation
    ? selectedLocation
    : currentLocation;

  // Validar que displayedLocation no sea undefined
  if (!displayedLocation || !displayedLocation.lat || !displayedLocation.lng) {
    return <div>Esperando ubicación válida...</div>;
  }

  if (branchesLoading || locationLoading) {
    return <Loading />;
  }

  if (branchesError) {
    console.log(
      "Ha ocurrido un error al cargar las sucursales. Por favor, intenta de nuevo más tarde.",
      branchesError
    );
    return <div>{branchesError}</div>;
  }

  return (
    <>
      <div className="flex justify-between items-center my-2 text-sm font-semibold text-[#757575] hover:cursor-pointer">
        <p>{branches.length} sucursales</p>
        <label className="flex items-center gap-1 hover:cursor-pointer">
          <input
            type="checkbox"
            checked={useCurrentLocation}
            onChange={() => {
              setUseCurrentLocation(!useCurrentLocation);
              if (!useCurrentLocation) setSelectedLocation(null);
            }}
          />
          <span> Usar ubicación actual</span>
        </label>
      </div>
      <MapContainer
        center={[displayedLocation.lat, displayedLocation.lng]} // Aquí ya no será undefined
        zoom={14}
        style={{ height: "350px", width: "100%", borderRadius: "12px" }}
      >
        <SearchBar onLocationChange={handleLocationChange} />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
        <RecenterMap location={displayedLocation} />
        {branches.map((branch) => (
          <BranchMarker key={branch.id} branch={branch} />
        ))}
      </MapContainer>
    </>
  );
};

export default BranchMap;
