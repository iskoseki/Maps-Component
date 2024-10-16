import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { StateSedes } from "../../../context/closestBranchStore";
import { CSSTransition } from "react-transition-group";
import "./index.css";

export default function HeaderSedes() {
  //const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const initUrl = import.meta.env.VITE_INIT_URL;
  const { data } = useFetch<StateSedes>(`${initUrl}`);
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true); // Activar la animación cuando el componente se monta
  }, []);

  if (!data) {
    return null;
  }

  return (
    <CSSTransition
      in={show}
      timeout={9000}
      classNames="slide-down"
      unmountOnExit
    >
      <div className="br-24 md:bg-white mb-3 transition-all duration-300 ease-in-out">
        <div className="p-4">
          <h1 className=" text-[24px]  text-[#A6192E] md:text-[#757575]  text-center bold">
            {data?.title.rendered}
          </h1>
          <hr className="bg-dark mt-3 mb-3 md:block hidden" />
        </div>
      </div>
    </CSSTransition>
  );
}
