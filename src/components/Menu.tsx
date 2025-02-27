import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAccordion,
  IonAccordionGroup,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { homeOutline, homeSharp, informationCircleOutline, informationCircleSharp, schoolOutline, schoolSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Página Inicial',
    url: '/folder/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Sobre',
    url: '/folder/About',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Pompom</IonListHeader>
          <IonNote>contato@pompom.art.br</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
          <IonAccordionGroup>
            <IonAccordion value="graus">
              <IonItem slot="header">
                <IonIcon aria-hidden="true" slot="start" ios={schoolOutline} md={schoolSharp} />
                <IonLabel>Graus</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonItem routerLink="/folder/Zigoto" routerDirection="none" lines="none" detail={false}>
                  <IonLabel>Zigoto</IonLabel>
                </IonItem>
                {/* <IonItem routerLink="/folder/Neofito" routerDirection="none" lines="none" detail={false}>
                  <IonLabel>Neófito</IonLabel>
                </IonItem> */}
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
