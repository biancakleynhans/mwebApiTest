import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Routing from "./routes/Routing";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Routing />
    </IonReactRouter>
  </IonApp>
);

export default App;
