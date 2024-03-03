import Image from "next/image";
import GeneralOption from "./components/GeneralOption";

const options = [
  { label: "Perfil", url: "" },
  { label: "Detalles de contacto", url: "" },
  { label: "Idioma", url: "" },
  { label: "Seguridad", url: "" },
];

const optionAsistence = [{ label: "Privacidad y términos", url: "" }];

const General = () => {
  return (
    <div className="flex flex-col px-[16px]">
      {/*<span className="pt-[16px] py-[24px] text-[16px] font-[700] leading-[150%] text-yellow-aura-accent">
        General
      </span>

      {options.map((item: any, index: number) => {
        return <GeneralOption key={index} label={item.label} url={item.url} />;
      })}*/}

      <span className="pt-[16px] py-[24px] text-[16px] font-[700] leading-[150%] text-yellow-aura-accent">
        Asistencia
      </span>

      {optionAsistence.map((item: any, index: number) => {
        return <GeneralOption key={index} label={item.label} url={item.url} />;
      })}
    </div>
  );
};

export default General;
