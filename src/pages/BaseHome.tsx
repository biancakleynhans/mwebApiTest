import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import FibreProducts from "./FibreProducts";

export default function BaseHome() {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <FibreProducts />
      </IonContent>
    </IonPage>
  );
}
