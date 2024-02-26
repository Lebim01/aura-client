"use client";
import DesktopLayout from "@/components/common/DesktopLayout";
import Footer from "@/components/common/Footer";
import ButtonCommon from "@/components/common/ButtonCommon";
import Info from "@/components/profile/Info";
import Options from "@/components/profile/Options";
import Header from "@/components/profile/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import General from "@/components/profile/General";
import { signOut } from "next-auth/react";
import ProtectAuth from "@/components/common/ProtectAuth";

const options = [
  { step: "profile", label: "Perfil" },
  { step: "general", label: "Ajustes" },
];

const Profile = () => {
  const router = useRouter();
  const [label, setLabel] = useState("");

  useEffect(() => {
    const currentOption = options.find(
      (option) => option.step === router.query.step
    );

    if (currentOption) {
      setLabel(currentOption.label);
    }
  }, [router]);

  return (
    <ProtectAuth>
      <DesktopLayout forceDisplay>
        <div className="flex flex-col overflow-y-auto w-auto pb-[99px] md:py-[32px] relative min-w-max flex-grow h-custom-screen">
          <Header text={label || "Perfil"} />
          {/*  start profile */}
          {!router.query.step ||
          Object.keys(router.query).length === 0 ||
          router.query.step === "profile" ? (
            <>
              <Info />
              <Options />
              <div className="w-full px-[16px] py-[32px]">
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
          {/* ends profile */}
          {/* start general */}
          {router.query.step === "general" && <General />}
          {/* ends general */}
        </div>
        <Footer />
      </DesktopLayout>
    </ProtectAuth>
  );
};

export default Profile;
