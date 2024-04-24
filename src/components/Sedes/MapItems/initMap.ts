import { useEffect } from "react";
import { LoadScript } from '@react-google-maps/api';


export async function InitMap(): Promise<void> {
    let map: google.maps.Map;
    const defaultLocation = { lat: 19.43534430248748, lng: -99.13470289762083 }; // Ubicación por defecto (México)
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
 
useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: position.coords.latitude, lng: position.coords.longitude },
    zoom: 8,
  });
      },
      () => {
         map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: defaultLocation.lat, lng: defaultLocation.lng },
    zoom: 8,
  });
      }
    );
  }, []);
  
  
}

