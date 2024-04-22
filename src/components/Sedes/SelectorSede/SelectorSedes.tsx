import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { StateSedes } from "../../../context/closestBranchStore";

export default function SelectorSedes() {
  const { data } = useFetch<StateSedes>(
    "https://bgwp.bgroup.com.ar/wp-json/wp/v2/pages/63"
  );
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
