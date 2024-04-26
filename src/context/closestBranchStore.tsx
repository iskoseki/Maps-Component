import { create } from "zustand";
interface acf {
  botones: [
    {
      boton: {
        title: string;
        url: string;
        target: "";
      };
      estilo_del_boton?: string;
    },
    {
      boton: {
        title: string;
        url: string;
        target: "";
      };
      estilo_del_boton: string;
    }
  ];
}

interface excerpt {
  rendered: string;
  protected: false;
}

export type StateSedes = {
  title: {
    rendered: string | null;
  };
  content: {
    rendered: string;
    protected: boolean;
  };

  setTitle: (title: { rendered: string }) => void;
  setContent: (content: { rendered: string; protected: boolean }) => void;

  setExcerpt: (excerpt: excerpt) => void;

  setActualLocation: (branch: { lat: number; lng: number }) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const useClosestBranchStore = create<StateSedes>((set) => ({
  title: {
    rendered: "",
  },
  content: {
    rendered: "",
    protected: false,
  },
  acf: {
    botones: [
      {
        boton: {
          title: "Cotizar",
          url: "https://bgwp.bgroup.com.ar/cotizacion/",
          target: "",
        },
        estilo_del_boton: "",
      },
      {
        boton: {
          title: "Agendar cita",
          url: "https://bgwp.bgroup.com.ar/contacto/",
          target: "",
        },
        estilo_del_boton: "",
      },
    ],
  },
  excerpt: {
    rendered: "",
    protected: false,
  },
  branchesWithCoordinates: [],
  actualLocation: { lat: 19.444067450879974, lng: -99.15505391509416 },
  closestBranch: null,
  setTitle: (title: { rendered: string }) => set({ title }),
  setContent: (content: { rendered: string; protected: boolean }) =>
    set({ content }),
  setAcf: (acf: acf) => set({ acf }),
  setExcerpt: (excerpt: excerpt) => set({ excerpt }),
  setBranchesWithCoordinates: (branch) =>
    set({ branchesWithCoordinates: branch }),
  setClosestBranch: (branch) => set({ closestBranch: branch }),
  setActualLocation: (branch) => set({ actualLocation: branch }),
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
