export interface Branch {
  markerRef?: any;
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    nro_sucursal: string;
    estatus: string;
    bloqueada: string | null;
    ramos: string;
    nro_zona: string;
    calle: string;
    numero: string;
    cp: string;
    estado: string;
    municipio: string;
    colonia: string;
    correo: string;
    telefono: string;
    telefono_2: string;
    horario_lv: string;
    horario_s: string;
    horario_d: string;
    latitud: string;
    longitud: string;
  };
}