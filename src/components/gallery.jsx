import React from "react";

function Gallery() {
  const images = [
    "https://lh3.google.com/u/0/d/1CoTkz_YVBRwuAebzbMOrPMTy3F7xEro2=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/10xQBQMxNq28pqPCl-V8duCKlMy8CGGvK=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1ppkHcQALkwVBdOPS8GrrDVyiGpYgXmAJ=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1f7VOv6aSRI7CLT2Pa_DYNiSWm2PBSet-=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/13oPojr3zR4XnTTv25SE3Igof7shEG7lr=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1RYJFJP3sYjlN89u5K-odYIvfI23_p2LE=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1mOtqfxWcvx_-rWK9sQ0Esgx5CZRO46sY=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/19xfdGiIc-cbM7aC7ulhzwd_5WnrTULQN=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1uC6mZ_4vNzCIQEBcO34HORJilkPWYHmI=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1EmuB3Y0iyO7smG9NLgH2VPMpk2_bQt8I=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1vwGlkDIZo-8I1zU3rbxgmrSD0jTmb4NC=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1ea9VCEYzWIr9j8R5toDEQ-XD1ab1HgFm=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1JxnNXfFs_GvOQeHObzbMJo596VtbZNcy=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1cQmy95ebO4o9_mPeKpeh60_7zFZpTp9f=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/1pT6XbyqTYClQTiYenN3nSdmBijTIxGLM=w1920-h883-iv1",
    "https://lh3.google.com/u/0/d/17j-hh7Z9yYuzjpjmqVJXi6S_EdI0out-=w1920-h883-iv1",
  ];
  return (
    <div className="container mx-auto px-1 py-1 lg:px-10 lg:pt-10">
      <div className="text-center mb-[40px]">
        <span className="text-[30px] md:text-[36px] font-extrabold">
          Highlights of ICI FEST'<span className="text-[#ff583e]">22</span>
        </span>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2">
        {images.map((images, index) => (
          <div
            key={index}
            className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
          >
            <img
              className="block mx-auto w-full object-cover object-center rounded-[24px] shadow-md"
              src={images}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
