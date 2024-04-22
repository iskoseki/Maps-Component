import React from "react";
import MapComponent from "./MapComponent";

const Sedes: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-10">
            <div className="br-24 mb-3">
              <div className="md:p-4 ">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sedes;
