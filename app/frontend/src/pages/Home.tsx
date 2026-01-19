import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

import { campeonatoMock } from '../../../domain/services/mockCampeonato';

const Home: React.FC = () => {
  const campeonato = campeonatoMock;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gestor de Campeonato</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{campeonato.nombre}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Temporada: {campeonato.temporada}</p>
            <p>Estado: {campeonato.estado}</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
