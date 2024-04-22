import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loading({
  size = 60,
  color = "#A6192E",
  height = 180,
} = {}) {
  return (
    <div className={`flex justify-center items-center h-[${height}px]`}>
      <ClipLoader color={color} loading={true} size={size} />
    </div>
  );
}
