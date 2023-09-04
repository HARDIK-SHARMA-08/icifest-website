/* eslint-disable no-unused-vars */
import React from 'react';
import { bg_video_desktop, bg_video_mobile } from "../assets";

const HeroSection = () => {
  return (
    <>
    <video
      playsInline
      autoPlay
      muted
      className="-mt-[250px] w-full h-full hidden md:block"
    >
      <source src={bg_video_desktop} type="video/mp4" />
    </video>

    <video
      playsInline
      autoPlay
      muted
      className="-mt-[8%] w-full h-full block md:hidden"
    >
      <source src={bg_video_mobile} type="video/mp4" />
    </video>
  </>
  )
}

export default HeroSection