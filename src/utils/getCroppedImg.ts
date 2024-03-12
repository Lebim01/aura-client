// /utils/cropImage.js
export async function getCroppedImg(imageSrc: any, pixelCrop: any) {
  const image = await loadImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx: any = canvas.getContext("2d");

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob: any) => {
      if (!blob) {
        reject(new Error("Canvas is empty"));
        return;
      }
      blob.name = "cropped.jpg";
      resolve(blob);
    }, "image/jpeg");
  });
}

function loadImage(src: any) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve(image);
    image.onerror = (error) =>
      reject(new Error(`Could not load image at ${src}: ${error}`));
  });
}
