import React from "react";

type PrimaryButton = {
  type: "submit" | "reset" | "button" | undefined;
  id: string;
  value?: string;
  title?: string;
  href?: string;
  children: React.ReactNode;
  to?: string | undefined;
};
const PrimaryButton = ({ children, to }: PrimaryButton) => {
  return (
    <a
      href={to ? to : "undefined"}
      className={`${
        to ? "w-full md:w-[11.25rem]" : ""
      } flex flex-shrink-0 justify-center items-center gap-2.5 py-2 px-6 w-full md:w-[11.25rem] h-12  bg-[#a6192e] Sans" '] text-white text-center rounded-5xl leading-normal transition-all duration-300 ease-in-out`}
    >
      {children}
    </a>
  );
};

export default PrimaryButton;
