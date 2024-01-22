import React, { useState } from 'react';
import Modal from '../Modal';
import EnableEdit from '../../assets/editWhite.svg';
import DisableEdit from '../../assets/editBlack.svg';
import Edit from '../../assets/enableEdit.svg';
import EnablePreview from '../../assets/eyeWhite.svg';
import DisablePreview from '../../assets/eyeBlack.svg';
import FileIcon from '../../assets/fileIcon.svg';

interface ParentComponentProps {
  groupModalStatus: boolean;
  onChildButtonClick: () => void;
  imgUrl: string;
  textContent: string;
  isGroup: boolean;
  isWidth: string;
  isMobile: boolean;
}

const CardModal: React.FC<ParentComponentProps> = ({
  groupModalStatus,
  onChildButtonClick,
  imgUrl,
  textContent,
  isGroup,
  isWidth,
  isMobile,
}) => {
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <Modal
      status={groupModalStatus}
      onButtonClick={onChildButtonClick}
      isGroup={isGroup}
      isWidth={isWidth}
      isMobile={isMobile}
    >
      <div className="p-4 flex font-montserrat flex-col justify-between gap-6 ...">
        <div className="flex justify-center gap-2 md:gap-6 ...">
          <button
            onClick={() => setEnableEdit(false)}
            className={`text-sm px-5 py-3 rounded-full font-semibold flex justify-between gap-2 ...
              ${enableEdit ? '' : ' text-white bg-black '}`}
          >
            <img
              src={enableEdit ? DisablePreview : EnablePreview}
              alt="Preview"
              className="mt-0.5"
            />
            Preview
          </button>
          <button
            className={`py-3 px-6 md:px-10 text-sm font-semibold rounded-full flex justify-between gap-2 ... 
              ${enableEdit ? ' text-white bg-black ' : ''}`}
            onClick={() => setEnableEdit(true)}
          >
            <img src={enableEdit ? EnableEdit : DisableEdit} alt="Edit" />
            Edit
          </button>
        </div>
        <div className="flex flex-col justify-between gap-2 ...">
          {enableEdit && (
            <div className="flex justify-between ...">
              <p className="text-sm font-semibold text-zinc-800 leading-8">Fragment Image</p>
              <img src={Edit} alt="Edit_Icon" />
            </div>
          )}
          <div className="rounded-2xl h-[9rem] w-full bg-zinc-300">
            {!enableEdit && (
              <img src={imgUrl} alt="Image" className="object-cover h-full w-full rounded-2xl" />
            )}
          </div>
          {enableEdit && (
            <div className="flex justify-between ...">
              <p className="text-sm font-semibold text-zinc-800 leading-8">Fragment Text</p>
              <img src={Edit} alt="Edit_Icon" />
            </div>
          )}
          <p>
            <textarea
              disabled={!enableEdit}
              defaultValue={textContent}
              placeholder=""
              className="w-full h-[8rem] px-3 pb-3 text-zinc-800 text-sm font-medium focus-none focus:outline-none "
            />
          </p>
        </div>
        <div className={`${enableEdit ? 'flex justify-end ...' : ''}`}>
          {enableEdit ? (
            <button className="text-sm text-white font-semibold px-8 py-2.5 bg-blue-600 rounded-lg">
              Update
            </button>
          ) : (
            <div className="flex justify-between ...">
              <p className="flex text-sm font-medium text-zinc-800 w-[80%]">
                <img src={FileIcon} alt="File_Icon" className="mr-2" /> Public
              </p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
