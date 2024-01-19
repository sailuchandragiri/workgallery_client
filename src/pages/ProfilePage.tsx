import { useState } from 'react';
import EditIcon from '../assets/editBlack.svg';
import ProfilePhoto from '../assets/ProfilePhoto.svg';
import GalleryWhiteIcon from '../assets/GalleryWhiteIcon.svg';
import LocationIcon from '../assets/LocationIcon.svg';
import AnnouncementIcon from '../assets/AnnouncementIcon.svg';
import InstagramIcon from '../assets/InstagramDisabled.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import BehanceIcon from '../assets/behance.svg';
import ExperienceImage from '../assets/ExperienceImage.svg';
import DeleteIcon from '../assets/DeleteIcon.svg';
import EducationImage from '../assets/EducationImage.svg';
import CertificateImage from '../assets/CertificateImage.svg';
import EditHeadingModal from '../components/profileModals/EditHeadingModal';
import CreateCommunityModal from '../components/profileModals/CreateCommunityModal';

interface TabProps {
  label: string;
  content: React.ReactNode;
}
const ProfilePage: React.FC<{ tabs: TabProps[] }> = () => {
  const [editHeading, setEditHeading] = useState(false);
  const [createCommunity, setCreateCommunity] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const shadowStyle = {
    boxShadow: '0 -4px 6px -6px white',
  };
  const buttons = ['Brand Designer', 'Web Designer', 'Webflow Developer', 'Webflow Developer'];
  const LinkIcons = [InstagramIcon, LinkedInIcon, BehanceIcon];

  const handleEditHeading = () => {
    setEditHeading((prev) => !prev);
  };

  const handleCreateCommunity = () => {
    setCreateCommunity((prev) => !prev);
  };

  const ExtraData = [
    {
      title: 'Fund Raiser',
      sub_title: 'Vijay Social Welfare Society',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
    },
    {
      title: 'Fund Raiser',
      sub_title: 'Vijay Social Welfare Society',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
    },
    {
      title: 'Fund Raiser',
      sub_title: 'Vijay Social Welfare Society',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
    },
    {
      title: 'Fund Raiser',
      sub_title: 'Vijay Social Welfare Society',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
    },
  ];

  const CertificateData = [
    {
      image: CertificateImage,
      title: 'Certified ScrumMaster (CSM)',
      sub_title: 'Scrum Alliance',
      content: 'Issued - Dec 2023',
    },
    {
      image: CertificateImage,
      title: 'Certified ScrumMaster (CSM)',
      sub_title: 'Scrum Alliance',
      content: 'Issued - Dec 2023',
    },
    {
      image: CertificateImage,
      title: 'Certified ScrumMaster (CSM)',
      sub_title: 'Scrum Alliance',
      content: 'Issued - Dec 2023',
    },
    {
      image: CertificateImage,
      title: 'Certified ScrumMaster (CSM)',
      sub_title: 'Scrum Alliance',
      content: 'Issued - Dec 2023',
    },
    {
      image: CertificateImage,
      title: 'Certified ScrumMaster (CSM)',
      sub_title: 'Scrum Alliance',
      content: 'Issued - Dec 2023',
    },
  ];

  const EducationData = [
    {
      image: EducationImage,
      title: 'Lovely Professional University',
      sub_title: 'B.Design - Product and Industrial Design',
      content: '2021 - 2023',
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: EducationImage,
      title: 'Lovely Professional University',
      sub_title: 'B.Design - Product and Industrial Design',
      content: '2021 - 2023',
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: EducationImage,
      title: 'Lovely Professional University',
      sub_title: 'B.Design - Product and Industrial Design',
      content: '2021 - 2023',
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: EducationImage,
      title: 'Lovely Professional University',
      sub_title: 'B.Design - Product and Industrial Design',
      content: '2021 - 2023',
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: EducationImage,
      title: 'Lovely Professional University',
      sub_title: 'B.Design - Product and Industrial Design',
      content: '2021 - 2023',
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
  ];

  const ExperienceData = [
    {
      image: ExperienceImage,
      title: 'NxtWave Disruptive Technologies',
      sub_title: 'May 2021 - Aug 2021 · 4 mos',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: ExperienceImage,
      title: 'NxtWave Disruptive Technologies',
      sub_title: 'May 2021 - Aug 2021 · 4 mos',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: ExperienceImage,
      title: 'NxtWave Disruptive Technologies',
      sub_title: 'May 2021 - Aug 2021 · 4 mos',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: ExperienceImage,
      title: 'NxtWave Disruptive Technologies',
      sub_title: 'May 2021 - Aug 2021 · 4 mos',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
    {
      image: ExperienceImage,
      title: 'NxtWave Disruptive Technologies',
      sub_title: 'May 2021 - Aug 2021 · 4 mos',
      content:
        "Producing top-tier designs for NxtWave's academic and intensive programs, as well as developing webpages for all NxtWave products. Employing proactive problem-solving within the content pod by conducting user research and delivering optimal solutions for users.",
      buttons: [
        'Web Designer',
        'Web Developer',
        'Webflow Developer',
        'Figma',
        'Webflow',
        'Webflow Developer',
      ],
    },
  ];

  const tabs = [
    {
      label: 'Experience',
      content: (
        <div className="flex flex-col gap-8">
          {ExperienceData?.map((item) => (
            <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img src={item.image} alt="Experience_Image" />
                <div className="flex flex-col gap-4">
                  <h3 className="text-zinc-900 font-semibold text-sm md:text-xl leading-10">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-6">{item.sub_title}</p>
                  <p className="text-gray-600 text-sm leading-6">{item.content}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-600 text-sm leading-6">Skills</h4>
                <div className="flex flex-wrap gap-4">
                  {item?.buttons?.map((button) => (
                    <button className="bg-gray-100 rounded-full text-xs md:text-sm leading-4 px-3 py-1.5">
                      {button}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end ">
                <div className="flex gap-4">
                  <img src={EditIcon} alt="Edit_Icon" />
                  <img src={DeleteIcon} alt="Delete-icon" />
                  <div className="flex justify-between ...">
                    <p className="flex text-sm font-medium text-zinc-800 w-[80%] mr-4 mt-1">
                      Public
                    </p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px]  md:after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Education',
      content: (
        <div className="flex flex-col gap-8">
          {EducationData?.map((item) => (
            <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img src={item.image} alt="Experience_Image" />
                <div className="flex flex-col gap-4">
                  <h3 className="text-zinc-900 font-semibold text-xl leading-10">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-6">{item.sub_title}</p>
                  <p className="text-gray-600 text-sm leading-6">{item.content}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-gray-600 text-sm leading-6">Skills</h4>
                <div className="flex flex-wrap gap-4">
                  {item?.buttons?.map((button) => (
                    <button className="bg-gray-100 rounded-full text-sm leading-4 px-3 py-1.5">
                      {button}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end ">
                <div className="flex gap-4">
                  <img src={EditIcon} alt="Edit_Icon" />
                  <img src={DeleteIcon} alt="Delete-icon" />
                  <div className="flex justify-between ...">
                    <p className="flex text-sm font-medium text-zinc-800 w-[80%] mr-4 mt-1">
                      Public
                    </p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px]  md:after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Achievement',
      content: (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {ExtraData?.map((item) => (
            <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-6">
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-zinc-900 font-semibold text-xl leading-10">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{item.sub_title}</p>
                <p className="text-gray-600 text-sm leading-6">{item.content}</p>
              </div>
              <div className="flex justify-end ">
                <div className="flex gap-4">
                  <img src={EditIcon} alt="Edit_Icon" />
                  <img src={DeleteIcon} alt="Delete-icon" />
                  <div className="flex justify-between ...">
                    <p className="flex text-sm font-medium text-zinc-800 w-[80%] mr-4 mt-1">
                      Public
                    </p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px]  md:after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Certificates',
      content: (
        <div className="flex flex-col gap-8">
          {CertificateData?.map((item) => (
            <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <img src={item.image} alt="Experience_Image" />
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="text-zinc-900 font-semibold text-xl leading-10">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-6">{item.sub_title}</p>
                  <p className="text-gray-600 text-sm leading-6">{item.content}</p>
                </div>
              </div>
              <div className="flex justify-end ">
                <div className="flex gap-4">
                  <img src={EditIcon} alt="Edit_Icon" />
                  <img src={DeleteIcon} alt="Delete-icon" />
                  <div className="flex justify-between ...">
                    <p className="flex text-sm font-medium text-zinc-800 w-[80%] mr-4 mt-1">
                      Public
                    </p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px]  md:after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      label: 'Extras',
      content: (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {ExtraData?.map((item) => (
            <div className="p-6 border border-gray-200 rounded-xl flex flex-col gap-6">
              <div className="flex flex-col justify-center gap-4">
                <h3 className="text-zinc-900 font-semibold text-xl leading-10">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{item.sub_title}</p>
                <p className="text-gray-600 text-sm leading-6">{item.content}</p>
              </div>
              <div className="flex justify-end ">
                <div className="flex gap-4">
                  <img src={EditIcon} alt="Edit_Icon" />
                  <img src={DeleteIcon} alt="Delete-icon" />
                  <div className="flex justify-between ...">
                    <p className="flex text-sm font-medium text-zinc-800 w-[80%] mr-4 mt-1">
                      Public
                    </p>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[10px]  md:after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <div onClick={handleEditHeading}>
        {editHeading && (
          <EditHeadingModal
            groupModalStatus={editHeading}
            onChildButtonClick={handleEditHeading}
            isGroup={false}
            isWidth="xl"
            isMobile={false}
            isMenu={false}
          />
        )}
      </div>
      <div onClick={handleCreateCommunity}>
        {createCommunity && (
          <CreateCommunityModal
            groupModalStatus={createCommunity}
            onChildButtonClick={handleCreateCommunity}
            isGroup={false}
            isWidth="xl"
            isMobile={false}
            isMenu={false}
          />
        )}
      </div>
      <section className="flex flex-col md:flex-row gap-2  md:gap-4 w-[100%] font-montserrat py-8">
        <aside className="w-[100%] md:w-[35%] border rounded-xl">
          <div className=" bg-white px-6 py-9 rounded-2xl h-[100%] flex flex-col gap-4 ...">
            <div className="flex justify-end">
              <img src={EditIcon} alt="edit_icon" onClick={handleCreateCommunity} />
            </div>
            <img src={ProfilePhoto} alt="Profile_Photo" />
            <div className="flex justify-center ... mt-[-36px]  ">
              <button
                style={shadowStyle}
                className="bg-emerald-100 uppercase px-4 py-2 rounded-lg text-green-800 font-semibold leading-6 text-xs md:text-sm"
              >
                Designer
              </button>
            </div>
            <h2 className="text-sm md:text-3xl font-bold leading-10 text-center">Midhun Surya</h2>
            <div className="w-[100%] flex justify-center ...">
              <button className="w-[100%] flex justify-center gap-4 py-3 bg-gray-800 rounded-full font-semibold leading-6 text-sm md:text-base text-white ">
                <img src={GalleryWhiteIcon} alt="Gallery_Icon" /> View My Gallery
              </button>
            </div>
            <h3 className="uppercase text-xs text-gray-600 font-semibold">Skills and Tools</h3>
            <div className="flex flex-wrap gap-2">
              {buttons?.map((item) => (
                <button className="border border-gray-200 rounded-full px-3 py-1.5">{item}</button>
              ))}
            </div>
            <h3 className="uppercase text-xs text-gray-600 font-semibold">About</h3>
            <div className="flex flex-col gap-6 text-zinc-900 text-sm md:text-base leading-6">
              <p>Hello 👋🏼 I'm Midhun Surya!</p>
              <p>
                A passionate Brand and Web designer on a mission to turn your digital dreams into
                captivating realities. 🚀
              </p>
              <p>
                In today's fast-paced world, your online presence is your digital storefront, and
                I'm here to ensure it's a showstopper! 🌟
              </p>
              <p className="flex gap-2">
                <img src={LocationIcon} alt="Location_Icon" />
                Hyderabad, INDIA
              </p>
              <p className="flex gap-2">
                <img src={AnnouncementIcon} alt="Announcement_Icon" />
                Languages known - English
              </p>
            </div>
            <h3 className="uppercase text-xs text-gray-600 font-semibold">Links</h3>
            <div className="flex gap-3">
              {LinkIcons?.map((item) => <img src={item} alt="Link_Icon" />)}
            </div>
          </div>
        </aside>
        <div className="w-[100%] md:w-[65%] md:pl-4 md:ml-8 mt-4 md:mt-0 flex flex-col gap-8 ...">
          <div className="w-[100%] flex justify-between">
            <h2 className="w-[75%] text-xl md:text-4xl pl-3 md:pl-0 font-bold leading-12 text-zinc-900">
              Creative thinker with a passion for designing
            </h2>
            <div className="flex flex-start flex-col">
              <img className="mt-6" src={EditIcon} alt="Edit_Icon" onClick={handleEditHeading} />
            </div>
          </div>
          <div className="p-4 w-[100%]">
            <div className="flex w-[100%] overflow-x-scroll">
              {tabs?.map((tab, index) => (
                <div
                  className={` cursor-pointer font-medium text-sm md:text-base border-b-2 border-gray-400 px-10 leading-5 py-3 ${
                    activeTab === index
                      ? 'text-zinc-900 border-b-2 border-zinc-900'
                      : 'text-gray-400'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <div className="w-[100%] flex flex-col gap-8 py-4">
              <div className="w-[100%] text-sm zinc-500 bg-stone-50 text-zinc-400 border-2 border-dashed text-center py-4 rounded-full leading-6">
                + Add Education
              </div>
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
