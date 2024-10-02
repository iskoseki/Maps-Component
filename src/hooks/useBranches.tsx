import { useState, useEffect } from "react";
import { Branch } from "../components/BranchMap/types/branchMap";

const API_URL = import.meta.env.VITE_SUCURSALES;

const useBranches = () => {
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch(`/montepio${API_URL}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBranches(data);
      } catch (error) {
        setError("Error fetching branches");
        console.error("Error fetching branches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  return { branches, loading, error };
};

export default useBranches;
