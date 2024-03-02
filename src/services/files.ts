import axiosInstance from ".";

export const uploadImage = async (file: File, folder?: string) => {
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
