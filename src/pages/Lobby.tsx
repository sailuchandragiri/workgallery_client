import React, { useState } from 'react';
import Search from '../components/Search';
import Grid from '../assets/Grid.svg';
import FlexOn from '../assets/FlexOn.svg';
import GridOn from '../assets/GridOn.svg';
import Flex from '../assets/Flex.svg';
import LobbyCard from '../components/LobbyCard';
import LobbyCardImg from '../assets/LobbyCardImg.svg';
import DragAndDrop from '../components/DradAndDrop';
import Plus from '../assets/Plus.svg';
import GithubDisabled from '../assets/GihubDisabled.svg';
import GithubBlue from '../assets/Githubblue.svg';
import FigmaDisable from '../assets/disableFigma.svg';
import InstagramBlue from '../assets/InstagramBlue.svg';
import BehanceBlue from '../assets/Behanceblue.svg';
import LinkedInBlue from '../assets/LinkedBlue.svg';
import Figma from '../assets/figma.svg';
import LinkedIn from '../assets/linkedin.svg';
import InstagramDisabled from '../assets/InstagramDisabled.svg';
import Behance from '../assets/behance.svg';
import AddWorkSpaceModal from '../components/lobbyModals/AddWorkSpaceModal';
import CreateGroupModal from '../components/lobbyModals/CreateGroupModal';
import AddGroupModal from '../components/lobbyModals/AddGroupModal';

interface MenuItem {
  label: string;
  icon?: string;
  activeIcon?: string;
}

interface CollapsibleSection {
  label: string;
  items: MenuItem[];
}

