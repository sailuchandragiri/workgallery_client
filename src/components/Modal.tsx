import React from 'react';

interface ChildComponentProps {
  status: boolean;
  onButtonClick: () => void;
  children: React.ReactNode;
  isGroup: boolean;
  isWidth: string;
  isMobile: boolean;
  isMenu: boolean;
}

const Modal: React.FC<ChildComponentProps> = ({
  status,
  onButtonClick,
  children,
  isGroup,
  isWidth,
  isMobile,
  isMenu,
}) => {
  console.log(isWidth, 'width');
  return (
    <>
      {status && (
        <div
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
                className={`w-[85%] md:w-[30%] relative p-6 transform overflow-hidden rounded-xl md:rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-${isWidth}
               `}
                onClick={(e) => e.stopPropagation()}
              >
                <p
                  className="text-right text-xl text-gray-500 cursor-pointer"
                  onClick={onButtonClick}
                >
                  x
                </p>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
