import DesktopLayout from "../common/DesktopLayout";
import AuthProvider from "../common/ProtectAuth";

const TermsAndConditions = () => {
  return (
    <AuthProvider>
      <DesktopLayout>
        <div className="flex flex-col gap-y-[16px] overflow-y-auto md:h-screen pb-[99px] relative hidescroll md:max-w-[1056px] pt-[32px] md:pt-0">
          <div className="flex justify-center">
            <div className="max-w-[1440px] py-[40px] text-[20px]">
              <h1 className="text-center text-3xl font-bold">
                Políticas de privacidad y seguridad
              </h1>
              <p className="block my-[24px]">
                Sabemos que proteger tus derechos de privacidad e información
                personal y velar por la seguridad de nuestra plataforma es
                fundamental para conservar tu confianza y garantizar tu
                seguridad.
              </p>
              <h2 className="block my-[24px] font-bold text-xl">
                Información personal
              </h2>
              <p className="block my-[24px]">
                El contenido que se comparte online puede ser visto por
                cualquiera y tiene un amplio alcance. Nos comprometemos a
                asegurarnos de que cualquier información personal compartida en
                auraseries.com, ya sea de forma intencionada o accidental, no
                desemboque en ningún daño.{" "}
                <b>
                  No permitimos el contenido que incluya información personal
                  que pueda entrañar un riesgo de acoso, violencia, phishing,
                  fraude, robo de identidad o explotación económica.
                </b>{" "}
                Esto incluye el contenido que alguien haya publicado sobre sí
                mismo o que haya consentido que se comparta con otras personas.
              </p>
              <p className="block my-[24px]">
                <b>NO permitido</b>
                <ul>
                  <li className="my-[12px]">
                    • Números de teléfono particulares y direcciones del
                    domicilio que no sean de ámbito público
                  </li>
                  <li className="my-[12px]">
                    • Información financiera y de pago, como los números de
                    cuentas bancarias y tarjetas de crédito
                  </li>
                  <li className="my-[12px]">
                    • Información de inicio de sesión, como nombres de usuario y
                    contraseñas
                  </li>
                  <li className="my-[12px]">
                    • Documentos de identidad, tarjetas o números, como
                    pasaportes, documentos de identidad oficiales y números de
                    la seguridad social
                  </li>
                  <li className="my-[12px]">
                    • Amenazas o inducción a compartir información personal o
                    piratear una cuenta ajena
                  </li>
                </ul>
              </p>
              <p className="block my-[24px]">
                <b>Seguridad en la plataforma</b>
              </p>
              <p className="block my-[24px]">
                Nos esforzamos mucho por proteger a las personas y la
                información en auraseries.com
              </p>
              <p className="block my-[24px] font-bold">
                No permitimos: (1) acceder a cualquier parte de Aura utilizando
                métodos no autorizados; (2) intentos de obtener información
                delicada, confidencial o personal; o (3) cualquier atentado a la
                seguridad, integridad o fiabilidad de nuestra plataforma.
              </p>
              <p className="block my-[24px]">
                Debes evitar hacer clic en enlaces sospechosos o responder a
                solicitudes de información sobre los datos, las contraseñas, la
                cualificación de verificación, la información financiera y otra
                información personal de tu cuenta de Aura.
              </p>
            </div>
          </div>
        </div>
      </DesktopLayout>
    </AuthProvider>
  );
};

export default TermsAndConditions;
