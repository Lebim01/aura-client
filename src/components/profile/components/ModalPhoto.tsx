/* eslint-disable @next/next/no-img-element */
import Modal from "@/components/common/Modal";
import { uploadImage } from "@/services/files";
import { updateUser } from "@/services/user";
import { classNamesCustom } from "@/utils/classes";
import { useSession } from "next-auth/react";
import { FC, useState } from "react";
import ImageUploading from "react-images-uploading";

type Props = {
  open: boolean;
  close: () => void;
};

const ModalPhoto: FC<Props> = (props) => {
  const { data, update } = useSession();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [images, setImages] = useState([]);

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
      setError("Algo falló al subir la imagen, intenta más tarde");
    } finally {
      const form: HTMLFormElement | null = document.querySelector("#form");
      if (form) {
        form.reset();
      }
      setUploading(false);
    }
  };

  const onChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
    if (imageList[0]) {
      onUploadImage(imageList[0].file);
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
        <div className="py-4">
          <ImageUploading
            value={images}
            onChange={onChange}
            maxNumber={1}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div
                className="upload__image-wrapper flex flex-col items-center space-y-4"
                style={isDragging ? { backgroundColor: "red" } : undefined}
                {...dragProps}
              >
                <div className="relative w-[120px] h-[120px]">
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
                    src={
                      (imageList[0] && imageList[0]["data_url"]) ||
                      data?.user?.profile_img ||
                      "/no-photo.png"
                    }
                    alt="Extra large avatar"
                    onClick={uploading ? undefined : onImageUpload}
                  />
                </div>

                <div
                  className="block w-full border rounded-lg cursor-pointer text-white focus:outline-none bg-gray-600 border-gray-600 placeholder-gray-400 hover:bg-gray-700 text-center"
                  onClick={uploading ? undefined : onImageUpload}
                >
                  Seleccionar archivo
                </div>
              </div>
            )}
          </ImageUploading>

          {error && <span className="text-red-500">{error}</span>}
        </div>
      </form>
    </Modal>
  );
};

export default ModalPhoto;
