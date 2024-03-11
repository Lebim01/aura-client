import ButtonCommon from "@/components/common/ButtonCommon";
import DesktopLayout from "@/components/common/DesktopLayout";
import InputCommon from "@/components/common/Input";
import InputPassword from "@/components/common/InputPassword";
import PasswordFeedback from "@/components/common/PasswordFeedback";
import AuthProvider from "@/components/common/ProtectAuth";
import { updatePassword } from "@/services/user";
import { useMemo, useState } from "react";

const ProfileChangePasswordPage = () => {
  const [state, setState] = useState({
    pass: "",
    confirm_pass: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | boolean>(null);

  const isDisabled = useMemo(() => {
    if (state.pass.length < 8) return true;
    if (state.confirm_pass.length < 8) return true;
    if (state.pass != state.confirm_pass) return true;
    return false;
  }, [state.pass, state.confirm_pass]);

  const changePassword = async () => {
    if (!isDisabled) {
      try {
        if (loading) return;
        setStatus(null);
        setLoading(true);
        await updatePassword(state.pass);
        setStatus(true);
        setState({
          pass: "",
          confirm_pass: "",
        });
      } catch (err) {
        setStatus(false);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <AuthProvider protected>
      <DesktopLayout>
        <div className="w-full">
          <div className="md:bg-menus bg-neutral-800/70 flex flex-col rounded-lg p-6 space-y-4">
            <label>Actualizar contraseña</label>

            <PasswordFeedback
              pass={state.pass}
              confirm_pass={state.confirm_pass}
            />

            <div className="flex flex-col space-y-2">
              <InputPassword
                LeftIcon="/login/icons/lock"
                value={state.pass}
                placeholder="Nueva contraseña"
                onChange={(value) => setState((d) => ({ ...d, pass: value }))}
              />
              <InputPassword
                LeftIcon="/login/icons/lock"
                value={state.confirm_pass}
                placeholder="Confirmar contraseña"
                onChange={(value) =>
                  setState((d) => ({ ...d, confirm_pass: value }))
                }
              />
            </div>

            <div className="flex flex-col space-y-1">
              <ButtonCommon
                disabled={isDisabled || loading}
                text="Guardar"
                onClick={changePassword}
                isLoading={loading}
              />

              {status === true && (
                <p className="text-green-500 text-center">
                  Contraseña cambiada con éxito
                </p>
              )}
              {status === false && (
                <p className="text-red-500 text-center">
                  Algo salio mal, intente más tarde
                </p>
              )}
            </div>
          </div>
        </div>
      </DesktopLayout>
    </AuthProvider>
  );
};

export default ProfileChangePasswordPage;
