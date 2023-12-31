import axios, { AxiosResponse } from 'axios';

export async function uploadFileToSignedUrl(
  signedUrl: string,
  file: File,
  contentType: string,
  onProgress: () => number,
  onComplete: (response: AxiosResponse) => void,
) {
  console.log(signedUrl);
  axios
    .put(signedUrl, file, {
      onUploadProgress: onProgress,
      headers: {
        'Content-Type': contentType,
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
