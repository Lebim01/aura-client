import axiosInstance from ".";

const loadFile = (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    // Set the image once loaded into file reader
    reader.onload = function (e: any) {
      const result = e.target.result;
      resolve(result);
    };
    reader.readAsDataURL(file);
  });
};

export const uploadImage = async (file: File, folder?: string) => {
  await loadFile(file);
  const res = await axiosInstance.post<{
    filename: string;
    url: string;
    publicURL: string;
  }>("/cloudflare/uploadImage", {
    extension: file.type.split("/")[1],
    folder,
  });

  await fetch(res.data.url, {
    body: file,
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
  });

  return res.data.publicURL;
};
