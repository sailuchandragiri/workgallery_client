import React, { useState } from 'react';
import Modal from '../Modal';
import SearchIcon from '../../assets/SearchIcon.svg';
import Figma from '../../assets/figma.svg';
import { ModalProps } from '../../constants/constants';

const AddWorkSpaceModal: React.FC<ModalProps> = (props) => {
  const [selectSearch, setSelectSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Modal {...props}>
      <div className="p-4 flex font-montserrat flex-col  justify-between gap-4 ...">
        <h3 className="text-lg font-semibold leading-8 text-gray-900">Add a network</h3>
        {selectSearch ? (
          <>
            <div className="h-[22rem] flex flex-col gap-3 ...">
              <p
                onClick={() => setSelectSearch(false)}
                className="text-sm text-gray-500 mb-4 cursor-pointer"
              >
                &#10229; Back
              </p>
              <p className="flex text-sm text-gray-500 gap-3 leading-5">
                <img src={Figma} alt="icon" />
                Past your figma URL
              </p>
              <div className="flex gap-3 mt-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="p-4 pl-6 w-full text-sm font-semibold leading-5 bg-neutral-100 rounded-md focus:outline-none "
                  placeholder="paste here"
                />

                <button
                  className={` px-4 bg-blue-600 text-white rounded-md ${
                    inputValue ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                  }`}
                  disabled={!inputValue}
                >
                  Add
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-2 p-3 border-b border-gray-300">
              <img src={SearchIcon} alt="Search" className="mt-0.2" />
              <input placeholder="Browse networks" className="focus:outline-none text-sm" />
            </div>
            <div className="h-[18rem]">
              <p className="flex gap-3 cursor-pointer" onClick={() => setSelectSearch(true)}>
                <img src={Figma} alt="Figma" /> Figma
              </p>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default AddWorkSpaceModal;
