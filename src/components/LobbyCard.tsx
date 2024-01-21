import React, { CSSProperties, ReactNode, useState } from 'react';
import PlusIcon from '../assets/Plus.svg';
import CardModal from './lobbyModals/CardModal';

interface CardProps {
  imageSrc: string;
  altText: string;
  content: ReactNode;
  buttonText: string;
  onClick: () => void;
  style?: CSSProperties;
  status: boolean;
}

const LobbyCard: React.FC<CardProps> = ({
  imageSrc,
  altText,
  content,
  buttonText,
  style = {},
  status,
}) => {
  const [groupModal, setGroupModal] = useState(false);

  const handleGroupModal = () => {
    setGroupModal((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleGroupModal}>
        {groupModal && (
          <CardModal
            groupModalStatus={groupModal}
            onChildButtonClick={handleGroupModal}
            imgUrl={imageSrc}
            textContent={content}
            isGroup={false}
            isWidth="30%"
            isMobile={false}
          />
        )}
      </div>
      <div
        className={`border font-normal gap-3 font-montserrat rounded-2xl bg-white pt-4 pl-4 pr-4  border-lobby_card_border 
          ${
            status
              ? 'pb-6 flex flex-col md:w-[14rem] md:h-[20rem] justify-between ...'
              : ' pb-4 flex flex-row  justify-between ...'
          }
        `}
        style={style}
        onClick={handleGroupModal}
      >
        <img className="" src={imageSrc} alt={altText} />
        <div className={status ? '' : 'flex flex-col justify-center w-[40%] ...'}>
          <p className="text-zinc-900 text-sm ">{content}</p>
        </div>
        <div className={status ? 'w-[100%]' : 'w-[20%] flex flex-col justify-center ...'}>
          <button className="w-[100%]  py-3 gap-0.5 bg-white border text-xs border-slate-500 text-black rounded-full font-medium md:font-semibold flex items-center justify-center ">
            <img src={PlusIcon} alt="Plus_Icon" className="mr-[1%]" />
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default LobbyCard;
