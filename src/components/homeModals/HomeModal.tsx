import React, { useState } from 'react';
import Modal from '../Modal';
import Search from '../Search';
import ProfileIcon from '../../assets/ProfileIcon.svg';
import { ModalProps } from '../../constants/constants';

const HomeModal: React.FC<ModalProps> = (props) => {
  const [isSelected, setIsSelected] = useState('');
  const { isMobile } = props;

  const handleSelectButton = (value: string) => {
    setIsSelected(value);
  };

  const handleSearchChange = (e) => {
    console.log('search');
  };

  const UserData = [
    {
      image: ProfileIcon,
      user_id: 'organic__al.wg',
      identity: 'Alumini at Lovely Professional University',
    },
    {
      image: ProfileIcon,
      user_id: 'organic__al.wg',
      identity: 'Alumini at Lovely Professional University',
    },
    {
      image: ProfileIcon,
      user_id: 'organic__al.wg',
      identity: 'Alumini at Lovely Professional University',
    },
    {
      image: ProfileIcon,
      user_id: 'organic__al.wg',
      identity: 'Alumini at Lovely Professional University',
    },
  ];

  const buttonOptions = ['Users', 'Communities'];

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
        <div
          className={`flex mt-1 md:mt-3 justify-between font-montserrat gap-3 w-[100%] ${
            isMobile ? 'flex-col' : 'flex-row'
          }`}
        >
          <aside
            className={`${
              isMobile ? 'w-[100%] flex gap-3' : 'w-[30%] border-r-2 pr-4 flex flex-col gap-3'
            }`}
          >
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
          <div
            className={`${
              isMobile ? 'w-[100%] flex flex-col gap-4 ' : 'w-[75%] flex flex-col gap-4 px-4'
            } mt-3 md:mt-0`}
          >
            {UserData.map((item) => (
              <div className="flex gap-3">
                <img
                  src={item.image}
                  alt="Profile_Icon"
                  className="rounded-full w-[2rem] h-[2rem] mt-3 md:mt-1.5"
                />
                <div className="flex flex-col justify-between ...">
                  <h4 className="text-gray-800 leading-6 font-semibold text-sm">{item.user_id}</h4>
                  <p className="text-neutral-400 text-xs leading-5">{item.identity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HomeModal;
