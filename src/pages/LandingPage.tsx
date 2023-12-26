import React, { useEffect, useState } from 'react';
import FriendsSinging from '../assets/FiendsSinging.svg';
import ShareFriends from '../assets/ShareFriends.svg';
import UploadToCloud from '../assets/UploadTCloud.png';
import HifiHand from '../assets/HifiHand.svg';
import GroupPortfolio from '../assets/GroupPortfolio.svg';
import Snippit from '../assets/Snippit.svg';
import Snippit_2 from '../assets/Snippit_2.svg';
import Loading from '../assets/Loading.svg';
import Send from '../assets/Send.svg';
import Convert from '../assets/Convert.svg';
import Format from '../assets/Frame.svg';
import Search from '../assets/Search.svg';
import NetworkSearch from '../assets/NetworkSearch.svg';
import NetworkGroup from '../assets/NetworkGroup.svg';
import JoinBG from '../assets/JoinBg.png';
import Instagram from '../assets/instagram.svg';
import Xlogo from '../assets/x-logo.svg';
import Connect from '../assets/Connect.svg';
import Desktop_12 from '../assets/Desktop_12.svg';
import NetworkBackground from '../assets/NetworkBackground.svg';
import Horizontal from '../assets/Horizontal.svg';
import Create from '../assets/Create.svg';
import Elevate from '../assets/Elevate.svg';
import Sprinkle from '../assets/Sparkle.svg';
import Designer from '../assets/Designer.svg';
import FemaleDesigner from '../assets/FemaleWebDesigner.svg';
import ColorPallet from '../assets/ColorPellet.svg';
import Rocket from '../assets/Rocket.svg';
import Stairs from '../assets/Stairs.svg';
import PinkSun from '../assets/PinkSun.svg';
import Chatbubble from '../assets/ChatBubble.svg';

