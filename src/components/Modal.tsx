import React from 'react';

interface ChildComponentProps {
  status: boolean;
  onButtonClick: () => void;
  children: unknown;
  isGroup: boolean;
}

const Modal: React.FC<ChildComponentProps> = ({ status, onButtonClick, children, isGroup }) => {
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
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className={`w-[100%] relative p-6 transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all ${
                  isGroup ? 'sm:my-8 sm:w-full sm:max-w-3xl' : 'sm:my-8 sm:w-full sm:max-w-xl'
                }`}
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
