import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
};

const ProtectAuth: FC<Props> = (props) => {
  const router = useRouter();
  const { status } = useSession();
  useEffect(() => {
    if (status != "authenticated") {
      router.push("/login");
    }
  }, [status]);
  return props.children;
};

export default ProtectAuth;
