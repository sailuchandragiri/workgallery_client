import React from 'react';

const OnBoardingFlow = ({ onNext, currentIndex, children }: IProps) => {
  const currentChild = React.Children.toArray(children)[currentIndex]; //Convert Children to Array
  // if (children.length - 1 === currentIndex) {
  //   //checking if current Child is last child
  //   onFinish();
  // }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { onNext }); //passing props to next child
  }

  return currentChild;
};

export default OnBoardingFlow;