const Lobby = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gridOn, setGridOn] = useState(true);
  const [activeSections, setActiveSections] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [enableWorkSpaceModal, setEnableWorkSpaceModal] = useState(false);
  const [enableGroupModal, setEnableGroupModal] = useState(false);

  console.log(searchTerm);

  const collapsibleSections: CollapsibleSection[] = [
    {
      label: 'Networks',
      items: [
        { label: 'Github', icon: GithubDisabled, activeIcon: GithubBlue },
        { label: 'Figma', icon: FigmaDisable, activeIcon: Figma },
        { label: 'LinkedIn', icon: LinkedIn, activeIcon: LinkedInBlue },
        { label: 'Instagram', icon: InstagramDisabled, activeIcon: InstagramBlue },
        { label: 'Behance', icon: Behance, activeIcon: BehanceBlue },
      ],
    },
    {
      label: 'Groups',
      items: [
        { label: 'Academics' },
        { label: 'Contests' },
        { label: 'Hackathon' },
        { label: 'Trends' },
      ],
    },
  ];

  const toggleSection = (sectionLabel: string) => {
    setActiveItem(null);

    setActiveSections((prev) => {
      if (prev.includes(sectionLabel)) {
        return prev.filter((section) => section !== sectionLabel);
      } else {
        return [...prev, sectionLabel];
      }
    });
  };

  const toggleItem = (itemLabel: string) => {
    setActiveItem((prev) => (prev === itemLabel ? null : itemLabel));
  };

  const handleChangeGrid = (value: boolean) => {
    setGridOn(value);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  const handleChangeWorkSpaceModal = () => {
    setEnableWorkSpaceModal(false);
  };

  const handleChangeGroupModal = () => {
    setEnableGroupModal(false);
  };

  const LobbyImages = [
    LobbyCardImg,
    LobbyCardImg,
    LobbyCardImg,
    LobbyCardImg,
    LobbyCardImg,
    LobbyCardImg,
    LobbyCardImg,
    LobbyCardImg,
  ];

  return (
    <>
      {enableGroupModal && (
        <CreateGroupModal
          groupModalStatus={enableGroupModal}
          onChildButtonClick={handleChangeGroupModal}
          isGroup={false}
        />
      )}
      {/* {enableGroupModal && (
        <AddGroupModal
          groupModalStatus={enableGroupModal}
          onChildButtonClick={handleChangeGroupModal}
          isGroup={true}
        />
      )} */}
      {enableWorkSpaceModal && (
        <AddWorkSpaceModal
          groupModalStatus={enableWorkSpaceModal}
          onChildButtonClick={handleChangeWorkSpaceModal}
          isGroup={false}
        />
      )}
      <section className="grid-container font-montserrat bg-zinc-100 px-6 py-6">
        <aside className="border-r-2 p-4">
          <div className="bg-white p-4 rounded-2xl h-[100%] flex flex-col ...">
            <DragAndDrop
              buttonLabel="Upload or Drag and Drop"
              buttonColor="bg-blue-600"
              dashedBorderColor="border-dashed border-blue-500"
              borderRadius="rounded-2xl"
            />
            <nav className="w-full bg-white mt-[1rem] font-montserrat overflow-y-auto">
              {collapsibleSections.map((section) => (
                <div key={section.label}>
                  <div
                    className="cursor-pointer text-sm font-semibold p-4 flex justify-between ..."
                    onClick={() => toggleSection(section.label)}
                  >
                    <p className="text-neutral-600"> {section.label}</p>
                    <img onClick={() => setEnableGroupModal(true)} src={Plus} alt="Plus_Icon" />
                  </div>
                  {activeSections.includes(section.label) && (
                    <div>
                      {section.items.map((item) => (
                        <div
                          key={item.label}
                          className={`block p-2 pl-8 flex font-semibold  ${
                            activeItem === item.label
                              ? 'pl-14 text-lg text-blue-600'
                              : 'text-xs text-gray-500'
                          }`}
                          onClick={() => toggleItem(item.label)}
                        >
                          {item?.icon && (
                            <img
                              src={activeItem === item.label ? item.activeIcon : item.icon}
                              alt="icons"
                              className="mr-3"
                            />
                          )}
                          {item.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>
        <div className="pl-4 flex flex-col gap-8 justify-between ...">
          {LobbyImages.length > 0 ? (
            <>
              <div className="flex justify-between ...">
                <div className="w-[60%]">
                  <Search
                    placeholder="Search files..."
                    onChange={handleSearchChange}
                    containerStyle={{
                      backgroundColor: 'white',
                      borderRadius: '4rem',
                      border: 'none',
                      width: '',
                    }}
                    inputStyle={{
                      border: 'none',
                      fontFamily: 'montserrat',
                      fontWeight: '600',
                      fontSize: '14px',
                      outline: 'none',
                      color: '#9CA3AF',
                      width: '60%',
                      marginRight: '30%',
                    }}
                  />
                </div>
                <div className="flex justify-between pt-4 gap-3 ...">
                  <div>
                    <img
                      onClick={() => handleChangeGrid(true)}
                      src={gridOn ? GridOn : Grid}
                      alt="Grid_Icon"
                    />
                  </div>
                  <div>
                    <img
                      onClick={() => handleChangeGrid(false)}
                      src={gridOn ? Flex : FlexOn}
                      alt="Flex_Icon"
                    />
                  </div>
                </div>
              </div>
              <div className={gridOn ? 'flex flex-wrap gap-6' : 'flex flex-col gap-6'}>
                {LobbyImages?.map((item) => (
                  <div>
                    <LobbyCard
                      imageSrc={item}
                      altText="Kitten"
                      content="Created UI designs for smart home appliances Created UI designs for smart home appliances"
                      buttonText="Add to Gallary"
                      onClick={handleButtonClick}
                      style={{}}
                      status={gridOn}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="h-[83vh] flex flex-col justify-center gap-4 ...">
              <p className="text-center text-gray-500 text-base font-medium">
                Add workspace to link your files
              </p>
              <div className="flex justify-center ...">
                <button
                  onClick={() => setEnableWorkSpaceModal(true)}
                  className="px-4 py-2.5 text-sm rounded-xl leading-5 font-semibold bg-blue-600 text-white"
                >
                  + Add Workspace
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Lobby;
