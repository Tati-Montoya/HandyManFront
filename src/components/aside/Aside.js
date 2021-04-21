import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function Aside() {
  const history = useHistory();

  const goToRegistrar = () => {
    history.push("/registrar");
  };

  const goToConsultar = () => {
    history.push("/consultar");
  };

  return (
    <div>
      <div className="col-12 mt-5">
        <span>
          <Button color="primary" onClick={goToRegistrar}>
            Registrar Servicio
          </Button>
        </span>
      </div>
      <div className="col-12 mt-3">
        <span>
          <Button color="primary" onClick={goToConsultar}>
            Consultar Horas
          </Button>
        </span>
      </div>
    </div>
  );
}
