/* eslint-disable @next/next/no-img-element */
import Modal from "@/components/common/Modal";
import { uploadImage } from "@/services/files";
import { updateUser } from "@/services/user";
import { classNamesCustom } from "@/utils/classes";
import { useSession } from "next-auth/react";
import { FC, useState } from "react";

type Props = {
  open: boolean;
  close: () => void;
};

const ModalPhoto: FC<Props> = (props) => {
  const { data, update } = useSession();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const onUploadImage = async (file: File) => {
    if (uploading) return;

    try {
      setUploading(true);
      const url = await uploadImage(file, "users");
      await updateUser({
        profile_img: url,
      });
      update({
        profile_img: url,
      });
      props.close();
    } catch (err) {
      console.error(err);
      setError("Algo fallo al subir la imagen, intenta más tarde");
    } finally {
      const form: HTMLFormElement | null = document.querySelector("#form");
      if (form) {
        form.reset();
      }
      setUploading(false);
    }
  };

  const selectImage = () => {
    const input: HTMLInputElement | null =
      document.querySelector("#file_input");
    if (input) {
      input.click();
    }
  };

  return (
    <Modal
      onClose={props.close}
      open={props.open}
      className="md:w-[400px] bg-gray-900 py-[16px]"
      title="Subir foto de perfil"
    >
      <form id="form">
        <div className="py-4 flex flex-col items-center space-y-4">
          <div className="w-[120px] h-[120px] relative">
            <div
              className={classNamesCustom(
                "animate-spin h-full w-full rounded-full",
                uploading ? "visible" : "invisible"
              )}
              style={{
                backgroundColor: "#00DBDE",
                backgroundImage:
                  "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
              }}
            />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[110px] h-[110px] hover:cursor-pointer"
              src={data?.user?.profile_img || "/no-photo.png"}
              alt="Extra large avatar"
              onClick={uploading ? undefined : selectImage}
            />
          </div>
          <input
            className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            placeholder="PNG, JPG or JPEG."
            disabled={uploading}
            accept=".png,.jpg,.jpeg"
            onChange={(e) =>
              e.currentTarget.files &&
              e.currentTarget.files.length > 0 &&
              onUploadImage(e.currentTarget.files[0])
            }
          ></input>
          {error && <span className="text-red-500">{error}</span>}
        </div>
      </form>
    </Modal>
  );
};

export default ModalPhoto;
