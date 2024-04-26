# Google Maps component for Montepío Luz Saviñón

Este es un componente React personalizado, fue creado para ser integrado en un sitio Wordpress.

El componente utiliza diferentes funcionalidades obtenidas del servicio de [Google maps API](https://developers.google.com/maps/documentation). Fue pensado para integrarse en un sitio Wordpress, con la finalidad de mostrar las tiendas "Montepío Luz Saviñón" cercanas al usuario.

---



#### **Installation**

```
npm install 
or 
pnpm install
```

Para que el mapa funcione, tambien se encesita un API KEY brindada en la panel de google maps. El proyecto aloja la KEY en un archivo `.env` (El archivo se encuentra en el root folder.)

Para agregar/editar una Clave validad modificar el archivo `.env` y modificar la variable "VITE_GOOGLEKEY".

```
VITE_GOOGLEKEY=AquiVaSuKEY
```

## Estructura del proyecto

Estructura del proyecto con los modulos principales.

* `src/`

  * `assets/`: Carpeta para recursos (fonts/images)
  * `components/`: Carpeta de componentes personalizados.
  * `components/Sedes`: Capeta donde componentes relacionados al mapa.

    * `Google.tsx`: Componente principal donde se hacer render el mapa.
    * `initMap.tsx`: Function async que inicializa el mapa.
    * `MapComponent.tsx`: Componente wrapper.
    * `Marker.tsx`: Contiene customs markers usados en el mapa.
    * `SedesCounter.tsx`: Contador de sedes.
    * `MapItems/`: Carpeta de componentes funcionales del mapa.
      * `CreateMarker.tsx`: hace render de un AdvancedMarkerElement de Gmaps api.
      * `SearchBar.tsx`: Barra de busqueda por direccion o codigo postal.
    * `HeaderSede/`
      * `HeaderSede.tsx`: Render del titulo definido desde wordpress.
  * `utils/`: Carpeta para funciones de utilidad.
  * `hooks/`: Custom hook folder.
  * `types/`: Custom interfaces/types declarados para Typescript.
  * `App.js`: Punto de entrada de la aplicación.

    Estructura del proyecto con los modulos principales.

## Funcionalidades

* Consulta Geolocación al usuario para buscar las sucursales cercanas segun su ubicacion actual.
  ```
  //Por default la ubicacion será de Ciudad de México.
  const defaultLocation = { lat: 19.43534430248748, lng: -99.13470289762083 };
  ```
* Búsqueda de Tiendas: Implementa una barra de búsqueda para que los usuarios encuentren tiendas cercanas en México, buscando por:
  * Dirección.
  * Código postal.
  * Ciudad/Localidad/Pueblo/ect...
* Marcadores Personalizados: Agrega marcadores para cada tienda en el mapa.
* Información Detallada: Muestra detalles relevantes de las tiendas al hacer clic en los marcadores. (Nombre, Direccion, link de re-direct a google maps)


## Util links & resources

[Maps JavaScript API ](https://developers.google.com/maps/documentation/javascript)

[react-geocode](https://www.npmjs.com/package/react-geocode)

[use-places-autocomplete](https://www.npmjs.com/package/use-places-autocomplete)
