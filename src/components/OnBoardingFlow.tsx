import React from 'react';

interface OnBoardingStepComponentProps {
  onNext: (stepData: IStepData) => void;
  // Add other props here if needed
}
interface IStepData {
  userName: string;
}
type OnBoardingStepComponent = React.ReactElement<OnBoardingStepComponentProps>;

interface OnBoardingFlowProps {
  onNext: (stepData: IStepData) => void;
  currentIndex: number;
  children: OnBoardingStepComponent | OnBoardingStepComponent[];
}

const OnBoardingFlow = ({ onNext, currentIndex, children }: OnBoardingFlowProps) => {
  //Convert Children to Array
  const childrenArray = React.Children.toArray(children) as OnBoardingStepComponent[];
  const currentChild = childrenArray[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { onNext }); //passing props to next child
  }

  return currentChild;
};

export default OnBoardingFlow;
