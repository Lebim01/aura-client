import { FC } from "react";
import DesktopLayout from "../common/DesktopLayout";
import AuthProvider from "../common/ProtectAuth";

type Props = {
  isMobile: boolean;
}

const Convocatoria: FC<Props> = ({ isMobile }) => {
  return (
    <AuthProvider>
      <DesktopLayout isMobile={isMobile}>
        <div className="flex flex-col gap-y-[16px] overflow-y-auto md:h-screen pb-[99px] relative hidescroll md:max-w-[1056px] pt-[32px] md:pt-0">
          <div className="flex justify-center">
            <div className="max-w-[1440px] py-[40px] text-[20px]">
              <h1 className="font-bold text-[40px] text-center">
                Convocatoria
              </h1>
              <span className="text-center block">
                Para el proceso de nominación y selección de ganadores a los
                Premios Aura 2024
              </span>
              <span className="text-center block">
                Ciudad de México, marzo de 2024.
              </span>
              <p className="block my-[24px]">
                Los Premios AURA se llevarán a cabo en su primera edición el
                próximo 3 de julio de 2024 en el Frontón Mexico de la Ciudad de
                México. Los responsables de su creación y realización es la
                compañía de medios de acción FCO Group, la cual integra también
                en su portafolio de medios a Eliot Media y los Eliot Awards, a
                la revista Líderes Mexicanos y la lista de Los 300 líderes más
                influyentes de Mexico.
              </p>
              <p className="block my-[24px]">
                Los Premios AURA son el reconocimiento a las series de habla
                hispana que se distribuyen en plataformas de streaming.
                Reconocen la relevancia y el impacto que generan las series en
                la audiencia y los mercados en que se distribuyen, mediante el
                trabajo del talento actoral, de producción, creación,
                realización, distribución y promoción.
              </p>
              <p className="block my-[8px]">
                Los Premios AURA se entregarán a quienes resulten elegidos del
                proceso de nominaciones en las siguientes catorce categorías:
              </p>
              <ol>
                <li>1. Mejor actuación en serie de drama.</li>
                <li>2. Mejor actuación en serie de comedia.</li>
                <li>3. Mejor antagonista.</li>
                <li>4. Mejor actuación secundaria.</li>
                <li>5. Mejor elenco o mejor cast en una serie.</li>
                <li>6. Mejor serie documental.</li>
                <li>7. Mejor serie de comedia.</li>
                <li>8. Mejor serie de drama.</li>
                <li>9. Mejor show runner.</li>
                <li>10. Mejor historia o guión.</li>
                <li>11. Mejor dirección.</li>
                <li>12. Mejor piloto o final de temporada.</li>
                <li>13. La serie con mayor impacto mediático.</li>
                <li>14. La serie más adictiva.</li>
              </ol>
              <p className="block my-[24px]">
                Adicional, el premio especial de asignación directa a la Leyenda
                del Año.
              </p>
              <p className="block my-[24px]">
                Finalmente, se harán menciones especiales al trabajo realizado
                en música y banda sonora, calidad de producción, a las series en
                español que han tenido éxito en otros idiomas y a aquellas
                personalidades que han dejado huella en la industria.
              </p>
              <p className="block my-[24px]">
                Las nominaciones se darán a conocer en la página auraseries.com
                y en diversos medios de difusión el 16 de mayo de 2024.
              </p>
              <p className="block my-[24px]">
                Los criterios generales para la conformación de las nominaciones
                son:
              </p>
              <ul>
                <li className="my-[32px]">
                  • Las propuestas para candidaturas a nominación podrán ser
                  realizadas por tres fuentes origen:
                  <ul>
                    <li className="ml-[20px] my-[20px]">
                      a) Por las plataformas de streaming que deseen enviar sus
                      propuestas a través de un representante oficial y mediante
                      el formato oficial de nominación de Premios AURA.
                    </li>
                    <li className="ml-[20px] my-[20px]">
                      b) Por un representante de la serie que desee postularse,
                      de manera independiente y a través de la empresa o casa
                      productora.
                    </li>
                    <li className="ml-[20px] my-[20px]">
                      c) Directamente por el Comité de los Premios AURA al
                      considerar relevante su inclusión. Cabe resaltar que
                      acompañando a cada propuesta se deberá incluir y enviar al
                      correo electrónico auranomina@fcogroup.mx toda la
                      información solicitada en el formato de nominación oficial
                      de los premios AURA, mismo que será enviado al solicitante
                      por parte del Comité de los Premios AURA.
                    </li>
                  </ul>
                </li>
                <li className="my-[32px]">
                  • Las series deben haber sido estrenadas y puestas a
                  disponibilidad de la audiencia entre el primero de marzo de
                  2023 y el primero de marzo de 2024.
                </li>
                <li className="my-[32px]">
                  • El idioma original de las series ser el español.
                </li>
                <li className="my-[32px]">
                  • Los premios Aura, carecen de dotación económica. En
                  consecuencia, los participantes en el proceso de elección
                  renuncian a cualquier compensación monetaria o de otro tipo.
                </li>
                <li className="my-[32px]">
                  • Una vez integradas las diversas propuestas de nominación
                  para cada categoría en los tiempos, fuentes y formas
                  establecidas en la presente convocatoria, se llevará a cabo el
                  proceso de análisis, evaluación y selección para constituir el
                  short list final de nominación a los Premios AURA.
                </li>
                <li className="my-[32px]">
                  • Dicho proceso de selección de nominados responde a una
                  metodología única combinada de diversas variables, misma
                  metodología que se utilizará para la selección de ganadores en
                  la siguiente fase de los Premios AURA e integra: desde la
                  opinión de público especializado y líderes expertos, opinión y
                  ponderación de mismos miembros de la industria, análisis
                  cuantitativo de data e indicadores del impacto de las series
                  por herramientas tecnológicas de escucha social y digital,
                  argumentación y métricas del desempeño de la series
                  proporcionadas por las mismas plataformas de distribución o
                  casas productoras, y finalmente el Comité Aura que es el
                  comité editorial del medio que analiza todas las variables
                  antes mencionadas para decidir las nominaciones y
                  posteriormente ganadores a los Premios AURA.
                </li>
              </ul>
              <p className="block my-[24px]">
                La presente convocatoria se hace publica y se encontrará en el
                sitio web oficial de los Premios AURA auraseries.com al igual
                que la metodología de nominación y selección de ganadores.
              </p>
              <p className="block my-[24px]">
                La presente convocatoria podrá estar sujeta a cambios,
                modificaciones y actualización en su publicación digital.
              </p>
            </div>
          </div>
        </div>
      </DesktopLayout>
    </AuthProvider>
  );
};

export default Convocatoria;
