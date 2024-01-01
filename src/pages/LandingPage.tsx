import { useEffect, useState, useRef } from 'react';
import FriendsSinging from '../assets/FiendsSinging.svg';
import ShareFriends from '../assets/ShareFriends.svg';
import UploadToCloud from '../assets/UploadTCloud.png';
import HiHand from '../assets/HifiHand.svg';
import GroupPortfolio from '../assets/GroupPortfolio.svg';
import Snippet from '../assets/Snippit.svg';
import Snippet_2 from '../assets/Snippit_2.svg';
import Loading from '../assets/Loading.svg';
import Send from '../assets/Send.svg';
import Convert from '../assets/Convert.svg';
import Format from '../assets/Frame.svg';
import Search from '../assets/Search.svg';
import NetworkSearch from '../assets/NetworkSearch.svg';
import NetworkGroup from '../assets/NetworkGroup.svg';
import JoinBG from '../assets/JoinBg.png';
import Instagram from '../assets/instagram.svg';
import XLogo from '../assets/x-logo.svg';
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
import ChatBubble from '../assets/ChatBubble.svg';
import Line from '../assets/Horizontal_1.svg';
import axios from '../api/axios';

const LandingPage = () => {
  const waitListButtonRef = useRef(null);
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const TitleImages = [Connect, Create, Elevate];
  const LeftTopImages = [FriendsSinging, Sprinkle, Rocket];
  const LeftBottomImages = [ShareFriends, Designer, Stairs];
  const RightTopImages = [UploadToCloud, FemaleDesigner, ChatBubble];
  const RightBottomImages = [HiHand, ColorPallet, PinkSun];
  const colors = ['bg-[#026BF6]', 'bg-[#43943C]', 'bg-[#9E00FF]'];
  const borderColors = ['border-[#4285F4]', 'border-[#1EA713]', 'border-[#B042F4]'];
  const shadowColors = ['shadow-teal-400', 'shadow-green-500', 'shadow-purple-500'];
  const [buttonText, setButtonText] = useState('Join Wait List');
  const handleClick = () => {
    setIsButtonClicked((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/waitlist', JSON.stringify({ email }));
      console.log(response);
      if (response.status === 200) {
        setButtonText('You are added');
        setIsButtonClicked((prev) => !prev);
      }
    } catch (err) {
      console.log(e);
      setButtonText('Failed to add your');
    }
  };
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

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
  function scrollToWaitList() {
    if (waitListButtonRef.current) {
      /*
      // @ts-expect-error :progress Event need to fix */
      waitListButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  return (
    <div className="bg-[#040102] pt-12 text-white font-gilroy text-center md:text-left">
      {/* <h1 className="text-[4rem] font-normal text-center mx-6 md:mx-20">workgallery</h1> */}
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
            <div className="relative overflow-hidden h-[90px] flex justify-center ">
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
            <p className="font-gilroy mt-10 text-base text-subtitle font-normal text-center leading-8">
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br />
              Connect with Like-minded Creatives
            </p>
            <div className="flex justify-center items-center mt-20">
              <div className="flex justify-center items-center">
                {isButtonClicked ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex justify-center items-center flex-col "
                  >
                    <input
                      type="email"
                      placeholder="enter email"
                      onChange={(e) => {
                        if (e.target.value.length === 0) {
                          handleClick();
                        }
                        setEmail(e.target.value);
                      }}
                      value={email}
                      className="border-4 w-[530px]   text-center border-gray-700 rounded-full py-3 px-4 bg-transparent  font-thin focus:outline-none "
                    />
                    <button
                      className={`w-[530px]  text-center my-5 font-gilroy text-xl font-normal rounded-full shadow border-2 p-2 py-4 ${colors[currentImageIndex]} ${borderColors[currentImageIndex]} ${shadowColors[currentImageIndex]} text-white`}
                    >
                      Join Wait list
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={handleClick}
                    ref={waitListButtonRef}
                    className={`w-[530px] font-gilroy text-xl font-normal rounded-full shadow border-2 p-2 py-4 ${colors[currentImageIndex]} ${borderColors[currentImageIndex]} ${shadowColors[currentImageIndex]} text-white`}
                  >
                    {buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-48 pt-28">
            <div className="w-[250px] h-[150px] ">
              <div className="relative overflow-hidden h-[150px] flex justify-center ">
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
              <div className="relative overflow-hidden h-[150px] flex justify-center ">
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
        <div className="flex flex-col mt-10 gap-24 text-white ">
          <div className="flex justify-between ... px-14">
            <div className="w-[80px] h-[85px] mt-14 ">
              <div className="relative overflow-hidden h-[80px] flex justify-center ...">
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
            <div className="w-[80px] h-[85px] ">
              <div className="relative overflow-hidden h-[80px] flex justify-center ...">
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
          </div>
          <div className="flex flex-col gap-8 ...">
            <div className="relative overflow-hidden h-[90px] flex justify-center ">
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
            <div className="font-gilroy text-sm text-subtitle text-center leading-6">
              Craft Your Profile with WorkGallery, Elevate Your Presence, and <br />
              Connect with Like-minded Creatives
            </div>
          </div>
          <div className="flex justify-between px-14 ...">
            <div className="w-[80px] h-[85px] ">
              <div className="relative overflow-hidden h-[80px] flex justify-center ">
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
            <div className="w-[80px] h-[85px] mt-14">
              <div className="relative overflow-hidden h-[80px] flex justify-center ">
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
          <div className="flex justify-center mt-10">
            <div className="flex justify-center items-center">
              <button className=" w-[380px] py-3 px-6 text-sm font-gilroy shadow-sm shadow-teal-400 rounded-full border-2 border-accent bg-accent">
                Join the wait list
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
        <h3 className="text-lg md:text-4xl font-bold text-center font-gilroy">
          Say <strong className="text-accent">Goodbye to the Old Style</strong> of <br /> Editing
          Portfolio
        </h3>
        <p className="text-sm md:text-2xl text-pf_subtitle font-normal text-center">
          Choose from 1000s of themes based on your profession
        </p>
        <div className="flex justify-center ...">
          <div className="flex justify-between gap-4 rounded-xl md:rounded-2xl mt-8 md:mt-14 text-sm md:text-lg font-normal bg-accent py-3 px-10 md:py-5 md:px-16  w-[350px] md:w-[500px]">
            <p>Feasible</p>
            <p>|</p>
            <p>Scalable</p>
            <p>|</p>
            <p>Optimized</p>
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
          <h1 className="text-xl font-semibold text-center font-gilroy">
            <strong className="text-accent">Workgallery AI: </strong> Your Secret <br /> Weapon for
            a Portfolio that Wows
          </h1>
          <p className="text-sm  text-pf_subtitle font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </p>
          <div className="mt-10 flex flex-col justify-center" style={radialGradientStyles}>
            <div className="flex justify-center ...">
              <img src={Snippet} alt="Wok_ai_1" />
            </div>
            <div className="flex flex-col justify-center ...">
              <div className="flex justify-center ...">
                <img style={imageStyle} src={Loading} alt="Loading" className="h-26 w-26" />
              </div>
            </div>
            <div className="flex justify-center ...">
              <img src={Snippet_2} alt="work_ai_2" />
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-8  ...">
            <div className="flex flex-col justify-center gap-4">
              <div className="flex justify-center ...">
                <img src={Send} alt="Send" />
              </div>
              <div className="font-medium text-sm leading-4">Upload any type of documents</div>
              <p className="font-normal text-xs text-pf_subtitle">
                Effortlessly upload any document, any <br /> format, any time.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex justify-center ...">
                <img src={Convert} alt="Send" />
              </div>
              <p className="font-medium text-sm leading-2">
                Convert documents into <br /> Snippets
              </p>
              <p className="font-normal text-xs text-pf_subtitle">
                Transform. Showcase. Thrive. Snippets to <br />
                make your portfolio journey effortless.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <div className="flex justify-center">
                <img src={Format} alt="Send" />
              </div>
              <div className="font-medium text-sm leading-2">
                Save time by over viewing <br /> the snippets with AI
              </div>
              <p className="font-normal text-xs text-pf_subtitle">
                Stand out in seconds. AI showcases your <br /> skills and experience in bite-sized{' '}
                <br /> snippets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WorkAI screen for Desktop and Tab View */}
      <div
        className="mt-14  p-8 pt-44 hidden md:block font-gilroy bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${NetworkBackground})` }}
      >
        <div className="flex gap-6 flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center font-gilroy">
            <strong className="text-accent">Workgallery AI: </strong> Your Secret <br /> Weapon for
            a Portfolio that Wows
          </h1>
          <h2 className="text-lg md:text-xl text-pf_subtitle font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </h2>
          <div className="mt-20 flex justify-center" style={radialGradientStyles}>
            <div>
              <img src={Snippet} alt="Wok_ai_1" />
            </div>
            <div className="flex flex-col justify-center ...">
              <img style={imageStyle} src={Loading} alt="Loading" />
            </div>
            <div>
              <img src={Snippet_2} alt="work_ai_2" />
            </div>
          </div>
          <div className="mt-16 flex justify-around gap-6 ...">
            <div className="flex flex-col gap-2">
              <div>
                <img src={Send} alt="Send" />
              </div>
              <h3 className="font-normal text-xl leading-8">
                Upload any type of <br /> documents
              </h3>
              <p className="font-normal text-sm text-pf_subtitle">
                Effortlessly upload any document, any <br /> format, any time.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <img src={Convert} alt="Send" />
              </div>
              <h3 className="font-normal text-xl leading-8">
                Convert documents into <br /> Snippets
              </h3>
              <p className="font-normal text-sm text-pf_subtitle">
                Transform. Showcase. Thrive. Snippets to <br />
                make your portfolio journey effortless.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <img src={Format} alt="Send" />
              </div>
              <h2 className="font-normal text-xl leading-8">
                Save time by over viewing <br /> the snippets with AI
              </h2>
              <p className="font-normal text-sm text-pf_subtitle">
                Stand out in seconds. AI showcases your <br /> skills and experience in bite-sized{' '}
                <br /> snippets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Network screen for Mobile view */}
      <div className="mt-14 mx-6 md:mx-10 block md:hidden">
        <div className="flex gap-4 flex-col justify-center ...">
          <h3 className="text-xl font-semibold text-center font-gilroy">
            <strong className="text-accent">Workgallery AI: </strong> Your Secret <br /> Weapon for
            a Portfolio that Wows
          </h3>
          <p className="text-sm text-pf_subtitle font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </p>
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
        <div className="flex gap-6 flex-col justify-center ">
          <h3 className="text-4xl font-bold text-center font-gilroy">
            <strong className="text-accent">Networking Just Got Better </strong> with <br /> The
            Work Gallery
          </h3>
          <h4 className="text-xl text-pf_subtitle font-normal text-center">
            Power up your workflow: Extensions & pipelines meet editing nirvana.
          </h4>
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
        <div className="text-center text-xl md:text-4xl font-semibold md:font-bold  font-gilroy">
          Connect Create Elevate
        </div>
        <div className="flex justify-center mt-6">
          <div className="flex justify-center items-center">
            <button
              onClick={scrollToWaitList}
              className="w-[380px] md:w-[530px] text-sm md:text-xl font-gilroy shadow-sm shadow-teal-400 rounded-full border-2 border-accent bg-accent py-3 px-12"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Footer for desktop and tab view */}
      <footer className="hidden md:block bg-[#131313] py-16 px-32 font-gilroy">
        <div className="flex flex-col gap-6 justify-center ...">
          <div className="flex justify-center gap-14 ...">
            <a href="https://www.instagram.com/workgallery.io/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/Workgallery_io/communities">
              <img src={XLogo} alt="x-logo" />
            </a>
          </div>
          <div className="flex justify-center gap-10 leading-2 text-base font-normal text-footer_font ...">
            <p>Blogs</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Testimonials</p>
          </div>
          <div className="flex justify-center ...">
            <img src={Horizontal} alt="Horizontal" />
          </div>
          <p className="text-center font-normal text-base text-footer_font">Workgallery.io 2023</p>
        </div>
      </footer>

      {/* Footer for Mobile View */}
      <footer className="block md:hidden bg-[#131313] py-12 px-10 font-gilroy">
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex justify-center gap-10 ...">
            <a href="https://www.instagram.com/workgallery.io/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com/Workgallery_io/communities">
              <img src={XLogo} alt="x-logo" />
            </a>
          </div>
          <div className="flex justify-center flex-col gap-6 leading-2  text-base text-footer_font ">
            <p>Blogs</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Testimonials</p>
          </div>
          <div className="flex justify-center ">
            <img src={Line} alt="Horizontal" />
          </div>
          <p className="text-center text-base text-footer_font">Workgallery.io 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
