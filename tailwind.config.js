/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["dark"],
      colors: {
        Primario: {
          Primario: "#A6192E",
          "Primario-75": "#e65369",
          "Primario-50": "#ed8696",
          "Primario-25": "#f3bac2",
          "Primario-10": "#ffebf0",
          "Primario-0": "#fff3f6",
        },
        Secundario: {
          Secundario: "#dfdb95",
          "Secundario-75": "#ece9be",
          "Secundario-50": "#f8f6e5",
          "Secundario-oscuro": "#c9c44b",
        },
        Monocromáticos: {
          White: "#ffffff",
          Black: "#212121",
          "Monocromático-800": "#424242",
          "Monocromático-700": "#616161",
          "Monocromático-600": "#757575",
          "Monocromático-500": "#9e9e9e",
          "Monocromático-400": "#bdbdbd",
          "Monocromático-300": "#e0e0e0",
          "Monocromático-200": "#eeeeee",
          "Monocromático-100": "#fdfdfd",
        },
        Alternativos: {
          Yellow: "#e2d302",
          Green: "#70aa2a",
          Cyan: "#45bdc6",
          Pink: "#e20285",
          Blue: "#016bc3",
        },
        Alertas: { "Red Alert": "#e22822", "Green Alert": "#8bb438" },
      },
      boxShadow: {
        Small:
          "0px 2px 4px 0px rgba(0,0,0,0.08), 0px 0px 6px 0px rgba(0,0,0,0.02)",
        Medium:
          "0px 4px 8px 0px rgba(0,0,0,0.06), 0px 0px 4px 0px rgba(0,0,0,0.04)",
        Large:
          "0px 8px 16px 0px rgba(0,0,0,0.08), 0px 0px 4px 0px rgba(0,0,0,0.04)",
      },
      borderRadius: {
        none: "0",
        xs: "0.0625rem",
        sm: "0.09375rem",
        default: "0.125rem",
        lg: "0.1875rem",
        xl: "0.25rem",
        "2xl": "0.3125rem",
        "3xl": "0.36538463830947876rem",
        "4xl": "0.375rem",
        "5xl": "0.5rem",
        "6xl": "0.625rem",
        "7xl": "0.75rem",
        "8xl": "0.9375rem",
        "9xl": "0.9990234375rem",
        "10xl": "1.25rem",
        "11xl": "1.5rem",
        "12xl": "3.125rem",
        "13xl": "3.330077886581421rem",
        full: "9999px",
      },
    },
  },
  plugins: [tailwindScrollbar],
};
