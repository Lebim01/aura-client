import axiosInstance from "@/services";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

const ProtectAuth: FC<Props> = (props) => {
  const router = useRouter();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  useEffect(() => {
    if (session.status == "authenticated") {
      console.log(session)
      axiosInstance.defaults.headers.Authorization =
        "Bearer " + session?.data.accessToken;
    }
  }, [session.data?.accessToken]);

  if (session.status === "loading") {
    return null;
  }

  return props.children;
};

export default ProtectAuth;
