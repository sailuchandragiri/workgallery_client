import React, { useState } from 'react';
import Modal from '../Modal';
import PlusIcon from '../../assets/Plus.svg';
import ProfileImg from '../../assets/ProfilePhoto.svg';

interface ParentComponentProps {
  groupModalStatus: boolean;
  onRequestClose: () => void;
  isGroup: boolean;
  width: string;
  isMobile: boolean;
  isMenu: boolean;
}

const EditProfileModal: React.FC<ParentComponentProps> = ({
  groupModalStatus,
  onRequestClose,
  isGroup,
  width,
  isMobile,
  isMenu,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Modal
      status={groupModalStatus}
      onRequestClose={onRequestClose}
      isGroup={isGroup}
      width={width}
      isMobile={isMobile}
      isMenu={isMenu}
    >
      <div className="p-3 pl-4 flex font-montserrat flex-col justify-between gap-4 ...">
        <h3 className="text-lg font-semibold text-gray-900">Edit Profile</h3>
        <div className="flex justify-between">
          <img src={ProfileImg} alt="Profile_photo" className="w-[6rem] h-[6rem]" />
          <button className="text-sm text-gray-500 border border-gray-400 h-[3rem] px-10 rounded-full mt-5 mr-3">
            Change profile photo
          </button>
        </div>
        <label className="leading-8 text-gray-500 text-sm font-medium mt-2">Name</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-4 pl-6 w-full text-center text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <label className="leading-8 text-gray-500 text-sm font-medium ">Skills and Tools</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-4 pl-6 w-full text-center text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <label className="leading-8 text-gray-500 text-sm font-medium ">About</label>
        <textarea
          //   value={inputValue}
          //   onChange={handleInputChange}
          className="p-4 pl-6 w-full h-44 text-left text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <label className="leading-8 text-gray-500 text-sm font-medium ">Location</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-4 pl-6 w-full text-center text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <div className="flex justify-between ...">
          <label className="leading-8 text-gray-500 text-sm font-medium ">Languages</label>
          <img src={PlusIcon} alt="Icon" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-4 pl-6 w-full text-center text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />
        <div className="flex justify-between ...">
          <label className="leading-8 text-gray-500 text-sm font-medium ">Links</label>
          <img src={PlusIcon} alt="Icon" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="p-4 pl-6 w-full text-center text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
          placeholder=""
        />

        <div className="flex justify-end">
          <button
            className={` px-6 py-2 bg-blue-600 text-white rounded-md ${
              inputValue ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            disabled={!inputValue}
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
