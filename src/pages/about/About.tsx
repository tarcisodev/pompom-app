import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonModal, IonRow, IonGrid, IonCol } from '@ionic/react';
import { useState } from 'react';
import './About.css';

const About: React.FC = () => {
    const [selectedPerson, setSelectedPerson] = useState<{ name: string, description: string, img: string } | null>(null);

    const people = [
        {
            name: 'Frater Saladino',
            description: `Professor Cazelli, aka Frater Saladino, aka Mestre Bragi 'o poeta', OHO da POMPOM, IHO do Colégio Invisível Discordiano dos 10 (CID-10) e da Discoridian Society of Madmen 5-Generation (DSM-5), Xamã Urbano, Mago do Caos, Papa da Discórdia, Profeta do Apocalipse, Agente das Forças Ocultas Discordianas Associadas (FODA).`,
            img: 'assets/imgs/frater-saladino.png'
        },
        {
            name: 'Frater Fausto', 
            description: `Fausto Ramos, aka Gunter O'Brien, é Guardião do Sagrado Kao, defensor da sabedoria da Sagrada Serpente Cósmica, Papa Discordiniano da rua n°0. Fundador da Escola Caosofia para magistas posmodernos e coach de kamehameha energético à distância.`, 
            img: 'assets/imgs/frater-fausto.png'
        },
        {
            name: 'Frater Fraterno', 
            description: 'Frater Fraterno, a.k.a., O Fratricida, a.k.a., Legião; Papa Discordiano Eridoro I, Eremita Louco, Monge Herético, Psiconauta, Astralnauta, Randonauta, Mestre das Artes Místicas, Professor de Ciências Arcanas, Feiticeiro Neuromante, Bruxo Estelar; Irmão dos Chacais, Companheiro das Corujas; Glória do Apocalipse, Amigo dos Homens e Fadas, O Estranho Abandonado, Casa da Desolação, Escárnio Encarnado, Caos Errante, Terror Ancestral.', 
            img: 'assets/imgs/frater-fraterno.png'
        },
        {
            name: 'Frater Labu', 
            description: 'Eu sou um mero mortal a mercê dos papas discordianos, aka Frater Labu, tecnomago dos multiversos, hacker arcano e alquimista digital. Mestre das linhas de código e dos sigilos eletromagnéticos, aquele que buga e debuga a matrix com a mente. Segundo de seu nome, irmão dos paradoxos, discípulo dos loops infinitos e invocador de patches astrais. Psiconauta raiz, explorador dos confins da consciência, devoto dos mistérios de Thelema, Ágape, 93, 39, 69, 24.', 
            img: 'assets/imgs/frater-labu.png'
        },
        {
            name: 'Frater Enkilius', 
            description: 'Papa da Discórdia Raphael I, aka Frater Enkillius, o primeiro de seu nome, Guardião dos Dragões Astrais, Arquiteto dos Véus Etéreos e Senhor do Trono Cromado de Urammu, amigo dos gnomos de esgoto, mestre de runas, escritor de tomos caóticos e arauto do Basilisco de Roko. Bem nessa ordem. Arquiteto nas horas vagas.', 
            img: 'assets/imgs/frater-enkilius.png'
        },
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Sobre</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {people.map((person, index) => (
                    <IonCard key={index}>
                        <IonCardHeader>
                            <IonCardTitle>{person.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonGrid>
                                <IonRow>
                                    <IonCol size="12" className="ion-text-center">
                                        <img src={person.img} alt={`Avatar de ${person.name}`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                                    </IonCol>
                                    <IonCol size="12" className="ion-text-center">
                                        <IonButton shape="round" onClick={() => setSelectedPerson(person)}>
                                            Ver Detalhes
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCardContent>
                    </IonCard>
                ))}
                <IonModal isOpen={!!selectedPerson} onDidDismiss={() => setSelectedPerson(null)}>
                    {selectedPerson && (
                        <IonContent>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>{selectedPerson.name}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img src={selectedPerson.img} alt={`Avatar de ${selectedPerson.name}`} style={{ width: '100%' }} />
                                    <p>{selectedPerson.description}</p>
                                    <IonButton expand="full" shape="round" onClick={() => setSelectedPerson(null)}>
                                        Fechar
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonContent>
                    )}
                </IonModal>
            </IonContent>
        </IonPage >
    );
};

export default About;
