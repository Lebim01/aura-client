import { useSession } from "next-auth/react";
import CircleButton from "./CircleButton";
import { LuFilter } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const NavHeaderMobile = () => {
  const { status, data } = useSession();
  const isLogged = status == "authenticated";
  
  return (
    <div className="pb-[16px] flex justify-between items-center">
      <div className="font-bold">
        {isLogged ? `Bienvenido ${data?.user.name}` : "Inicia Sesión"}
      </div>
      <div className="flex space-x-[8px]">
        {/*<CircleButton
          className="bg-[#0E0E0E] overflow-hidden"
          style={{
            borderImageSource:
              "linear-gradient(143.13deg, #B8DE63 14.64%, #53D174 86.07%)",
            boxShadow: "0px 0px 6px 0px #B6DE6480",
          }}
        >
          <LuFilter size={20} />
        </CircleButton>*/}
        <Link href="/profile">
          <CircleButton className="border-yellow-aura-accent">
            <div></div>
          </CircleButton>
        </Link>
      </div>
    </div>
  );
};

export default NavHeaderMobile;
