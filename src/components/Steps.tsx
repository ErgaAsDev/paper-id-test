import { FunctionComponent, useState, useEffect } from "react";
import { dataSteps } from "../helpers/dataSteps";
import { setCurrentImage } from "../slices/appSlice";
import { useDispatch } from "react-redux";

const Steps: FunctionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (index: number) => {
    setActiveIndex(index);
    // Use setTimeout to ensure the image update occurs after index change
    setTimeout(() => {
      if (index >= 0 && index < dataSteps.length) {
        dispatch(setCurrentImage(index));
      }
    }, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % dataSteps.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Add this useEffect to update the image when activeIndex changes
  useEffect(() => {
    // Verify that activeIndex is within bounds before updating the image
    if (activeIndex >= 0 && activeIndex < dataSteps.length) {
      dispatch(setCurrentImage(activeIndex));
    }
  }, [activeIndex, dispatch]);

  return (
    <div className="w-[546px] flex flex-col items-start justify-start py-0 px-3 box-border gap-[17px]">
      {dataSteps.map((step, index) => (
        <button
          key={step.id}
          className={`cursor-pointer [border:none] p-[22px] ${
            index === activeIndex ? "bg-blue-500" : "bg-white"
          } self-stretch rounded-3xs flex flex-col items-start justify-start `}
          onClick={() => handleClick(index)}
        >
          <div className="self-stretch flex flex-row  items-center justify-start gap-[20px]">
            <b
              className={`relative text-29xl leading-[135%] font-heading-heading-large ${
                index === activeIndex ? "text-white" : "text-[#133F5D]"
              }  text-left`}
            >
              {step.id}
            </b>
            <div
              className={`flex-1 relative text-xl leading-[135%] font-heading-heading-large ${
                index === activeIndex ? "text-white" : "text-[#133F5D]"
              } text-left`}
            >
              {step.body}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Steps;
