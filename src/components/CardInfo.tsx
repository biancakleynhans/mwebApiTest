import { IonButton, IonCard, IonCol, IonGrid, IonLabel, IonRow } from "@ionic/react";
import Littlecard from "./Littlecard";

interface iProps {
  prod: {
    productCode: string;
    productName: string;
    productRate: number;
    provider: string;
  };
  providerImg: string;
  campainName: string;
}
export default function CardInfo(props: iProps) {
  let def = props.prod.productName.split(" ");

  let sU: string | undefined = def.find((ss) => ss.match("Uncapped"));
  let sC: string | undefined = def.find((ss) => ss.match("Capped"));
  let sS: string | undefined = def.find((ss) => ss.match(/\d\w*|\d*\/\d*\w*/));
  let sN: string = sU !== undefined ? sU : sC !== undefined ? sC : "";
  let i = def.indexOf("-");
  let type = def.splice(i - 1, 1);

  let speed = sS !== undefined ? sS : "";
  let name = `${speed.slice(speed.indexOf("/") + 1)} ${type}`;

  // let speed = defA[0].split("/")[1];
  // let name = `${speed} ${defA[1]} ${defA[2]}`;
  // console.log("CARD", props.prod.productName, def, sU, sC, sS, sN, i, type);
  return (
    <IonCard color='light'>
      <IonGrid>
        <IonRow className='ion-align-items-center'>
          <IonCol className='ion-align-self-center'>
            <IonLabel style={{ fontSize: "18px" }}>{name}</IonLabel>
            <br />
            <IonLabel class='ion-text-wrap' style={{ fontSize: "14px" }}>
              Untrottled
            </IonLabel>
            <br />
            <IonLabel class='ion-text-wrap' style={{ fontSize: "14px" }}>
              {props.campainName}
            </IonLabel>
            <br />
            <IonLabel class='ion-text-wrap' style={{ fontSize: "20px" }}>
              R {props.prod.productRate} pm
            </IonLabel>
            <br />
          </IonCol>
          <IonCol className='ion-align-self-end'>
            <img src={props.providerImg} alt='broken' />
          </IonCol>

          <IonCol className='ion-align-self-center'>
            <Littlecard speed={speed} />
            <IonButton color='danger'>Check coverage</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
}
