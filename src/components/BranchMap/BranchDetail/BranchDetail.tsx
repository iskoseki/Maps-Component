import React, { useEffect } from "react";
import { Branch } from "../types/branchMap";
import { ActionsButtons } from "../../Sedes/ActionsButtosSedes";
import { CSSTransition } from "react-transition-group";
interface BranchDetailProps {
  branch: Branch | null;
  isClosest: boolean;
}

const BranchDetail: React.FC<BranchDetailProps> = ({ branch, isClosest }) => {
  if (!branch) {
    // Si no hay `branch`, aún muestra el `ActionsButtons`
    return (
      <div className="br-24 transition-all duration-300 ease-in-out mt-4">
        <ActionsButtons />
      </div>
    );
  }

  const { acf } = branch;
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setShow(true); // Activar la animación cuando el componente se monta
  }, []);

  return (
    <CSSTransition
      in={show}
      timeout={1000}
      classNames="slide-down"
      unmountOnExit
    >
      <div
        className={`br-24 md:bg-white mb-3 p-4 transition-all duration-300 ease-in-out mt-4 ${
          branch && "branch-detail-enter"
        }`}
      >
        <article className="text-[#757575]">
          <h1 className="text-[24px] text-[#A6192E] md:text-[#757575] text-left bold mb-4">
            {isClosest
              ? `La sucursal más cercana es ${branch.title.rendered}`
              : `La sucursal seleccionada es ${branch.title.rendered} `}
            <span className="italic text-[#b1b1b1] ">
              {" "}
              #{branch.acf.nro_sucursal}
            </span>
          </h1>
          <div className="row mb-4">
            <div className="col-12 col-md-6 mb-3">
              <label className="form-label text-[#757575] bold">
                Dirección
              </label>
              <div className="input-group">
                <input
                  className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                  value={acf.calle + " " + acf.numero}
                  disabled
                />
              </div>
            </div>

            <div className="col-12 col-md-3 mb-3">
              <label className="form-label text-[#757575] bold">Colonia</label>
              <div className="input-group">
                <input
                  className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                  value={acf.colonia}
                  disabled
                />
              </div>
            </div>

            {acf.cp && (
              <div className="col-12 col-md-3 mb-3">
                <label className="form-label text-[#757575] bold">
                  Código postal
                </label>
                <div className="input-group">
                  <input
                    className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                    value={acf.cp}
                    disabled
                  />
                </div>
              </div>
            )}

            {acf.telefono && (
              <div className="col-12 col-md-3 mb-3">
                <label className="form-label text-[#757575] bold">
                  Teléfono
                </label>
                <div className="input-group">
                  <input
                    className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                    value={acf.telefono}
                    disabled
                  />
                </div>
              </div>
            )}

            {acf.horario_lv && (
              <div className="col-12 col-md-3 mb-3">
                <label className="form-label text-[#757575] bold">
                  Lu a Vi
                </label>
                <div className="input-group">
                  <input
                    className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                    value={acf.horario_lv}
                    disabled
                  />
                </div>
              </div>
            )}

            {acf.horario_s && (
              <div className="col-12 col-md-3 mb-3">
                <label className="form-label text-[#757575] bold">
                  Sábados
                </label>
                <div className="input-group">
                  <input
                    className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                    value={acf.horario_s}
                    disabled
                  />
                </div>
              </div>
            )}

            {acf.horario_d && (
              <div className="col-12 col-md-3 mb-3">
                <label className="form-label text-[#757575] bold">
                  Domingos
                </label>
                <div className="input-group">
                  <input
                    className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                    value={acf.horario_d}
                    disabled
                  />
                </div>
              </div>
            )}

            {acf.correo && (
              <div className={acf.horario_d ? "col-3" : "col-6"}>
                <label className="form-label text-[#757575] bold">
                  Correo electrónico
                </label>
                <div className="input-group">
                  <input
                    className="form-control border-[#BDBDBD] text-[#BDBDBD] py-2"
                    value={acf.correo}
                    disabled
                  />
                </div>
              </div>
            )}
          </div>
        </article>

        <ActionsButtons />
      </div>
    </CSSTransition>
  );
};

export default BranchDetail;
