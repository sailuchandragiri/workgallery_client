import React from 'react';
import Modal from '../Modal';
import CommunityImage from '../../assets/CommunityImage.svg';
import ProfileIcon from '../../assets/ProfileIcon.svg';

interface ParentComponentProps {
  groupModalStatus: boolean;
  onChildButtonClick: () => void;
  isGroup: boolean;
  isWidth: string;
  isMobile: boolean;
  isMenu: boolean;
}

const HomeMenuModal: React.FC<ParentComponentProps> = ({
  groupModalStatus,
  onChildButtonClick,
  isGroup,
  isWidth,
  isMobile,
  isMenu,
}) => {
  const data = [
    {
      profile_icon: ProfileIcon,
      user_id: 'organic__al.wg',
      user_name: 'Midhun Surya',
      organization: 'Working at NxtWave',
      image: CommunityImage,
      content:
        'Created UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliances',
      community: 'Lovely Professional University',
      suggestion: 'Lovely Professional University',
    },
    {
      profile_icon: ProfileIcon,
      user_id: 'organic__al.wg',
      user_name: 'Midhun Surya',
      organization: 'Working at NxtWave',
      image: CommunityImage,
      content:
        'Created UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliances',
      community: 'Lovely Professional University',
      suggestion: 'Lovely Professional University',
    },
    {
      profile_icon: ProfileIcon,
      user_id: 'organic__al.wg',
      user_name: 'Midhun Surya',
      organization: 'Working at NxtWave',
      image: CommunityImage,
      content:
        'Created UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliances',
      community: 'Lovely Professional University',
      suggestion: 'Lovely Professional University',
    },
    {
      profile_icon: ProfileIcon,
      user_id: 'organic__al.wg',
      user_name: 'Midhun Surya',
      organization: 'Working at NxtWave',
      image: CommunityImage,
      content:
        'Created UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliancesCreated UI designs for smart home appliances',
      community: 'Lovely Professional University',
      suggestion: 'Lovely Professional University',
    },
  ];

  return (
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
          <div className="bg-white p-2 rounded-2xl flex flex-col gap-3">
            <div className="flex justify-between mb-2">
              <h3 className="text-neutral-400 text-sm font-medium leading-5">Recently Joined</h3>
              <h4 className="text-zinc-900 text-xs leading-4 font-medium">See All</h4>
            </div>
            <div className="flex flex-col gap-3">
              {data?.map((item) => (
                <div className="flex gap-3">
                  <img
                    src={item.profile_icon}
                    alt="icon"
                    className="rounded-full h-[2rem] w-[2rem] mt-4"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-sm leading-5 font-medium text-gray-800 mt-1">
                      {item.user_id}
                    </h4>
                    <p className="text-neutral-400 text-xs leading-5">From {item.community}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-2 rounded-2xl flex flex-col gap-3">
            <div className="flex justify-between mb-2">
              <h3 className="text-neutral-400 text-sm font-medium leading-5">Communities</h3>
              <h4 className="text-zinc-900 text-xs leading-4 font-medium">See All</h4>
            </div>
            <div className="flex flex-col gap-3">
              {data?.map((item) => (
                <div className="flex gap-3">
                  <img
                    src={item.profile_icon}
                    alt="icon"
                    className="rounded-full w-[2rem] h-[2rem] mt-2"
                  />
                  <p className="text-sm leading-5 font-medium text-gray-800 mt-1">
                    {item.suggestion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </Modal>
  );
};

export default HomeMenuModal;
