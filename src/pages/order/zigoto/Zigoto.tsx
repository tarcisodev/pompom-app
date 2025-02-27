import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButtons } from '@ionic/react';
import './Zigoto.css';

const OrderZigoto: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Zigoto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Bem-vindo ao Zigoto</IonCardSubtitle>
            <IonCardTitle>Zigoto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Esta é a página do Zigoto. Aqui você encontrará informações relevantes sobre este estágio.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default OrderZigoto;
