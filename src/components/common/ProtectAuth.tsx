import axiosInstance from "@/services";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  children: ReactNode;
  protected?: boolean;
};

const AuthProvider: FC<Props> = (props) => {
  const router = useRouter();
  const [init, setInit] = useState(false);
  const session = useSession({
    required: props.protected ?? false,
    onUnauthenticated() {
      if (props.protected) router.push("/login");
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
      <div className="flex w-screen h-custom-screen px-[27px] items-center justify-center  ">
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

export default AuthProvider;
