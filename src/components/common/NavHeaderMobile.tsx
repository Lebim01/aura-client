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
        {isLogged ? `Bienvenido ${data?.user?.name}` : "Inicia Sesión"}
      </div>
      <div className="flex space-x-[8px]">
        <Link href="/profile">
          <CircleButton className="border-yellow-aura-accent">
            <Image
              alt="Profile image"
              width={30}
              height={30}
              src={
                isLogged
                  ? data?.user?.profile_img || "/icons/user.svg"
                  : "/icons/user.svg"
              }
              className="rounded-full object-cover object-center max-w-[30px] max-h-[30px]"
            />
          </CircleButton>
        </Link>
      </div>
    </div>
  );
};

export default NavHeaderMobile;
