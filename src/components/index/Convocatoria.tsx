import { FC, useState } from "react";
import DesktopLayout from "../common/DesktopLayout";
import AuthProvider from "../common/ProtectAuth";
import Footer from "../common/Footer";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {
  isMobile: boolean;
};

type Tabs = "credits" | "reviews" | "video";

const Convocatoria: FC<Props> = ({ isMobile }) => {
  const [tab, setTab] = useState<Tabs>("credits");
  return (
    <AuthProvider>
      <DesktopLayout isMobile={isMobile}>
        <div className="flex flex-col gap-y-[16px] overflow-y-auto md:h-screen pb-[99px] relative hidescroll md:max-w-[1056px] pt-[32px] md:pt-0">
          <Tabs>
            <TabList>
              <Tab>Convocatoria</Tab>
              <Tab disabled>Ganadores</Tab>
            </TabList>
            <TabPanel>
              <div className="flex justify-center">

                <div className="max-w-[1440px]  py-[40px] text-[20px]">

                  <h1 className="text-center font-bold my-[14px]">Nominados primera edición de los Premios Aura</h1>
                  <p className="block my-[24px]">En la primera edición de los Premios Aura se reconoce a 34 series de 6 países y a cientos de talentosos mujeres y hombres que hacen posible este universo de series de habla hispana.</p>

                  <h2 className="block my-[24px] ">Los nominados son:</h2>

                  <h3 className="block my-[14px] font-bold">Mejor serie de drama</h3>
                  <p className="block my-[14px]">Reconoce a la serie más destacada de este género, tanto por su historia como por las emociones intensas que logra despertar en la audiencia, las series nominadas son:</p>
                  <ul className="list-disc block my-[14px] pl-6">
                    <li>Brarrabrava</li>
                    <li>Los Billis</li>
                    <li>El grito de las mariposas</li>
                    <li>Vgly</li>
                    <li>30 Monedas segunda temporada</li>
                    <li>Las pelotaris</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor serie de comedia</h3>
                  <p className="block my-[14px]">Reconoce a la serie más sobresaliente en la misión de contagiar el buen humor a los espectadores, las series nominadas son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Harina segunda temporada</li>
                    <li>Ojitos de Huevo</li>
                    <li>División Palermo</li>
                    <li>Nada</li>
                    <li>Un buen divorcio</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor serie documental</h3>
                  <p className="block my-[14px]">En esta categoría se premia a la serie de no ficción, que logra retratar la vida de una persona o un momento de la historia de manera fidedigna e impactante, las series nominadas son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>La hija de dios: Dalma Maradona</li>
                    <li>El Apóstol</li>
                    <li>El Show: Crónica de un asesinato</li>
                    <li>Libre de reír</li>
                    <li>Cristóbal Balenciaga</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor actuación en serie de drama</h3>
                  <p className="block my-[14px]">Reconoce a la actriz o actor más destacado en un rol protagónico, cuya interpretación logra conmover, emocionar y dejar huella en la audiencia, los talentos nominados son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Pedro Alonso por Berlín</li>
                    <li>Luis Gerardo Méndez por Los Enviados segunda temporada</li>
                    <li>Irene Azuela por Las Viudas de los Jueves</li>
                    <li>Benny Emmanuel por Vgly</li>
                    <li>Omar Chaparro por las Viudas de los Jueves</li>
                    <li>Zuria Vega por Las Pelotaris</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor actuación en serie de comedia</h3>
                  <p className="block my-[14px]">Premia a la actriz o actor en un rol protagónico que provoca risas mezcladas de reflexiones y mensajes que perduran, los talentos nominados son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Paulina Gaitán por (Putas) P#t@s Redes Sociales</li>
                    <li>Memo Villegas por Harina segunda temporada</li>
                    <li>Santiago Korovsky por División Palermo</li>
                    <li>Guillermo Francella por El Encargado Segunda temporada</li>
                    <li>Alberto Guerra por El Mantequilla</li>
                    <li>Claudia Álvarez por Un Buen divorcio</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor actuación secundaria</h3>
                  <p className="block my-[14px]">En esta categoría se premia a la actriz o actor más brillante en un rol de reparto en serie de drama o comedia, los talentos nominados son:</p>
                  <ul className="block my-[24px] list-disc pl-6">
                    <li>Juan Daniel García Treviño por Vgly</li>
                    <li>Verónica Bravo por Harina</li>
                    <li>Juan Pablo Medina por Las Viudas de los Jueves</li>
                    <li>Mónica Gonzága por Barrabrava</li>
                    <li>Kike Vazquez por Ojitos de Huevo</li>
                    <li>Megan Montaner por 30 Monedas segunda temporada</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Revelación actoral</h3>
                  <p className="block my-[14px]">En esta categoría se premia al descubrimiento actoral más destacado de una actriz o actor resaltando su interpretación por encima de otras en una serie de drama o comedia, los talentos nominados son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Alexis Arroyo por Ojitos de Huevo</li>
                    <li>Julián Zuluaga por Los Billis</li>
                    <li>Paola Fernández por Ojitos de Huevo</li>
                    <li>Sasha González por Vgly</li>
                    <li>Michelle Pellicer por Cindy la Regia</li>
                    <li>Iván Hochman por El Amor Después del Amor</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor elenco</h3>
                  <p className="block my-[14px]">Reconoce la interpretación más memorable del talento conjunto en una serie de drama o comedia, los nominados son:</p>
                  <ul className="block my-[24px] list-disc pl-6">
                    <li>Pacto de Silencio</li>
                    <li>El Juego de las Llaves tercera temporada</li>
                    <li>Las Viudas de los Jueves</li>
                    <li>División Palermo</li>
                    <li>Vgly</li>
                    <li>30 Monedas Segunda temporada</li>
                    <li>Las Pelotaris</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor producción ejecutiva</h3>
                  <p className="block my-[14px]">Esta categoría premia a los productores ejecutivos, showrunners y creadores de una serie de drama, comedia o documental, los nominados son:</p>
                  <ul className="my-[24px] list-disc pl-6">
                    <li>Vgly</li>
                    <li>Ojitos de Huevo</li>
                    <li>Las Pelotaris</li>
                    <li>Harina segunda temporada</li>
                    <li>División Palermo</li>
                    <li>30 Monedas segunda temporada</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor escritor / escritores</h3>
                  <p className="block my-[14px]">Esta categoría premia al escritor o cuarto de escritores que desarrollaron el guión de una serie de Drama o comedia, sea original o adaptada, los nominados son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Sin Huellas</li>
                    <li>El Elegido</li>
                    <li>El Grito de las Mariposas</li>
                    <li>Vgly</li>
                    <li>El Amor Después del Amor</li>
                    <li>Las Pelotaris</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor dirección</h3>
                  <p className="block my-[14px]">En esta categoría se premia al o los directores más destacados en una serie de drama, comedia o documental, los nominados son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Salvador Espinosa por Harina segunda temporada</li>
                    <li>Pato Safa y Analeine Cal y Mayor por Ojitos de Huevo</li>
                    <li>Juan Felipe Cano y Mateo Stivelberg por Los Billis</li>
                    <li>Humberto Hinojosa por Las Viudas de los Jueves</li>
                    <li>Jerónimo Carranza, Emanuel Diez, Diego Biffeld, Gastón Duprat y Mariano Cohn por El Encargado segunda temporada</li>
                    <li>Sebastián Sariñana, Santiago Fábregas y Cris Gris por Vgly</li>
                    <li>Jesús Rodrígo por Las Pelotaris</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mejor piloto</h3>
                  <p className="block my-[14px]">En esta categoría se premia al mejor episodio que da inicio a una serie de drama, comedia o documental, las series nominadas son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Ojitos de Huevo</li>
                    <li>División Palermo</li>
                    <li>El Encargado</li>
                    <li>Los Billis</li>
                    <li>Las Pelotaris</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Mayor impacto</h3>
                  <p className="block my-[14px]">En esta categoría se premia a la serie que logró impactar a la sociedad generando mayor conversación orgánica en redes sociales, las series nominadas son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Berlín</li>
                    <li>Ojitos de Huevo</li>
                    <li>Pacto de Silencio</li>
                    <li>Harina segunda temporada</li>
                    <li>Vgly</li>
                    <li>Lalola</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Talento hispano internacional</h3>
                  <p className="block my-[14px]">En esta categoría se premia a la actriz o actor más brillante en series fuera de su país de origen, los nominados son:</p>
                  <ul className="block my-[14px] list-disc pl-6">
                    <li>Pedro Pascal por El mandalorian tercera temporada</li>
                    <li>Taz Skylar por One Piece</li>
                    <li>Paulina Dávila por Griselda</li>
                    <li>Cristina Rodlo por Halo segunda temporada</li>
                    <li>Eiza González por el problema de los 3 cuerpos</li>
                    <li>Iñaki Godoy por One Piece</li>
                    <li>Sofía Vergara por Griselda</li>
                  </ul>

                  <h3 className="block my-[14px] font-bold">Premio Leyenda</h3>
                  <p className="block my-[14px]">Reconocimiento otorgado a una personalidad de la industria audiovisual que por su trabajo y trayectoria ha permanecido en la mente y gusto del público siendo piedra angular de las próximas generaciones.</p>

                  <p className="block my-[14px]">Los premios Aura se llevarán a cabo el próximo 3 de Julio en Ciudad de México.</p>
                  <p className="block my-[14px]">Los Premios Aura son presentados por Coca Cola sin azúcar, CTT, Tequila José Cuervo Tradicional, KIA y TotalPlay</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel disabled>---------------------------------------------------------------------------------------------------------------------------------------------------------------------</TabPanel>
          </Tabs>

        </div>
      </DesktopLayout>
      {isMobile && <Footer />}
    </AuthProvider>
  );
};

export default Convocatoria;
