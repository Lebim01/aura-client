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
      
    </div>
  );
};

export default NavHeaderMobile;
