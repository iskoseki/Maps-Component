import React, { useState } from "react";
import { setKey, setRegion, setLanguage } from "react-geocode";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
const googleKey = import.meta.env.VITE_GOOGLEKEY;

setKey(googleKey);
setRegion("mx");
setLanguage("es");

export default function SearchBar({ onLocationChange }) {
  const [search, setSearch] = useState("");
  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "mx" },
    },
    debounce: 300,
  });

  const handleInput = (e) => {
    setSearch(e.target.value);
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setSearch(description);
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          onLocationChange({ lat, lng });
        })
        .catch((error) => {
          console.log("😱 Error: ", error.message);
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => (
      <li key={suggestion.place_id} onClick={handleSelect(suggestion)}>
        {suggestion.description}
      </li>
    ));

  return (
    <form className="search-bar">
      <div className="flex flex-col">
        <div>
          {" "}
          <input
            value={search}
            className="input-search-map border bg-white  p-2 rounded my-2"
            onChange={handleInput}
            disabled={!ready}
            placeholder="Busca por direccion o C.P"
          />
        </div>
        {status === "OK" && (
          <ul className="bg-white p-1 rounded-lg transition-all duration-700 ease-in-out">
            {renderSuggestions()}
          </ul>
        )}
      </div>
    </form>
  );
}
