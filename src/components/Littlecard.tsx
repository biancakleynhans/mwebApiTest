import { IonCol, IonGrid, IonIcon, IonLabel, IonRow } from "@ionic/react";
import { arrowDown, arrowUp } from "ionicons/icons";

interface iProps {
  speed: string;
}

export default function Littlecard(props: iProps) {
  let sE = props.speed.split("/");
  let u = sE[0];
  let d = sE[1];
  let useDOWN = d !== undefined ? d : u !== undefined ? u : "";
  let useUP = u.includes("Mbps") ? u : `${u}Mbps`;
  // console.log("??", sE, u, d, useDOWN, useUP);
  return (
    <IonGrid>
      <IonRow>
        <IonCol size='6'>
          <IonLabel>
            <IonIcon icon={arrowUp} />
          </IonLabel>
          <br />
          <IonLabel>Upload</IonLabel> <br />
          <IonLabel>{useUP}</IonLabel> <br />
        </IonCol>
        <IonCol size='6'>
          <IonLabel>
            <IonIcon icon={arrowDown} />
          </IonLabel>
          <br />
          <IonLabel>Downpload</IonLabel> <br />
          <IonLabel>{useDOWN}</IonLabel> <br />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
