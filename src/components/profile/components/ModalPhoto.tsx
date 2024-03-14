import React, { useState, useCallback, FC } from "react";
import Modal from "@/components/common/Modal";
import { uploadImage } from "@/services/files";
import { updateUser } from "@/services/user";
import { useSession } from "next-auth/react";
import Cropper from "react-easy-crop";
import { classNamesCustom } from "@/utils/classes";
import { getCroppedImg } from "@/utils/getCroppedImg";
type Props = {
  open: boolean;
  close: () => void;
};

const ModalPhoto: FC<Props> = (props) => {
  const { data, update } = useSession();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [crop, setCrop] = useState<any>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<any>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [showCropper, setShowCropper] = useState<any>(false);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const selectImage = () => {
    const input: any = document.querySelector("#file_input");
    input && input.click();
  };

  const handleFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = URL.createObjectURL(file);
      setSelectedImage(imageDataUrl);
      setShowCropper(true);
    }
  };

  const onUploadImage = async () => {
    if (!selectedImage || !croppedAreaPixels) return;
    setShowCropper(false);
    try {
      setUploading(true);
      const croppedImage: any = await getCroppedImg(
        selectedImage,
        croppedAreaPixels
      );
      const url = await uploadImage(croppedImage, "users");
      await updateUser({ profile_img: url });
      update({ profile_img: url });
      close();
    } catch (err) {
      console.error(err);
      setError("Algo falló al subir la imagen, intenta más tarde");
    } finally {
      setShowCropper(false);
      setUploading(false);
      setSelectedImage(null);
    }
  };

  return (
    <Modal
      onClose={props.close}
      open={props.open}
      className="md:w-[400px] bg-gray-900 py-[16px]"
      title="Subir foto de perfil"
    >
      <div className="py-4 flex flex-col items-center space-y-4">
        {!showCropper ? (
          <>
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[110px] h-[110px] hover:cursor-pointer object-cover object-center"
                src={data?.user?.profile_img || "/no-photo.png"}
                alt="Extra large avatar"
                onClick={uploading ? undefined : selectImage}
              />
            </div>
            <input
              className="hidden"
              id="file_input"
              name="file"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            {error && <span className="text-red-500">{error}</span>}
          </>
        ) : (
          <>
            <div className="relative w-full h-64">
              <Cropper
                image={selectedImage}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                cropShape={"round"}
              />
            </div>
            <button
              className="mt-4 btn"
              onClick={onUploadImage}
              disabled={uploading}
            >
              Subir imagen
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalPhoto;
