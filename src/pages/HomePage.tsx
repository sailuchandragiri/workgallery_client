import { useState } from 'react';
import PlusIcon from '../assets/PlusIcon.svg';
import CommunityImage from '../assets/CommunityImage.svg';
import ProfileIcon from '../assets/ProfileIcon.svg';
import SaveIcon from '../assets/SaveIcon.svg';
import FavouriteIcon from '../assets/FavourateIcon.svg';
import Search from '../components/Search';
import NotificationIcon from '../assets/NotificationIcon.svg';
import HomeModal from '../components/homeModals/HomeModal';
import HomeProfile from '../assets/HomeProfile.svg';
import FilledSave from '../assets/FilledSave.svg';
import EyeIcon from '../assets/HomeEyeIcon.svg';
import GalleryWhiteIcon from '../assets/GalleryWhiteIcon.svg';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [requestSearchModel, setRequestSearchModel] = useState(false);
  const [isSelectedButton, setIsSelectedButton] = useState('');

  const handleSelectButton = (value: string) => {
    setIsSelectedButton(value);
  };

  const onRequestClose = () => {
    setRequestSearchModel((prev) => !prev);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const profileData = [
    {
      icon: FilledSave,
      name: 'Saved',
      count: 24,
    },
    {
      icon: EyeIcon,
      name: 'No of gallery views',
      count: 12,
    },
  ];

  const buttonOptions = ['Design', 'Web Development', 'Business', 'Technology', '+ Add'];

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
    <>
      <div onClick={onRequestClose}>
        {requestSearchModel ? (
          <HomeModal
            groupModalStatus={requestSearchModel}
            onChildButtonClick={onRequestClose}
            isGroup={false}
            isWidth="xl"
            isMobile={false}
          />
        ) : null}
      </div>
      <section className="grid-container-mobile md:grid-container-sections font-montserrat bg-zinc-100 px-2 md:px-6 py-6">
        <div className="hidden md:block">
          <aside className="h-[100%] flex flex-col gap-4 ... w-full overflow-y-auto">
            <div className="p-4 bg-white rounded-2xl flex flex-col gap-6 justify-between">
              <div className="flex gap-4 border-b-2 py-4">
                <img src={HomeProfile} alt="User_Profile" />
                <div className="flex flex-col justify-center ...">
                  <h4 className="text-base font-medium text-stone-800 leading-6">Midhun Surya</h4>
                  <p className="text-neutral-700 text-xs leading-6">UI UX Designer</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 ...">
                {profileData.map((item) => (
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <img src={item.icon} alt="Save_Icon" />
                      <p className="text-gray-600 text-sm leading-6">{item.name}</p>
                    </div>
                    <p className="text-base leading-5 text-neutral-700 mt-1">{item.count}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-600 rounded-full py-3 flex gap-2 font-medium justify-center text-white">
                <img src={GalleryWhiteIcon} alt="Gallery_Icon" />
                View My Gallery
              </div>
            </div>
            <div className="p-4 bg-white rounded-2xl flex flex-col gap-6 justify-between ...">
              <h4 className="leading-5 text-base text-neutral-400 font-medium my-2">
                Popular topics
              </h4>
              <div className="flex flex-col gap-3 ...">
                {buttonOptions?.map((item) => (
                  <button
                    onClick={() => handleSelectButton(item)}
                    className={`py-3 w-[100%] border border-gray-500 rounded-full text-base leading-5 ${
                      isSelectedButton === item
                        ? 'border border-blue-600 text-blue-600'
                        : 'text-gray-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
        <div className="mx-4 flex flex-col gap-4 justify-between ...">
          <div className="block md:hidden ">
            <div className="flex  overflow-x-auto space-x-3">
              Buttons
              {/* {buttonOptions?.map((item) => (
                <button
                  onClick={() => handleSelectButton(item)}
                  className={`w-[8rem] py-2 border border-gray-500 text-gray-600 rounded-full text-xs ${
                    isSelectedButton === item ? 'bg-gray-900 text-white' : ''
                  }`}
                >
                  {item}
                </button>
              ))} */}
            </div>
          </div>
          {data.map((item) => (
            <div className="rounded-2xl bg-white p-4 flex flex-col justify-between gap-2">
              <div className="flex justify-between ...">
                <div className="flex gap-4">
                  <img
                    src={item.profile_icon}
                    alt="Profile"
                    className="rounded-full h-[2rem] w-[2rem]"
                  />
                  <div className="flex flex-col justify-between ...">
                    <h4 className="text-gray-900 text-sm font-semibold leading-5">
                      {item.user_name}
                    </h4>
                    <p className="text-neutral-400 text-xs leading-4">{item.organization}</p>
                  </div>
                </div>
                <img src={SaveIcon} alt="Save_Icon" />
              </div>
              <img
                src={item.image}
                alt="Community_Image"
                className="rounded-2xl w-[100%] h-[8rem] md:h-[100%]"
              />
              <p className="text-sm text-gray-700">{item.content}</p>
              <div className="flex justify-between ...">
                <p className="text-gray-500 text-xs mt-1">24 mins ago</p>
                <img src={FavouriteIcon} alt="Favourite_Icon" />
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <aside className="h-[100%] flex flex-col gap-4 w-full overflow-y-auto">
            <div className="flex justify-between gap-4">
              <div className="w-[100%]" onClick={onRequestClose}>
                <Search
                  placeholder="Search school, university etc......"
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
                    fontWeight: '400',
                    fontSize: '12px',
                    outline: 'none',
                    color: '#4B5563',
                    width: '100%',
                    marginRight: '20%',
                  }}
                />
              </div>
              <img src={NotificationIcon} alt="notification_Icon" />
            </div>

            <div className="bg-white p-4 rounded-2xl flex flex-col gap-3">
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
                      className="rounded-full h-[2rem] w-[2rem] mt-1"
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
            <div className="bg-white p-4 rounded-2xl flex flex-col gap-3">
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
                      className="rounded-full w-[2rem] h-[2rem] mt-0.5"
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
      </section>
    </>
  );
};

export default HomePage;
