import React, { useState } from 'react';
import Modal from '../Modal';

interface ParentComponentProps {
  groupModalStatus: boolean;
  onChildButtonClick: () => void;
  isGroup: boolean;
  isWidth: string;
  isMobile: boolean;
  isMenu: boolean;
}

const EditHeadingModal: React.FC<ParentComponentProps> = ({
  groupModalStatus,
  onChildButtonClick,
  isGroup,
  isWidth,
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
      onButtonClick={onChildButtonClick}
      isGroup={isGroup}
      isWidth={isWidth}
      isMobile={isMobile}
      isMenu={isMenu}
    >
      <div className="p-3 pl-4 flex font-montserrat flex-col justify-between gap-4 ...">
        <h3 className="text-lg font-semibold text-gray-900">Edit Heading</h3>
        <label className="leading-8 text-gray-500 text-sm font-medium mt-2">Heading</label>
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

export default EditHeadingModal;
