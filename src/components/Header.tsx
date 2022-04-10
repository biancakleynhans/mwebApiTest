import { IonButton, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

export default function Header() {
  return (
    <IonHeader className='ion-no-border'>
      <IonToolbar>
        <IonTitle>
          <IonButton color='dark' fill='clear' routerLink='/'>
            Home
          </IonButton>
          {/* <IonButton color='dark' fill='clear' routerLink='/fibre'>
            Fibre Products
          </IonButton> */}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}
