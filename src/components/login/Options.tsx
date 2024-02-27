import React, {
  useState,
  ChangeEvent,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import InputReturn from "@/components/common/InputReturn";
import HaveAccount from "@/components/common/HaveAccount";
import SocialButton from "@/components/common/SocialButton";
import Separator from "@/components/common/Separator";
import ButtonCommon from "@/components/common/ButtonCommon";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface UserData {
  mail: string;
  pass: string;
}

const UserDataINIT = {
  mail: "",
  pass: "",
};

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const Options = ({ setLoading }: Props) => {
  const [data, setData] = useState<UserData>(UserDataINIT);
  const [disabled, setDisabled] = useState(true);
  const searchParams = useSearchParams();

  const login = (username: string, password: string) => {
    signIn("credentials", {
      username,
      password,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    const areValuesEmpty = Object.values(data).some(
      (value) => value.trim() === ""
    );
    setDisabled(areValuesEmpty);
  }, [data]);

  useEffect(() => {
    if (searchParams.get("error")) {
      setLoading(false);
    }
  }, [searchParams]);

  const startLogin = () => {
    setLoading(true);
    login(data.mail, data.pass);
  };

  return (
    <div className="flex flex-col gap-y-[24px] w-full">
      <div className="flex flex-col gap-y-[16px] w-full">
        <InputReturn
          icon={"/login/icons/mail"}
          placeholder="CORREO ELECTRÓNICO"
          name="mail"
          value={data["mail"]}
          onChange={handleChange}
        />
        <InputReturn
          icon={"/login/icons/lock"}
          placeholder="CONTRASEÑA"
          name="pass"
          value={data["pass"]}
          type="password"
          onChange={handleChange}
          keyEnter
          onClick={startLogin}
        />

        <ButtonCommon
          text="INGRESAR"
          disabled={disabled}
          onClick={() => {
            startLogin();
          }}
        />

        {searchParams.get("error") && (
          <span className="text-red-400 text-center">
            Usuario y/o contraseña incorrectos
          </span>
        )}

        <Separator />

        <SocialButton
          icon="/login/icons/google.svg"
          textcolor="text-black text-opacity-50"
          text="Continue with Google"
          background="bg-white"
          onClick={() => {
            signIn("google");
          }}
        />

        {/*         <SocialButton
          icon="/login/icons/facebook.svg"
          textcolor="text-white"
          text="Continue with Facebook"
          background="bg-blue-facebook"
        />

        <SocialButton
          icon="/login/icons/apple.svg"
          textcolor="text-white"
          text="Continue with Apple"
          background="bg-black"
        /> */}
      </div>
      <HaveAccount
        question="¿Aún no tienes cuenta?"
        hide_question={true}
        sub_question="Regístrate aquí"
        url="/signup"
      />
    </div>
  );
};

export default Options;
