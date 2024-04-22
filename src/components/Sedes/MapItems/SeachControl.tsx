import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";

export const SearchControl = (props) => {
  const map = useMap();
  useEffect(() => {
    const searchControl = GeoSearchControl({
      notFoundMessage: "La ubicación no fue encontrada o es incorrecta.",
      provider: props.provider,
      resultFormat: ({ result }) => result.label,
      result: props.eventHandlers.results,

      ...props,
    });

    map.addControl(searchControl);
    map.on("click", (e) => console.log([e.latlng.lng, e.latlng.lat]));

    // Limpio el retorno de la función
    return () => {
      map.removeControl(searchControl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Array vacío para que solo se ejecute una vez!

  return null;
};