const LandingPage = () => {
  const TitleImages = [Connect, Create, Elevate];
  const LeftTopImages = [FriendsSinging, Sprinkle, Rocket];
  const LeftBottomImages = [ShareFriends, Designer, Stairs];
  const RightTopImages = [UploadToCloud, FemaleDesigner, Chatbubble];
  const RightBottomImages = [HifiHand, ColorPallet, PinkSun];
  const colors = ['bg-[#026BF6]', 'bg-[#43943C]', 'bg-[#9E00FF]'];
  const borderColors = ['border-[#4285F4]', 'border-[#1EA713]', 'border-[#B042F4]'];
  const shadowColors = ['shadow-teal-400', 'shadow-green-500', 'shadow-purple-500'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % TitleImages.length);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [TitleImages.length]);

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50); // Adjust the interval as needed

    return () => clearInterval(rotateInterval);
  }, []);

  const imageStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.05s linear',
  };

  const radialGradientStyles = {
    borderRadius: '999px',
    opacity: 0.9421,
    backgroundImage:
      'radial-gradient(50% 50% at 50% 50%, rgba(2, 107, 246, 0.50) 0%, rgba(2, 107, 246, 0.00) 100%)',
    filter: 'blur(0.2px)',
  };
  return (
    <div className="bg-[#040102] pt-12 text-white text-2xl font-gilroy text-center md:text-left">
      <header className="mx-6 md:mx-20">workgallary</header>
      {/* Desktop and tab view of connect */}
      <div className="hidden md:block mx-6 md:mx-20">
        <div className="mt-14 flex justify-between ...">
          <div className="flex flex-col gap-48">
            <div className="w-[250px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ...">
                {LeftTopImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-[250px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ...">
                {LeftBottomImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center ...">
            <div className="relative overflow-hidden h-[90px] flex justify-center ...">
              {TitleImages.map((image, index) => (
                <img
                  key={index}
                  className={`absolute bottom-0 transition-transform duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-full'
                  }`}
                  src={image}
                  alt={`Transforming Image ${index + 1}`}
                />
              ))}
            </div>
            <div className="font-gilroy mt-10 text-base text-slate-gray text-center leading-8">
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br />
              Connect with Like-minded Creatives
            </div>
            <div className="flex justify-center mt-20">
              <div className="flex justify-center items-center">
                <button
                  className={`w-[530px] font-medium rounded-full shadow border-2 p-2 py-4 ${colors[currentImageIndex]} ${borderColors[currentImageIndex]} ${shadowColors[currentImageIndex]} text-white`}
                >
                  Join the waitlist
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-48 pt-28">
            <div className="w-[250px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ...">
                {RightTopImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-[150px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ...">
                {RightBottomImages.map((image, index) => (
                  <img
                    key={index}
                    className={`absolute bottom-0 transition-transform duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                    }`}
                    src={image}
                    alt={`Transforming Image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view of connect */}
      <div className="display-block md:hidden mx-6 md:mx-20">
        <div className="flex flex-col mt-10 text-white ">
          <div className="flex justify-between ...">
            <div className="mt-16">
              <img src={ShareFriends} alt="Share_with_friends" className="h-2xl w-2xl" />
            </div>
            <div>
              <img src={FriendsSinging} alt="Friends_Singing" className="h-2xl w-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-8 ...">
            <div className="flex justify-center ...">
              <img src={Connect} alt="connect" />
            </div>
            <div className="font-gilroy text-sm text-slate-300 text-center leading-6">
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br />
              Connect with Like-minded Creatives
            </div>
          </div>
          <div className="flex justify-between ...">
            <div>
              <img src={UploadToCloud} alt="Upload_to_cloud" className="h-2xl w-2xl" />
            </div>
            <div className="mt-16">
              <img src={HifiHand} alt="Hifi_hands" className="h-2xl w-2xl" />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex justify-center items-center">
              <button className=" w-[380px] py-1.5 px-6 text-sm font-gilroy shadow-sm shadow-teal-400 rounded-full border-2 border-btnborder bg-btnbackground py-6 px-12">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Old Portfolio screen */}
      <div
        className="mt-10 mx-6 md:mx-10 flex flex-col gap-2 md:gap-3 font-gilroy justify-center p-6 md:p-6 md:mt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Desktop_12})` }}
      >
        <div className="text-2xl md:text-6xl font-semibold text-center font-gilroy">
          Say <strong className="text-fontblue">Goodbye to the Old Style</strong> of <br /> Editing
          Portfolio
        </div>
        <div className="text-lg md:text-2xl text-slate-300 font-normal text-center">
          Choose from 1000s of themes based on your profession
        </div>
        <div className="flex justify-center ...">
          <div className="flex justify-between gap-4 rounded-xl md:rounded-2xl mt-8 md:mt-14 text-sm md:text-lg font-bold bg-btnbackground py-3 px-10 md:py-5 md:px-16 ... w-[380px] md:w-[500px]">
            <div>Feasible</div>
            <div>|</div>
            <div>Scalable</div>
            <div>|</div>
            <div>Optimized</div>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-20">
          <img src={GroupPortfolio} alt="Group_Portfolio" />
        </div>
      </div>

      {/* WorkAI screen for Mobile View */}
      <div
        className="mt-10  pt-28 block md:hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${NetworkBackground})` }}
      >
        <div className="flex gap-3 flex-col justify-center ...">
          <div className="text-2xl font-semibold text-center font-gilroy">
            <strong className="text-fontblue">Workgallery AI: </strong> Your Secret <br /> Weapon
            for a Portfolio that Wows
          </div>
          <div className="text-lg  text-slate-gray font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </div>
          <div className="mt-10 flex flex-col justify-center" style={radialGradientStyles}>
            <div className="flex justify-center ...">
              <img src={Snippit} alt="Wok_ai_1" />
            </div>
            <div className="flex justify-center ...">
              <img src={Loading} className="h-30 w-30" alt="Loading" />
            </div>
            <div className="flex justify-center ...">
              <img src={Snippit_2} alt="work_ai_2" />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-8  ...">
            <div className="flex flex-col justify-center gap-2">
              <div className="flex justify-center ...">
                <img src={Send} alt="Send" />
              </div>
              <div className="font-medium text-lg leading-4">Upload any type of documents</div>
              <div className="font-normal text-sm text-slate-gray">
                Effortlessly upload any document, any <br /> format, any time.
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex justify-center ...">
                <img src={Convert} alt="Send" />
              </div>
              <div className="font-medium text-lg leading-4">
                Convert documents into <br /> Snippets
              </div>
              <div className="font-normal text-sm text-slate-gray">
                Transform. Showcase. Thrive. Snippets to <br />
                make your portfolio journey effortless.
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex justify-center">
                <img src={Format} alt="Send" />
              </div>
              <div className="font-medium text-xl leading-8">
                Save time by overviewing <br /> the snippets with AI
              </div>
              <div className="font-normal text-sm text-slate-gray">
                Stand out in seconds. AI showcases your <br /> skills and experience in bite-sized{' '}
                <br /> snippets.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WorkAI screen for Desktop and Tab View */}
      <div
        className="mt-14  p-8 pt-44 hidden md:block font-gilroy bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${NetworkBackground})` }}
      >
        <div className="flex gap-6 flex-col justify-center ...">
          <div className="text-2xl md:text-6xl font-semibold text-center font-gilroy">
            <strong className="text-fontblue">Workgallery AI: </strong> Your Secret <br /> Weapon
            for a Portfolio that Wows
          </div>
          <div className="text-lg md:text-2xl text-slate-gray font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </div>
          <div className="mt-20 flex justify-center" style={radialGradientStyles}>
            <div>
              <img src={Snippit} alt="Wok_ai_1" />
            </div>
            <div className="flex flex-col justify-center ...">
              <img style={imageStyle} src={Loading} alt="Loading" />
            </div>
            <div>
              <img src={Snippit_2} alt="work_ai_2" />
            </div>
          </div>
          <div className="mt-16 flex justify-around gap-6 ...">
            <div className="flex flex-col gap-2">
              <div>
                <img src={Send} alt="Send" />
              </div>
              <div className="font-medium text-xl leading-8">
                Upload any type of <br /> documents
              </div>
              <div className="font-normal text-sm text-slate-gray">
                Effortlessly upload any document, any <br /> format, any time.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <img src={Convert} alt="Send" />
              </div>
              <div className="font-medium text-xl leading-8">
                Convert documents into <br /> Snippets
              </div>
              <div className="font-normal text-sm text-slate-gray">
                Transform. Showcase. Thrive. Snippets to <br />
                make your portfolio journey effortless.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <img src={Format} alt="Send" />
              </div>
              <div className="font-medium text-xl leading-8">
                Save time by overviewing <br /> the snippets with AI
              </div>
              <div className="font-normal text-sm text-slate-gray">
                Stand out in seconds. AI showcases your <br /> skills and experience in bite-sized{' '}
                <br /> snippets.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Network screen for Mobile view */}
      <div className="mt-14 mx-6 md:mx-10 block md:hidden">
        <div className="flex gap-8 flex-col justify-center ...">
          <div className="text-2xl font-semibold text-center font-gilroy">
            <strong className="text-fontblue">Workgallery AI: </strong> Your Secret <br /> Weapon
            for a Portfolio that Wows
          </div>
          <div className="text-lg  text-slate-300 font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </div>
          <div className="flex justify-center ...">
            <img src={NetworkSearch} alt="Network_search" />
          </div>
          <div className="flex justify-center ...">
            <img src={NetworkGroup} alt="Network_group" />
          </div>
        </div>
      </div>

      {/* Network screen for Desktop and Tab View */}
      <div className="mt-14 mx-6 md:mx-10 p-8 hidden md:block font-gilroy">
        <div className="flex gap-6 flex-col justify-center ...">
          <div className="text-6xl font-semibold text-center font-gilroy">
            <strong className="text-fontblue">Networking Just Got Better </strong> with <br /> The
            Work Gallery
          </div>
          <div className="text-2xl text-slate-300 font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </div>
          <div className="mt-32  flex justify-center ...">
            <img src={Search} alt="Search_icon" />
          </div>
        </div>
      </div>

      {/* Connect create screen */}
      <div
        className="mt-44 h-[580px] flex justify-center flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${JoinBG})` }}
      >
        <div className="text-center text-[30px] md:text-[56px] font-bold  font-gilroy">
          Connect Create Elevate
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center items-center">
            <button className="w-[380px] md:w-[530px] text-lg md:text-xl font-gilroy shadow-sm shadow-teal-400 rounded-full border-2 border-btnborder bg-btnbackground py-6 px-12">
              Join the waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Footer for desktop and tabview */}
      <footer className="hidden md:block bg-[#131313] py-16 px-32 font-gilroy">
        <div className="flex flex-col gap-6 justify-center ...">
          <div className="flex justify-center gap-14 ...">
            <div>
              <img src={Instagram} alt="Instagram" />
            </div>
            <div>
              <img src={Xlogo} alt="x-logo" />
            </div>
          </div>
          <div className="flex justify-center gap-10 leading-2 text-sm text-base text-gray-400 ...">
            <div>Blogs</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Careers</div>
            <div>Testimonials</div>
          </div>
          <div className="flex justify-center ...">
            <img src={Horizontal} alt="Horizontal" />
          </div>
          <div className="text-sm text-center text-base text-gray-500">Copyright Text</div>
        </div>
      </footer>

      {/* Footer for Mobile View */}
      <footer className="block md:hidden bg-[#131313] py-12 px-10 font-gilroy">
        <div className="flex flex-col gap-6 justify-center ...">
          <div className="flex justify-center gap-10 ...">
            <div>
              <img src={Instagram} alt="Instagram" />
            </div>
            <div>
              <img src={Xlogo} alt="x-logo" />
            </div>
          </div>
          <div className="flex justify-center flex-col gap-8 leading-2 text-sm text-base text-gray-400 ...">
            <div>Blogs</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Careers</div>
            <div>Testimonials</div>
          </div>
          <div className="flex justify-center ...">
            <img src={Horizontal} alt="Horizontal" />
          </div>
          <div className="text-sm text-center text-base text-gray-500">Copyright Text</div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
