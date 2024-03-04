import React, { useState, ChangeEvent, useEffect } from "react";
import InputReturn from "@/components/common/InputReturn";
import ButtonCommon from "@/components/common/ButtonCommon";
import { useRouter } from "next/navigation";

interface UserData {
  pass: string;
  confirm_pass: string;
}

const UserDataINIT = {
  pass: "",
  confirm_pass: "",
};

const NewPass = () => {
  const [data, setData] = useState<UserData>(UserDataINIT);
  const [disabled, setDisabled] = useState(true);
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setShowError(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const areValuesValid =
        Object.values(data).every((value) => value.trim() !== "") &&
        new Set(Object.values(data)).size === 1;
      setDisabled(!areValuesValid);
      if (data.pass !== data.confirm_pass) {
        setShowError(true);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [data]);

  return (
    <div className="flex flex-col gap-y-[32px] w-full">
      <div className="flex flex-col gap-y-[16px] w-full">
        <InputReturn
          icon={"/login/icons/lock"}
          placeholder="INGRESA TU NUEVA CONTRASEÑA"
          name="pass"
          value={data["pass"]}
          type="password"
          onChange={handleChange}
        />
        <div className="flex flex-col w-full gap-y-[8px]">
          <InputReturn
            icon={"/login/icons/lock"}
            placeholder="CONFIRMA TU CONTRASEÑA"
            name="confirm_pass"
            value={data["confirm_pass"]}
            type="password"
            onChange={handleChange}
          />
          {showError && (
            <span className="leading-[100%] text-[12px] text-red-400">
              Las contraseñas no coinciden
            </span>
          )}
        </div>
      </div>
      <ButtonCommon
        text="CAMBIAR"
        disabled={disabled}
        onClick={() => {
          router.push("/login?step=passchanged");
        }}
      />
    </div>
  );
};

export default NewPass;
