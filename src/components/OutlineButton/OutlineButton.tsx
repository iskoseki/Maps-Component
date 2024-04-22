import React, { MouseEventHandler } from "react";

type OutlineButton = {
  type: "submit" | "reset" | "button" | undefined;
  id: string;
  value?: string;
  href?: string;
  title?: string;
  func?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
};
const OutlineButton = ({
  type,
  id,

  href,
  title,

  children,
}: OutlineButton) => (
  <a
    href={href}
    type={type}
    id={id}
    title={title}
    className=" hidden md:flex flex-shrink-0 justify-center items-center gap-2.5 py-1 px-4 w-[11.25rem] h-12 rounded-5xl border-1 border-[#a6192e] text-center leading-normal alignItems:center text-[#A6192E] hover:bg-[#E65369] hover:text-[#fff] transition-all duration-300"
  >
    {children}
  </a>
);

export default OutlineButton;
