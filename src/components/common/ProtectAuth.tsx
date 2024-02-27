import axiosInstance from "@/services";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";

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
    return null;
  }

  return props.children;
};

export default ProtectAuth;
