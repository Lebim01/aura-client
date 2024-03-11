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
        <Link href="/profile">
          <CircleButton className="border-yellow-aura-accent">
            <img
              alt="Profile image"
              width={30}
              height={30}
              src={
                isLogged
                  ? data?.user.profile_img || "/icons/user.svg"
                  : "/icons/user.svg"
              }
              className="rounded-full"
            />
          </CircleButton>
        </Link>
      </div>
    </div>
  );
};

export default NavHeaderMobile;
