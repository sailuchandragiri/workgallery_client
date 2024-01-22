import React from 'react';
import Close from '../assets/Close.svg';
interface ChildComponentProps {
  status: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  isGroup: boolean;
  width: string;
  isMobile: boolean;
  isMenu: boolean;
}

const Modal: React.FC<ChildComponentProps> = ({
  status,
  onRequestClose,
  children,
  isGroup,
  width,
  isMenu,
}) => {
  console.log(width, 'width');
  console.log(typeof width);
  return (
    <>
      {status && (
        <section
          className={`relative z-10 font-montserrat ${isGroup ? 'bg-zinc-100' : ''}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div
              className={`flex  items-end ${
                isMenu ? 'justify-end py-2 ' : 'justify-center p-4 md:min-h-full'
              } text-center sm:items-center sm:p-0`}
            >
              <div
                // style={{ width: `${width}%` }}
                //   className={`w-[100%] md:w-[${width}%] my-8 relative p-6 transform overflow-hidden rounded-xl md:rounded-2xl bg-white text-left shadow-xl transition-all
                //  `}
                className={`w-[100%] ${width} my-8 relative p-6 transform overflow-hidden rounded-xl md:rounded-2xl bg-white text-left shadow-xl transition-all`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end">
                  <button
                    className="border-none hover:scale-110  focus:border-none text-xl text-gray-500 cursor-pointer"
                    onClick={onRequestClose}
                  >
                    <img src={Close} alt="Close" width={35} height={35} />
                  </button>
                </div>
                {children}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
