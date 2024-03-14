import DesktopLayout from "@/components/common/DesktopLayout";
import Footer from "@/components/common/Footer";
import ButtonCommon from "@/components/common/ButtonCommon";
import Info from "@/components/profile/Info";
import Options from "@/components/profile/Options";
import Header from "@/components/profile/Header";
import { FC, useEffect, useState } from "react";
import General from "@/components/profile/General";
import { signOut } from "next-auth/react";
import AuthProvider from "@/components/common/ProtectAuth";
import { useRouter, useSearchParams } from "next/navigation";
import { GetServerSideProps } from "next";

type Props = {
  isMobile: boolean;
};

const options = [
  { step: "profile", label: "Perfil" },
  { step: "general", label: "Ajustes" },
];

const Profile: FC<Props> = ({ isMobile }) => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const router = useRouter();
  const [label, setLabel] = useState("");

  useEffect(() => {
    const currentOption = options.find((option) => option.step === step);

    if (currentOption) {
      setLabel(currentOption.label);
    }
  }, [step]);

  return (
    <AuthProvider protected>
      <DesktopLayout isMobile={isMobile}>
        <div className="flex flex-col overflow-y-auto w-auto pb-[99px] relative min-w-max flex-grow h-custom-screen hidescroll md:max-w-[1056px]">
          <Header text={label || "Perfil"} />
          {!step || step === "profile" ? (
            <>
              <Info />
              <Options />
              <div className="w-full px-[16px] py-[32px] md:hidden">
                <ButtonCommon
                  text="CERRAR SESIÓN"
                  disabled={false}
                  onClick={() => {
                    signOut()
                      .then(() => {
                        router.push("/login");
                      })
                      .catch(console.error);
                  }}
                />
              </div>
            </>
          ) : null}
          {step === "general" && <General />}
        </div>
        <Footer />
      </DesktopLayout>
    </AuthProvider>
  );
};

export default Profile;

export const getServerSideProps = (async (context) => {
  const userAgent = context.req.headers["user-agent"] as string;
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  return { props: { isMobile } };
}) satisfies GetServerSideProps<Props>;
