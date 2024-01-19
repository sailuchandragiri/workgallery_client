// DashedBorderImageWithButton.tsx

import React, { ReactNode } from 'react';
import Upload from '../assets/upload.svg';

interface DashedBorderImageWithButtonProps {
  buttonLabel: string;
  buttonColor?: string;
  dashedBorderColor?: string;
  borderRadius?: string;
  children?: ReactNode;
}

const DragAndDrop: React.FC<DashedBorderImageWithButtonProps> = ({
  buttonLabel,
  buttonColor,
  dashedBorderColor,
  borderRadius,
  children,
}) => {
  return (
    <div
      className={`${dashedBorderColor} border-2 p-4 h-[12rem] flex flex-col justify-between rounded-2xl bg-sky-50`}
    >
      <img src={Upload} alt="Image" className="w-full h-[60%]" />
      {children}
      <button className={`w-full ${buttonColor} text-sm text-white px-4 py-2 ${borderRadius}`}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default DragAndDrop;
