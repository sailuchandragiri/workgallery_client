import React, { useState } from 'react';
import Modal from '../Modal';
import GalleryMainImg from '../../assets/gallery/GalleryMainImg.svg';
import GalleryContentImg from '../../assets/gallery/GalleryContentImg.svg';
import GalleryPostImg from '../../assets/gallery/BlogPost.svg';
import VideoImg from '../../assets/gallery/VideoImg.svg';
import FollowImg from '../../assets/gallery/FollowImg.svg';

interface ParentComponentProps {
  groupModalStatus: boolean;
  onChildButtonClick: () => void;
  isGroup: boolean;
  isWidth: string;
  isMobile: boolean;
}

const GalleryPageModal: React.FC<ParentComponentProps> = ({
  groupModalStatus,
  onChildButtonClick,
  isGroup,
  isWidth,
  isMobile,
}) => {
  const buttonNames = ['Gallery', 'Networks', 'Extras'];
  const BlogImages = [
    GalleryPostImg,
    GalleryPostImg,
    GalleryPostImg,
    GalleryPostImg,
    GalleryPostImg,
    GalleryPostImg,
    GalleryPostImg,
  ];
  const followImages = [FollowImg, FollowImg, FollowImg, FollowImg, FollowImg, FollowImg];
  const [enableChangeFragment, setEnableChangeFragment] = useState(false);
  const [enableEditFragment, setEnableEditFragment] = useState(false);
  const [enableEditFragment_2, setEnableEditFragment_2] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex);
  };

  const handleEnableFragment = () => {
    setEnableChangeFragment(!enableChangeFragment);
  };

  const handleEnableEditFragment = () => {
    setEnableEditFragment(!enableEditFragment);
  };

  const handleEnableEditFragment_2 = () => {
    setEnableEditFragment_2(!enableEditFragment_2);
  };

  return (
    <Modal
      status={groupModalStatus}
      onButtonClick={onChildButtonClick}
      isGroup={isGroup}
      isWidth={isWidth}
      isMobile={isMobile}
    >
      <div className="flex font-montserrat flex-col justify-between gap-11 ...">
        <div className="flex justify-between ...">
          <h2 className="uppercase text-black text-black leading-6 mt-3">Midhun surya</h2>
          <div className="flex gap-2 rounded-xl bg-neutral-800 p-2">
            {buttonNames.map((buttonName, index) => (
              <button
                key={index}
                className={`flex-1 p-2 text-sm font-semibold ${
                  activeButton === index
                    ? 'bg-orange-200 text-black rounded-lg p-2'
                    : 'bg-zinc-800 rounded-lg text-white p-2 border border-white'
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {buttonName}
              </button>
            ))}
          </div>
        </div>
        <div
          className="w-full h-screen bg-cover h-[49rem] flex justify-end p-4"
          style={{ backgroundImage: `url(${GalleryMainImg})` }}
        >
          {enableChangeFragment && (
            <div className="bg-stone-900 p-4 text-sm text-white h-14 rounded-lg mr-4 mt-2 pr-14">
              Change fragment
            </div>
          )}
          <div
            className="w-16 h-16 bg-white rounded-full flex flex-col gap-1 items-center justify-center"
            onClick={handleEnableFragment}
          >
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full mx-2"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </div>
        </div>
        <div className="w-[100%] flex">
          <div className="w-[50%]">
            <div></div>
            <div
              className="w-full h-screen bg-cover h-[44rem] flex justify-end p-4"
              style={{ backgroundImage: `url(${GalleryContentImg})` }}
            >
              {enableEditFragment && (
                <div className="bg-stone-900 text-sm text-white h-28 rounded-lg mr-4">
                  <p className="m-4 mr-16">Change fragment</p>
                  <hr className="bg-neutral-700" />
                  <p className="m-4">Edit</p>
                </div>
              )}
              <div
                className="w-16 h-16 bg-white rounded-full flex flex-col gap-1 items-center justify-center"
                onClick={handleEnableEditFragment}
              >
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full mx-2"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div></div>
            <div
              className="w-full h-screen bg-cover h-[44rem] flex justify-end p-4"
              style={{ backgroundImage: `url(${GalleryContentImg})` }}
            >
              {enableEditFragment_2 && (
                <div className="bg-stone-900 text-sm text-white h-28 rounded-lg mr-4">
                  <p className="m-4 mr-16">Change fragment</p>
                  <hr className="bg-neutral-700" />
                  <p className="m-4">Edit</p>
                </div>
              )}
              <div
                className="w-16 h-16 bg-white rounded-full flex flex-col gap-1 items-center justify-center"
                onClick={handleEnableEditFragment_2}
              >
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full mx-2"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 m-4">
          <h4 className="text-center text-neutral-700 text-sm tracking-widest leading-5">
            FEATURED
          </h4>
          <h2 className="text-4xl text-neutral-700 leading-14 font-medium text-center">
            Blog Posts
          </h2>
          <div className="flex flex-wrap gap-11 mt-8 justify-center">
            {BlogImages?.map((item) => (
              <div
                className="w-[24rem] h-[24rem] bg-cover flex justify-end p-4"
                style={{ backgroundImage: `url(${item})` }}
              >
                <div
                  className="w-16 h-16 bg-white rounded-full flex flex-col gap-1 items-center justify-center"
                  // onClick={handleEnableEditFragment}
                >
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full mx-2"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 m-4">
          <h4 className="text-center text-neutral-700 text-sm tracking-widest leading-5">
            FEATURED
          </h4>
          <h2 className="text-4xl text-neutral-700 leading-14 font-medium text-center">Video</h2>
          <div
            className="w-full h-screen bg-cover h-[42rem] flex justify-end p-4 mt-3"
            style={{ backgroundImage: `url(${VideoImg})` }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex flex-col gap-1 items-center justify-center">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full mx-2"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col gap-3 m-4">
          <h2 className="text-base text-neutral-700 leading-14 font-medium text-center">
            FOLLOW ME ON INSTAGRAM
          </h2>
          <div className=" flex gap-3 move-list-container my-[5rem]">
            {followImages.map((item) => (
              <div
                className=" bg-cover h-[18rem] w-[18rem]"
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GalleryPageModal;
