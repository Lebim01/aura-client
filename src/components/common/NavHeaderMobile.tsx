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
        
      </div>
      <div className="flex space-x-[8px]">
        <Link href="/profile">
          <CircleButton className="border-yellow-aura-accent">
            <div> </div>
          </CircleButton>
        </Link>
      </div>
    </div>
  );
};

export default NavHeaderMobile;
