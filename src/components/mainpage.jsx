import React from "react";

import About from "./aboutus";
import Timeline from "./timeline";


const Mainpage = () => {
  // const [marginTop, setMarginTop] = useState(-320);
  // const [rotateImg, setRotateImage] = useState(false);

  // const handleButtonClick = () => {
  //   setMarginTop(prevMarginTop => prevMarginTop === -320 ? 0 : -320);
  //   setRotateImage(!rotateImg);
  // };
  return (
    <>
      {/* <div className=" absolute z-10 w-full h-[350px] bg-[#ffa192] backdrop-blur-[5px] flex justify-center items-end   duration-300"
      style={{ marginTop: `${marginTop}px` }}>
        <button onClick={handleButtonClick} className={`w-full flex justify-center p-[8px] `}><img src={scroll_down} className={`${rotateImg ? 'clicked' : ''} w-[20px]`} /></button>
      </div> */}

      {/* <div className="absolute w-full h-[72vh] -z-10 overflow-hidden ">
        <div className="hidden md:block">
          <div className="w-[50px] aspect-square absolute -top-[180%] about_box2 -z-50 bg-[#ff583e4f] left-[5%]" />
          <div className="w-[20px] aspect-square absolute -top-[150%] about_box2 -z-50 bg-[#ff583e4f] hidden xl:block left-[1300px]" />
          <div
            className="w-[60px] box1 aspect-square absolute -top-[20%] about_box2 -z-50 bg-[#ff583e4f]
                    left-[500px] "
          />
          <div
            className="w-[50px] box1  aspect-square absolute -top-[300%] about_box2 -z-50 bg-[#ff583e4f]
                    left-[1000px] hidden xl:block"
          />
          <div
            className="w-[20px]   aspect-square absolute -top-[20%] about_box2 -z-50 bg-[#ff583e4f]
                    left-[800px] hidden lg:block"
          />
          <div
            className="w-[60px] box4   aspect-square absolute -top-[50%] about_box2 -z-50 bg-[#ff583e4f]
                    left-[500px]"
          />
          <div className="w-[70px] box4 aspect-square absolute -top-[300%] about_box2 -z-50 box3 bg-[#ff583e4f] left-[3%] " />
          <div className="w-[80px] aspect-square absolute -top-[200%] about_box2 -z-50 box3 bg-[#ff583e4f] hidden xl:block left-[1300px]" />
          <div
            className="w-[20px]  aspect-square absolute -top-[300%] about_box2 -z-50 box3 bg-[#ff583e4f]
                    left-[500px] "
          />
          <div className="w-[50px]   aspect-square absolute -top-[200%] about_box2 -z-50 box3 bg-[#ff583e4f] left-[250px] hidden xl:block" />
          <div className="w-[80px]    aspect-square absolute -top-[250%] about_box2 -z-50 box3 bg-[#ff583e4f] left-[800px] hidden lg:block" />
          <div
            className="w-[30px] box2   aspect-square absolute -top-[300%] about_box2 -z-50 box3 bg-[#ff583e4f]
                    left-[500px]"
          />
        </div>

        <div className="w-full -z-10 h-full overflow-hidden block md:hidden">
          <div className="w-[40px] box4 aspect-square absolute -top-[200%] about_box2 bg-[#ff583e4f]" />
          <div className="w-[30px] box4 aspect-square absolute -top-[300%] about_box2 bg-[#ff583e4f]  left-[65%]" />
          <div
            className="w-[60px]  box4 aspect-square absolute -top-[100%] about_box2 bg-[#ff583e4f]
                    left-[50%] "
          />
          <div
            className="w-[20px]  box4 aspect-square absolute -top-[200%] about_box2 bg-[#ff583e4f]
                    left-[40%] "
          />
          <div
            className="w-[30px]  box4 aspect-square absolute -top-[500%] about_box2 bg-[#ff583e4f]
                    left-[10%] "
          />
          <div
            className="w-[20px]  box4 aspect-square absolute -top-[450%] about_box2 bg-[#ff583e4f]
                    left-[60%] "
          />
          <div
            className="w-[40px] box4 aspect-square absolute -top-[500%] about_box2 bg-[#ff583e4f]
                    left-[30%] "
          />
          <div
            className="w-[20px] box4 aspect-square absolute -top-[400%] about_box2 bg-[#ff583e4f]
                    left-[10%] "
          />
          <div
            className="w-[20px] box4 aspect-square absolute -top-[200%] about_box2 bg-[#ff583e4f]
                    left-[20%] "
          />
          <div
            className="w-[20px]  aspect-square absolute -top-[10%] about_box2 bg-[#ff583e4f]
                    left-[60%] "
          />
        </div>
      </div> */}

      <div className="px-[20px] xl:px-[60px] mt-[160px] md:mt-[60px]">
        <About />
        <Timeline />
      </div>
    </>
  );
};

export default Mainpage;
