import React, { useState } from 'react';
import Modal from '../Modal';
import Plus from '../../assets/Plus.svg';
import GithubDisabled from '../../assets/GihubDisabled.svg';
import GithubBlue from '../../assets/Githubblue.svg';
import FigmaDisable from '../../assets/disableFigma.svg';
import InstagramBlue from '../../assets/InstagramBlue.svg';
import BehanceBlue from '../../assets/Behanceblue.svg';
import LinkedInBlue from '../../assets/LinkedBlue.svg';
import Figma from '../../assets/figma.svg';
import LinkedIn from '../../assets/linkedin.svg';
import InstagramDisabled from '../../assets/InstagramDisabled.svg';
import Behance from '../../assets/behance.svg';

import DragAndDrop from '../DradAndDrop';
import CreateGroupModal from '../lobbyModals/CreateGroupModal';
import AddWorkSpaceModal from '../lobbyModals/AddWorkSpaceModal';

interface MenuItem {
  label: string;
  icon?: string;
  activeIcon?: string;
}

interface CollapsibleSection {
  label: string;
  items: MenuItem[];
}

interface ParentComponentProps {
  groupModalStatus: boolean;
  onChildButtonClick: () => void;
  isGroup: boolean;
  isWidth: string;
  isMobile: boolean;
  isMenu: boolean;
}

const LobbyMenuModal: React.FC<ParentComponentProps> = ({
  groupModalStatus,
  onChildButtonClick,
  isGroup,
  isWidth,
  isMobile,
  isMenu,
}) => {
  const [activeSections, setActiveSections] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [enableGroupModal, setEnableGroupModal] = useState(false);
  const [enableWorkSpaceModal, setEnableWorkSpaceModal] = useState(false);

  const toggleItem = (itemLabel: string) => {
    setActiveItem((prev) => (prev === itemLabel ? null : itemLabel));
  };

  const handleChangeWorkSpaceModal = () => {
    setEnableWorkSpaceModal(false);
  };

  const handleChangeGroupModal = () => {
    setEnableGroupModal(false);
  };

  const handleCloseGroupMobile = () => {
    setEnableGroupModal(true);
  };

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

  return (
    <>
      {enableGroupModal && (
        <CreateGroupModal
          groupModalStatus={enableGroupModal}
          onChildButtonClick={handleChangeGroupModal}
          isGroup={false}
          isWidth="xl"
          isMobile={false}
          isMenu={false}
        />
      )}
      {/* {enableGroupModal && (
        <AddGroupModal
          groupModalStatus={enableGroupModal}
          onChildButtonClick={handleChangeGroupModal}
          isGroup={true}
           isWidth="3xl"
           isMobile={false}
        />
      )} */}
      {enableWorkSpaceModal && (
        <AddWorkSpaceModal
          groupModalStatus={enableWorkSpaceModal}
          onChildButtonClick={handleChangeWorkSpaceModal}
          isGroup={false}
          isWidth="xl"
          isMobile={false}
        />
      )}
      <Modal
        status={groupModalStatus}
        onButtonClick={onChildButtonClick}
        isGroup={isGroup}
        isWidth={isWidth}
        isMobile={isMobile}
        isMenu={isMenu}
      >
        <div className=" p-2 flex font-montserrat flex-col justify-between gap-4 ...">
          <aside className="h-[100%] flex flex-col gap-4 w-full overflow-y-auto">
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
                      <img onClick={handleCloseGroupMobile} src={Plus} alt="Plus_Icon" />
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
        </div>
      </Modal>
    </>
  );
};

export default LobbyMenuModal;
