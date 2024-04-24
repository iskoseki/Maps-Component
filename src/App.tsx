import React, { useEffect, useState } from "react";
import "./App.css";
import "./themes/css/colors.css";
import Sedes from "./components/Sedes/index";
export default function App() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const googleKey = import.meta.env.VITE_GOOGLEKEY;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleKey}&loading=async&libraries=places,marker`;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="bg-[#f5f5f5]">{scriptLoaded && <Sedes />}</div>;
}
