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

          <div className="flex justify-center">

            <div className="max-w-[1440px]  py-[40px] text-[20px]">
              <h1 className="text-center font-bold my-[14px]">Ganadores de los premios Aura 2024</h1>
              <p className="block my-[24px]">En la primera edición de los Premios Aura se reconoció a 34 series de 6 países y a cientos de talentosas mujeres y hombres que hacen posible este universo de series de habla hispana.</p>

              <h2 className="block my-[24px]">Lista de ganadores:</h2>

              <h3 className="block my-[14px] font-bold">Mejor serie de drama</h3>
              <p className="block my-[14px]">Reconoce a la serie más destacada de este género, tanto por su historia como por las emociones intensas que logra despertar en la audiencia, las series nominadas son:</p>
              <ul className="list-disc block my-[14px] pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Vgly</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganador</span>
                </li>
                <li>Barrabrava</li>
                <li>Los Billis</li>
                <li>El grito de las mariposas</li>
                <li>30 Monedas segunda temporada</li>
                <li>Las Pelotaris 1926</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor serie de comedia</h3>
              <p className="block my-[14px]">Reconoce a la serie más sobresaliente en la misión de contagiar el buen humor a los espectadores, las series nominadas son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Ojitos de huevo</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadora</span>
                </li>
                <li>Harina segunda temporada</li>
                <li>División Palermo</li>
                <li>Nada</li>
                <li>Un buen divorcio</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor serie documental</h3>
              <p className="block my-[14px]">En esta categoría se premia a la serie de no ficción, que logra retratar la vida de una persona o un momento de la historia de manera fidedigna e impactante, las series nominadas son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">El Show: Crónica de un asesinato</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadora</span>
                </li>
                <li>La hija de dios: Dalma Maradona</li>
                <li>El Apóstol</li>
                <li>Libre de reír</li>
                <li>Cristóbal Balenciaga</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor actuación en serie de drama</h3>
              <p className="block my-[14px]">Reconoce a la actriz o actor más destacado en un rol protagónico, cuya interpretación logra conmover, emocionar y dejar huella en la audiencia, los talentos nominados son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Pedro Alonso por Berlín</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganador</span>
                </li>
                <li>Luis Gerardo Méndez por Los Enviados segunda temporada</li>
                <li>Irene Azuela por Las Viudas de los Jueves</li>
                <li>Benny Emmanuel por Vgly</li>
                <li>Omar Chaparro por las Viudas de los Jueves</li>
                <li>Zuria Vega por Las Pelotaris 1926</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor actuación en serie de comedia</h3>
              <p className="block my-[14px]">Premia a la actriz o actor en un rol protagónico que provoca risas mezcladas de reflexiones y mensajes que perduran, los talentos nominados son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Memo Villegas por Harina segunda temporada</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganador</span>
                </li>
                <li>Paulina Gaitán por (Putas) P#t@s Redes Sociales</li>
                <li>Santiago Korovsky por División Palermo</li>
                <li>Guillermo Francella por El Encargado Segunda temporada</li>
                <li>Alberto Guerra por El Mantequilla</li>
                <li>Claudia Álvarez por Un Buen divorcio</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor actuación secundaria</h3>
              <p className="block my-[14px]">En esta categoría se premia a la actriz o actor más brillante en un rol de reparto en serie de drama o comedia, los talentos nominados son:</p>
              <ul className="block my-[24px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Verónica Bravo por Harina</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadora</span>
                </li>
                <li>Juan Daniel García Treviño por Vgly</li>
                <li>Juan Pablo Medina por Las Viudas de los Jueves</li>
                <li>Mónica Gonzága por Barrabrava</li>
                <li>Kike Vazquez por Ojitos de Huevo</li>
                <li>Megan Montaner por 30 Monedas segunda temporada</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Revelación actoral</h3>
              <p className="block my-[14px]">En esta categoría se premia al descubrimiento actoral más destacado de una actriz o actor resaltando su interpretación por encima de otras en una serie de drama o comedia, los talentos nominados son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Iván Hochman por El Amor Después del Amor</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganador</span>
                </li>
                <li>Alexis Arroyo por Ojitos de Huevo</li>
                <li>Julián Zuluaga por Los Billis</li>
                <li>Paola Fernández por Ojitos de Huevo</li>
                <li>Sasha González por Vgly</li>
                <li>Michelle Pellicer por Cindy la Regia</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor elenco</h3>
              <p className="block my-[14px]">Reconoce la interpretación más memorable del talento conjunto en una serie de drama o comedia, los nominados son:</p>
              <ul className="block my-[24px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Pacto de Silencio</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadores</span>
                </li>
                <li>El Juego de las Llaves tercera temporada</li>
                <li>Las Viudas de los Jueves</li>
                <li>División Palermo</li>
                <li>Vgly</li>
                <li>30 Monedas Segunda temporada</li>
                <li>Las Pelotaris 1926</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor producción ejecutiva</h3>
              <p className="block my-[14px]">Esta categoría premia a los productores ejecutivos, showrunners y creadores de una serie de drama, comedia o documental, los nominados son:</p>
              <ul className="my-[24px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Arturo Sampson, Isabel López Polanco, Santiago Espejo y Sebastián Sariñana por Vgly</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadores</span>
                </li>
                <li>Big Drama, Alexis Fridman, Santiago Limón, Juan Uruchurtu por Ojitos de Huevo</li>
                <li>Marc Cistaré, Gabriela Ramirez de Estenoz, Natalia Echeverri, Laura Fernández Espeso, Javier Pons, Adriana Rivas por Las Pelotaris</li>
                <li>Federico Cuervo, José Vidggiano por Harina segunda temporada</li>
                <li>Nicolás Goldar Parodi por División Palermo</li>
                <li>Álex de la Iglesia, Jorge Guerricaechevarría, Carolina Bang, Steve Matthews, Patricia Nieto, Miguel Salvat, Antony Root por 30 Monedas segunda temporada</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor escritor / escritores</h3>
              <p className="block my-[14px]">Esta categoría premia al escritor o cuarto de escritores que desarrollaron el guión de una serie de Drama o comedia, sea original o adaptada, los nominados son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Sebastián Sariñana, Fernando Rasé, Marcos Bucay, Santiago Espejo, Gabriela Guraieb y Jaime Muñoz de Baena por Vgly</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadores</span>
                </li>
                <li>Sara Antuña, Carlos de Pando, Héctor Beltrán, Gabriel Ochoa por Sin Huellas</li>
                <li>Gabriel Ochoa, Everardo Gout, Leopoldo Gout, Peter Gross, Mark Millar, Kevin Rodrífuez, Tina de la Torre, Iturri Sosa por El Elegido</li>
                <li>Juan Matias Carballo, Gabriel Nicoli, Azucena Rodriguez, Ricardo Rodriguez por El Grito de las Mariposas</li>
                <li>Leandro Custo, Diego Fió, Juan Pablo Kolodziej, Lucila Podesta, Francisco Varone por El Amor Después del Amor</li>
                <li>Marc Cistaré, Anaí López, Javier Naya, Adriana Rivas por Las Pelotaris 1926</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor dirección</h3>
              <p className="block my-[14px]">En esta categoría se premia al o los directores más destacados en una serie de drama, comedia o documental, los nominados son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Juan Felipe Cano y Mateo Stivelberg por Los Billis</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadores</span>
                </li>
                <li>Salvador Espinosa por Harina segunda temporada</li>
                <li>Pato Safa y Analeine Cal y Mayor por Ojitos de Huevo</li>
                <li>Humberto Hinojosa por Las Viudas de los Jueves</li>
                <li>Jerónimo Carranza, Emanuel Diez, Diego Biffeld, Gastón Duprat y Mariano Cohn por El Encargado segunda temporada</li>
                <li>Sebastián Sariñana, Santiago Fábregas y Cris Gris por Vgly</li>
                <li>Jesús Rodrigo por Las Pelotaris 1926</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mejor piloto</h3>
              <p className="block my-[14px]">En esta categoría se premia al mejor episodio que da inicio a una serie de drama, comedia o documental, las series nominadas son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li>Las Pelotaris 1926</li>
                <li>Ojitos de Huevo</li>
                <li>División Palermo</li>
                <li>El Encargado</li>
                <li>Los Billis</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Mayor impacto</h3>
              <p className="block my-[14px]">En esta categoría se premia a la serie que logró impactar a la sociedad generando mayor conversación orgánica en redes sociales, las series nominadas son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Ojitos de Huevo</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadora</span>
                </li>
                <li>Berlín</li>
                <li>Pacto de Silencio</li>
                <li>Harina segunda temporada</li>
                <li>Vgly</li>
                <li>Lalola</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Talento hispano internacional</h3>
              <p className="block my-[14px]">En esta categoría se premia a la actriz o actor más brillante en series fuera de su país de origen, los nominados son:</p>
              <ul className="block my-[14px] list-disc pl-6">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Cristina Rodlo por Halo segunda temporada</span>
                  <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganadora</span>
                </li>
                <li>Pedro Pascal por El mandalorian tercera temporada</li>
                <li>Taz Skylar por One Piece</li>
                <li>Paulina Dávila por Griselda</li>
                <li>Eiza González por el problema de los 3 cuerpos</li>
                <li>Iñaki Godoy por One Piece</li>
                <li>Sofía Vergara por Griselda</li>
              </ul>

              <h3 className="block my-[14px] font-bold">Premio Leyenda</h3>
              <p className="block my-[14px]">Reconocimiento otorgado a una personalidad de la industria audiovisual que por su trabajo y trayectoria ha permanecido en la mente y gusto del público siendo piedra angular de las próximas generaciones.</p>
              <p className="block my-[14px] font-bold text-2xl">Eugenio Derbéz <span className="bg-yellow-400 w-auto px-2 py-1 gap-2 inline-flex rounded-md">Ganador</span></p>

              <p className="block my-[14px]">Los premios Aura se llevaron a cabo el 3 de julio en Ciudad de México.</p>
              <p className="block my-[14px]">Los Premios Aura 2024 son presentados por Coca Cola sin azúcar, CTT, Tequila José Cuervo Tradicional, KIA y TotalPlay</p>
            </div>

          </div>

        </div>
      </DesktopLayout>
      {isMobile && <Footer />}
    </AuthProvider>
  );
};

export default Convocatoria;
