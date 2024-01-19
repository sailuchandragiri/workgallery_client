import { useEffect, useState } from 'react';
import useFileUpload from '../hooks/useFileUpload';
const UploadToLobby = () => {
  const [file, setFile] = useState<null | File>(null);
  const [uploadFileUrl, setUpdatedFileURL] = useState<string>('');
  const url = '/lobby';
  const prefix = '/images';
  const onChange = (fileLink: string) => {
    setUpdatedFileURL(fileLink);
  };
  const { uploadFile, uploadProgress, uploading } = useFileUpload(onChange, prefix, url);
  console.log(uploadProgress);
  console.log(uploading);
  useEffect(() => {
    uploadFile(file);
    // eslint-disable-next-line
  }, [file]);
  return (
    <section className="grid-container">
      <aside>Aside</aside>
      <div>
        <img src={uploadFileUrl} alt={'image'} />
        <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <aside>Aside</aside>
    </section>
  );
};

export default UploadToLobby;
