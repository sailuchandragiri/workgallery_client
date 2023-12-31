// import React, { useState } from 'react';
// import axios from '../api/axios';
// const UploadFile = () => {
//   const [file, setFile] = useState();
//   const [caption, setCaption] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('caption', caption);
//       console.log(formData);
//       console.log(formData.get('file'));
//       const result = await axios.post('/posts', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           name="file"
//           id="file"
//           placeholder="Upload file"
//           accept="image/videos/*"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         <input
//           type="text"
//           placeholder="enter caption"
//           onChange={(e) => setCaption(e.target.value)}
//         />
//         <button type="submit" value={'submit'}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UploadFile;

// import { useState } from 'react';
// // import { getSignedUrl, uploadFileToSignedUrl } from '../api/fileUpload';

// const UploadFile = () => {
//   const [fileLink, setFileLink] = useState('');
//   const url = '/posts';
//   const onFileSelect = (e) => {
//     const file = e.target.files[0];

//     const content_type = file.type;

//     const key = `test/image/${file.name}`;

//     getSignedUrl({ key, content_type, url }).then((response) => {
//       console.log(response);

//       uploadFileToSignedUrl(response.data.signedUrl, file, content_type, null, () => {
//         setFileLink(response.data.fileLink);
//       });
//     });
//   };
//   return (
//     <div>
//       <h1>Upload file</h1>

//       <img src={fileLink} />

//       <input type="file" accept="*" onChange={onFileSelect} />
//     </div>
//   );
// };

// export default UploadFile;

import React from 'react';

const UploadFile = () => {
  return <div>UploadFile</div>;
};

export default UploadFile;
