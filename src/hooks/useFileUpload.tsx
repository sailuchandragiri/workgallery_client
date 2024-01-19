import { useCallback, useState } from 'react';
import { uploadFileToSignedUrl } from '../api/fileUpload';
import useAxiosPrivate from './useAxiosPrivate';

function getKeyAndContentType(file: File, prefix = 'documents') {
  const [fileName, extension] = file.name.split('.');
  // to generate unique key every time
  const key = prefix + `/${fileName}-${new Date().valueOf()}.${extension}`;

  const content_type = file.type;

  return { key, content_type };
}
// interface getSignedOptions {
//   key: string;
//   content_type: string;
//   url: string;
// }

export default function useFileUpload(
  onSuccess: (fileLink: string) => void,
  prefix: string,
  url: string,
) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const axiosPrivate = useAxiosPrivate();

  const uploadFile = useCallback((file: File) => {
    if (file) {
      const { key, content_type } = getKeyAndContentType(file, prefix);
      axiosPrivate.post(`${url}`, { key, content_type }).then((response) => {
        console.log(response.data);
        const signedUrl = response?.data?.data?.signedUrl;
        const fileLink = response?.data?.data?.fileLink;
        console.log(signedUrl);
        if (signedUrl) {
          console.log('uploading');
          setUploading(true);

          uploadFileToSignedUrl(
            signedUrl,
            file,
            content_type,
            (progress) => {
              console.log(progress);
              setUploadProgress((progress.loaded / progress.total) * 100);
            },
            () => {
              onSuccess(fileLink);
              setUploading(false);
            },
          ).finally(() => {
            setUploadProgress(0);
          });
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  return {
    uploading,
    uploadProgress,
    uploadFile,
  };
}
