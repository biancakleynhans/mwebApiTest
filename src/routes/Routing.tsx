import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import BaseHome from "../pages/BaseHome";
import FibreProducts from "../pages/FibreProducts";
import Page404 from "../pages/Page404";

export default function Routing() {
  return (
    <IonRouterOutlet>
      {/* User  Routes  */}
      {/* Had it as it own page overkill in this senario */}
      {/* <Route exact path='/fibre' component={FibreProducts} /> */}

      {/* Defaults */}
      <Route exact path='/' component={BaseHome} />
      <Route component={Page404} />
    </IonRouterOutlet>
  );
}
