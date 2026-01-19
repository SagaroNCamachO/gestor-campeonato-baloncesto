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
import { equiposMock } from '../../../domain/services/mockEquipos';


import { campeonatoMock } from '../../../domain/services/mockCampeonato';
import {
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';

import { categoriasMock } from '../../../domain/services/mockCategorias';

const Home: React.FC = () => {
  const campeonato = campeonatoMock;
const equiposPorCategoria = (categoriaId: string) =>
    equiposMock.filter((equipo) => equipo.categoriaId === categoriaId);
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
     <IonList>
  {categoriasMock.map((categoria) => (
    <IonItem key={categoria.id}>
      <IonLabel>
        <h2>{categoria.nombre}</h2>
        <p>Vueltas: {categoria.vueltas}</p>

        <ul>
          {equiposPorCategoria(categoria.id).map((equipo) => (
            <li key={equipo.id}>{equipo.nombre}</li>
          ))}
        </ul>
      </IonLabel>
    </IonItem>
  ))}
</IonList>


    </IonPage>
  );
};

export default Home;
