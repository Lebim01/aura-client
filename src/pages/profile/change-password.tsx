import ButtonCommon from "@/components/common/ButtonCommon";
import DesktopLayout from "@/components/common/DesktopLayout";
import InputCommon from "@/components/common/Input";
import PasswordFeedback from "@/components/common/PasswordFeedback";
import AuthProvider from "@/components/common/ProtectAuth";
import { updatePassword } from "@/services/user";
import { useMemo, useState } from "react";

const ProfileChangePasswordPage = () => {
  const [state, setState] = useState({
    pass: "",
    confirm_pass: "",
  });
  const [loading, setLoading] = useState(true);
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
      <DesktopLayout forceDisplay>
        <div className="w-full">
          <div className="md:bg-menus bg-menus-mobile flex flex-col rounded-lg p-6 space-y-4">
            <label>Actualizar contraseña</label>

            <PasswordFeedback
              pass={state.pass}
              confirm_pass={state.confirm_pass}
            />

            <div className="flex flex-col space-y-2">
              <InputCommon
                value={state.pass}
                placeholder="Nueva contraseña"
                onChange={(value) => setState((d) => ({ ...d, pass: value }))}
                type="password"
              />
              <InputCommon
                value={state.confirm_pass}
                placeholder="Confirmar contraseña"
                onChange={(value) =>
                  setState((d) => ({ ...d, confirm_pass: value }))
                }
                type="password"
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
