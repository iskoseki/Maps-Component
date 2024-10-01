import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { StateSedes } from "../../../context/closestBranchStore";

export default function HeaderSedes() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const initUrl = import.meta.env.VITE_INIT_URL;
  const { data } = useFetch<StateSedes>(`${apiUrl}${initUrl}`);
  return (
    <div className="br-24 md:bg-white mb-3 transition-all duration-300 ease-in-out">
      <div className="p-4">
        <h1 className=" text-[24px]  text-[#A6192E] md:text-[#757575]  text-center bold">
          {data?.title.rendered}
        </h1>
        <hr className="bg-dark mt-4 mb-3 md:block hidden" />
      </div>
    </div>
  );
}
