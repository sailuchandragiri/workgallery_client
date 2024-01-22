import React, { useState } from 'react';
import Modal from '../Modal';
import Search from '../Search';
import LobbyCardImg from '../../assets/LobbyCardImg.svg';

import { ModalProps } from '../../constants/constants';

const AddGroupModal: React.FC<ModalProps> = (props) => {
  const [isSelected, setIsSelected] = useState('');

  const handleSelectButton = (value: string) => {
    setIsSelected(value);
  };

  const handleSearchChange = (e) => {
    console.log('search');
  };

  const LobbyImages = [LobbyCardImg, LobbyCardImg, LobbyCardImg, LobbyCardImg];

  const buttonOptions = ['GitHub', 'Figma', 'LinkedIn', 'Instagram', 'Behance'];

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Modal {...props}>
      <div className="p-2 pl-4 flex font-montserrat flex-col justify-between gap-4 ...">
        <Search
          placeholder="Search"
          onChange={handleSearchChange}
          containerStyle={{
            backgroundColor: 'white',
            width: '',
            borderBottom: '1px solid #D1D5DB',
          }}
          inputStyle={{
            border: 'none',
            fontFamily: 'montserrat',
            fontWeight: '500',
            fontSize: '14px',
            outline: 'none',
            color: '#9CA3AF',
            width: '377px',
            marginRight: '127px',
          }}
        />
        <div className="flex justify-between font-montserrat gap-3 w-[100%]">
          <aside className="w-[25%] border-r-2 p-4 flex flex-col gap-3">
            {buttonOptions?.map((item) => (
              <button
                onClick={() => handleSelectButton(item)}
                className={`py-3 w-[100%] border border-gray-400 rounded-full text-xs font-semibold ${
                  isSelected === item ? 'bg-stone-900 text-white' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </aside>
          <div className="w-[75%] grid grid-cols-2 gap-4">
            {LobbyImages.map((item) => (
              <div
                className={`w-[100%] border font-normal gap-3 font-montserrat rounded-2xl bg-white pt-4 pl-4 pr-4  border-neutral-200 pb-4 flex flex-row flex-col justify-between ... `}
              >
                <div className="flex justify-end">
                  <input type="checkbox" />
                </div>
                <img className="" src={item} alt="Card_Image" />
                <div className="flex flex-col justify-center ...">
                  <p className="text-zinc-900 font-montserrat text-sm font-semibold">
                    Created UI designs for smart home appliancesCreated UI designs for smart home
                    appliances
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-8">
          <p className="text-gray-600 text-xs font-semibold mt-3">2 Fragment</p>
          <button
            className={` px-6 py-2 bg-blue-600 text-white rounded-md ${
              isChecked ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
            }`}
            disabled={!isChecked}
          >
            Add Fragments
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddGroupModal;
