import React, { useState, useMemo } from "react";
import ButtonCommon from "@/components/common/ButtonCommon";
import InputReturn from "../../common/InputReturn";
import { recoverPassword } from "@/services/user";
import { useRouter } from "next/navigation";
import InputPassword from "@/components/common/InputPassword";

const DEFAULT_STATE = {
  email: "",
  pass: "",
  confirm_pass: "",
  otp: "",
};

const SendEmail = () => {
  const router = useRouter();
  const [state, setState] = useState(DEFAULT_STATE);
  const [sended, setSended] = useState(false);
  const [status, setStatus] = useState<null | boolean>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    try {
      // init
      setLoading(true);
      setStatus(null);

      // process
      const params = sended
        ? {
            email: state.email,
            password: state.pass,
            otp: state.otp,
          }
        : {
            email: state.email,
            password: state.pass,
          };
      await recoverPassword(params);

      // success
      if (sended) setState(DEFAULT_STATE);
      setSended(true);
      setStatus(true);
      if (sended) router.push("/login");
    } catch (err) {
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  const disabled = useMemo(() => {
    if (!state.email) return true;
    if (state.pass.length < 8) return true;
    if (state.confirm_pass != state.pass) return true;
    if (sended && state.otp.length != 4) return true;
    return false;
  }, [state.email, state.pass, state.confirm_pass, state.otp, sended]);

  return (
    <div className="flex flex-col gap-y-[32px] w-full text-center">
      <span className="text-[18px] font-[500] leading-[150%]">
        {sended
          ? "Revisá tu bandeja de correo, recibirás un código de autotización"
          : "Recibirás un código de autorización en tu correo, que deberás introducir para continuar"}
      </span>
      <div className="flex flex-col gap-y-[16px]">
        <InputReturn
          icon="/login/icons/mail"
          placeholder="CORREO ELECTRÓNICO"
          type="text"
          name="mail"
          value={state.email}
          onChange={(e) => setState((d) => ({ ...d, email: e.target.value }))}
        />
        <InputPassword
          LeftIcon="/login/icons/lock"
          placeholder="NUEVA CONTRASEÑA"
          name="pass"
          value={state.pass}
          onChange={(value) => setState((d) => ({ ...d, pass: value }))}
        />
        <InputPassword
          LeftIcon="/login/icons/lock"
          placeholder="CONFIRMAR CONTRASEÑA"
          name="confirm_pass"
          value={state.confirm_pass}
          onChange={(value) => setState((d) => ({ ...d, confirm_pass: value }))}
        />
        {sended && (
          <InputReturn
            icon="/login/icons/lock"
            placeholder="CÓDIGO"
            type="text"
            name="otp"
            value={state.otp}
            onChange={(e) => setState((d) => ({ ...d, otp: e.target.value }))}
          />
        )}
        <ButtonCommon
          isLoading={loading}
          text={sended ? "CAMBIAR CONTRASEÑA" : "ENVIAR CÓDIGO"}
          disabled={disabled || loading}
          onClick={sendEmail}
        />
        {status === true && (
          <p className="text-green-600 text-center">
            Contraseña cambiada con éxito
          </p>
        )}
        {status === false && (
          <p className="text-red-600 text-center">
            Algo salio mal, intenta más tarde
          </p>
        )}
      </div>
    </div>
  );
};

export default SendEmail;
