import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ConsultarHoras from "./containers/consultarHoras/ConsultarHoras";
import RegistrarServicio from "./containers/registrarServicio/RegistrarServicio";

export default function MyRouter() {
  return (
    <div>
      <Switch>
        <Route exact path="/registrar" component={RegistrarServicio} />
        <Route exact path="/consultar" component={ConsultarHoras} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

