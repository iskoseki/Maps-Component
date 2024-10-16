import React, { useEffect, useState, useCallback } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import BranchMarker from "./BranchMarker";
import useUserLocation from "../../hooks/useUserLocation";
import useBranches from "../../hooks/useBranches";
import Loading from "../Loading";
import BranchDetail from "./BranchDetail";
import BranchActualMarker from "./BranchMarker/BranchActualMarker";
import BranchMapHeader from "./BranchMapHeader";
import { getClosestStore } from "../../utils/ClosestStore";
import { calculateDistance } from "../../utils/calculateDistance";
import { Branch } from "./types/branchMap";
import ErrorComponent from "../404";

const ClosePopups = React.memo(({ closePopups }: any) => {
  const map = useMap();
  useEffect(() => {
    if (closePopups) {
      map.closePopup();
    }
  }, [closePopups, map]);
  return null;
});

const RecenterMap = React.memo(({ location, zoomLevel = 13 }: any) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], zoomLevel);
    }
  }, [location, zoomLevel, map]);
  return null;
});

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
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [closestBranch, setClosestBranch] = useState<Branch | null>(null);
  const [distanceToBranch, setDistanceToBranch] = useState<number | null>(null);
  const [closePopups, setClosePopups] = useState(false);

  const handleLocationChange = useCallback(
    (location) => {
      setSelectedLocation(location);
      setUseCurrentLocation(false);
    },
    [setUseCurrentLocation]
  );

  const handleBranchSelect = useCallback(
    (branch) => {
      setSelectedBranch(branch);
      if (branch && currentLocation) {
        const distance = calculateDistance(
          currentLocation.lat,
          currentLocation.lng,
          parseFloat(branch.acf.latitud),
          parseFloat(branch.acf.longitud)
        );
        setDistanceToBranch(distance);
      }
      if (branch && branch.markerRef) {
        branch.markerRef.openPopup();
      }
    },
    [currentLocation]
  );

  const filterBranchesByDistance = useCallback(
    (location, branches, maxDistance = 50) => {
      const filteredBranches = branches.filter((branch) => {
        const distance = calculateDistance(
          location.lat,
          location.lng,
          parseFloat(branch.acf.latitud),
          parseFloat(branch.acf.longitud)
        );
        return distance <= maxDistance;
      });
      return filteredBranches.length > 0 ? filteredBranches : branches;
    },
    []
  );

  const displayedLocation = selectedLocation ?? currentLocation;
  const filteredBranches = filterBranchesByDistance(
    displayedLocation,
    branches
  );

  useEffect(() => {
    if (displayedLocation && branches.length > 0) {
      const closest = getClosestStore(displayedLocation, branches);
      setClosestBranch(closest);
      setSelectedBranch(closest);
      if (closest) {
        const distance = calculateDistance(
          displayedLocation.lat,
          displayedLocation.lng,
          parseFloat(closest.acf.latitud),
          parseFloat(closest.acf.longitud)
        );
        setDistanceToBranch(distance);
      }
    }
  }, [displayedLocation, branches]);

  useEffect(() => {
    if (closestBranch && closestBranch.markerRef) {
      closestBranch.markerRef.openPopup();
    }
  }, [closestBranch]);

  if (!displayedLocation || !displayedLocation.lat || !displayedLocation.lng) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center mt-5 text-sm font-semibold text-[#757575] hover:cursor-pointer">
        <h3>Esperando una ubicacion válida.</h3>
        <p className="italic font-thin">{`Por favor, verifica tu ubicación.`}</p>
      </div>
    );
  }

  if (branchesLoading || locationLoading) {
    return <Loading />;
  }

  if (branchesError) {
    console.log(
      "Ha ocurrido un error al cargar las sucursales. Por favor, intenta de nuevo más tarde.",
      branchesError
    );
    return <ErrorComponent error={branchesError} />;
  }

  return (
    <>
      <BranchMapHeader
        branches={branches}
        useCurrentLocation={useCurrentLocation}
        setUseCurrentLocation={setUseCurrentLocation}
        setSelectedLocation={setSelectedLocation}
        setClosePopups={setClosePopups}
        handleLocationChange={handleLocationChange}
      />
      <MapContainer
        center={[displayedLocation.lat, displayedLocation.lng]}
        zoom={14}
        zoomControl={false}
        className="w-full h-[490px] md:h-[350px] rounded-[24px] z-10"
      >
        <ClosePopups closePopups={closePopups} />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png" />
        <RecenterMap
          location={
            closestBranch
              ? {
                  lat: closestBranch.acf.latitud,
                  lng: closestBranch.acf.longitud,
                }
              : displayedLocation
          }
        />
        <BranchActualMarker branch={displayedLocation} />

        {filteredBranches.map((branch) => (
          <BranchMarker
            key={branch.id}
            branch={branch}
            distanceToBranch={distanceToBranch}
            onSelect={() => handleBranchSelect(branch)}
            markerRef={(ref) => (branch.markerRef = ref)}
          />
        ))}
      </MapContainer>
      <BranchDetail
        branch={selectedBranch}
        isClosest={selectedBranch === closestBranch}
      />
    </>
  );
};

export default BranchMap;
