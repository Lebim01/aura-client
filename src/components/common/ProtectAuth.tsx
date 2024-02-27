import axiosInstance from "@/services";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import Image from "next/image";
type Props = {
  children: ReactNode;
};

const ProtectAuth: FC<Props> = (props) => {
  const router = useRouter();
  const [init, setInit] = useState(false);
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  useEffect(() => {
    if (session.status == "authenticated") {
      axiosInstance.defaults.headers.Authorization =
        "Bearer " + session?.data.accessToken;
      setInit(true);
    }
  }, [session.data?.accessToken]);

  if (session.status === "loading" || !init) {
    return (
      <div className="">
        <Image
          src={"/logo_white.svg"}
          width={120}
          height={100}
          quality={100}
          alt=""
          className="animate-scale"
        />
      </div>
    );
  }

  return props.children;
};

export default ProtectAuth;
