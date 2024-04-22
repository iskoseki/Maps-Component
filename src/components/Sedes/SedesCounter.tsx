import React from "react";
const SedesCounter = ({ num }: { num: number }) => {
  return (
    <p className="hidden md:block  text-[#c04356] text-sm font-bold leading-[normal] my-2">
      {num} sucursal
      {num > 1 ? "es" : ""}
    </p>
  );
};

export default SedesCounter;
