import axios, { AxiosResponse } from "axios";

export async function uploadFileToSignedUrl(
  signedUrl: string,
  file: File,
  contentType: string,
  onProgress: (progress: ProgressEvent) => void,
  onComplete: (response: AxiosResponse) => void,
) {
  console.log(signedUrl);
  axios
    .put(signedUrl, file, {
      /*
      // @ts-expect-error :progress Event need to fix */

      onUploadProgress: onProgress,
      headers: {
        "Content-Type": contentType,
      },
    })
    .then((response) => {
      onComplete(response);
      console.log(response);
    })
    .catch((err) => {
      console.error(err.response);
    });
}
