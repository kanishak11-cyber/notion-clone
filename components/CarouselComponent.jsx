"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

const CarouselComponent = () => {
  return (
    <div className="h-full min-w-3/4 bg-[#f6f5f4] p-8 rounded-2xl">
      <h1 className="min-w-screen "></h1>
      <Carousel slideInterval={5000} className="rounded-2xl">
        <Image
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-01.png"
          alt="..."
          width={1000}
          height={1000}
          className="w-[1080px]"
        />
        <Image
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-02.png"
          alt="..."
          width={1000}
          height={1000}
        />
        <Image
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-03.png"
          alt="..."
          width={1000}
          height={1000}
        />
        <Image
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-04.png"
          alt="..."
          width={1000}
          height={1000}
        />
      </Carousel>
      <h1>Community Meet-up in Tokyo</h1>
    </div>
  );
};

export default CarouselComponent;
