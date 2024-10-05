import { useState, useEffect, useCallback } from "react";
import { Branch } from "../components/BranchMap/types/branchMap";

// URLs de sucursales por que el api tiene Pagination
const { VITE_SUCURSALES_P1, VITE_SUCURSALES_P2, VITE_SUCURSALES_P3 } =
  import.meta.env;
const API_URLS = [VITE_SUCURSALES_P1, VITE_SUCURSALES_P2, VITE_SUCURSALES_P3];

const useBranches = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isValidCoordinate = (lat: string, lng: string) => {
    return (
      lat !== "0" &&
      lat !== "0.000000000000" &&
      lng !== "0" &&
      lng !== "0.000000000000"
    );
  };

  const fetchBranches = useCallback(async () => {
    try {
      const responses = await Promise.all(
        API_URLS.map((url) => fetch(`/montepio${url}`))
      );
      const data = await Promise.all(
        responses.map((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
      );
      const allBranches = data.flat();
      const validBranches = allBranches.filter((branch: Branch) =>
        isValidCoordinate(branch.acf.latitud, branch.acf.longitud)
      );
      setBranches(validBranches);
    } catch (error) {
      setError("Error fetching branches");
      console.error("Error fetching branches:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBranches();
  }, [fetchBranches]);
  console.log(branches);
  return { branches, loading, error };
};

export default useBranches;
