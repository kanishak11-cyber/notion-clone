"use client";
import RightArrow from "@/icon/RightArrow";
import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { Carousel } from "flowbite-react";
import CarouselComponent from "./CarouselComponent";
import About from "./About";
const Community = () => {
  return (
    <div className="text-center flex justify-center flex-col items-center mx-auto w-3/4 py-20">
      <h1 className="text-5xl font-bold mb-4">
        Join a global movement.
        <br /> Unleash your creativity.
      </h1>
      <p className="text-gray-600 mb-8">
        Our vibrant community produces content, teaches courses, and leads
        events all over the world.
      </p>
      <Button
        className="bg-blue-500 text-white hover:bg-blue-600"
        variant="ghost"
        radius="small"
        size={"4"}
      >
        Learn more <RightArrow />
      </Button>
      <Image
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/avatars.png"
        alt=""
        width={1000}
        height={1000}
        className="w-3/4  justify-center items-center py-5 bg-transparent"
      />
      {/* stats */}
      <div className="flex flex-row gap-5 w-3/4 justify-between py-5 ">
        <div className="bg-[#f6f5f4] flex flex-col rounded-3xl p-8 w-1/3 text-left  ">
          <h1 className="text-5xl text-[#0a85d1]  font-extrabold ">1M+</h1>
          <p className="font-normal text-xl">community members</p>
        </div>
        <div className="bg-[#f6f5f4] flex flex-col rounded-3xl p-8 w-1/3 text-left  ">
          <h1 className="text-5xl text-[#0a85d1]  font-extrabold ">150+</h1>
          <p className="font-normal text-xl">community groups</p>
        </div>
        <div className="bg-[#f6f5f4] flex flex-col rounded-3xl p-8 w-1/3 text-left  ">
          <h1 className="text-5xl text-[#0a85d1]  font-extrabold ">50+</h1>
          <p className="font-normal text-xl">country represented</p>
        </div>
      </div>

      {/* talk */}
      <div className="flex w-3/4 gap-20">
        <div className="w-1/2 bg-[#f6f5f4] flex flex-col rounded-3xl p-8  ">
          <h1 className="font-semibold text-start text-2xl">
            An always-on support network
          </h1>
          <p className="font-normal text-start text-md">
            {" "}
            Swap setups and share tips in over 149 online communities.
          </p>
          <Image
            src="https://www.notion.so/cdn-cgi/image/format=webp,width=384/front-static/pages/home/community-icons-V2.png"
            alt=""
            width={1000}
            height={1000}
            className="w-[80%]  justify-center items-center py-5 bg-transparent"
          />
        </div>
        <div className="w-1/2 bg-[#f6f5f4] flex flex-col rounded-3xl p-8  ">
          <h1 className="font-semibold text-start text-2xl">
            Choose your language
          </h1>
          <p className="font-normal text-start text-md ">
            Notion currently supports English, Korean, Japanese, French, German,
            Spanish, and Portuguese. With more to come!
          </p>
          <div className="grid gap-2   bg-white p-8  mt-20 z-[100] rounded-2xl  -mr-10 mx-auto">
            <Image
              src={
                "https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/welcome-to-notion.png"
              }
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="flex w-[75%] gap-10 py-10  ">
        <div className="bg-[#f6f5f4] w-[65%] rounded-3xl">
          <CarouselComponent />
        </div>
        <div className="w-[35%] flex md:flex-col flex-row gap-4 ">
          <div className=" bg-[#f6f5f4] flex flex-col rounded-2xl p-1 items-center">
            <div className="flex flex-row gap-4 p-2">
              <div className="h-10 w-10 rounded-full items-center">
                <Image
                  src={
                    "https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-deborah.png"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <h1 className="text-md font-semibold">Deborah Mecca</h1>
                <p className="text-sm  ">@DebMecca</p>
              </div>
            </div>
            <div>
              <p className="justify-normal text-sm p-2 text-justify">
                I used to HATE documenting things. And then I started using{" "}
                <span className="text-blue-400">@NotionHQ</span> and I document
                a lot. A LOT A LOT. Now I just realize that it wasn't that I
                hated documenting, I just hated Google Docs.
              </p>
            </div>
          </div>

          <div className=" bg-[#f6f5f4] flex flex-col rounded-2xl p-1 items-center">
            <div className="flex flex-row gap-4 p-2">
              <div className="h-10 w-10 rounded-full items-center">
                <Image
                  src={
                    "https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-oliver.png"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <h1 className="text-md font-semibold">Oliver Peyre</h1>
                <p className="text-sm  ">@opeyre</p>
              </div>
            </div>
            <div>
              <p className="justify-normal text-sm p-2 text-justify">
                <span className="text-blue-400">@NotionHQ</span> Truly impressed
                by the velocity and quality of your work. Making using Notion
                even more fun week after week!
              </p>
            </div>
          </div>

          <div className=" bg-[#f6f5f4] flex flex-col rounded-2xl p-1 items-center">
            <div className="flex flex-row gap-4 p-2">
              <div className="h-10 w-10 rounded-full items-center">
                <Image
                  src={
                    "https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/pages/home/avatars/twitter-avatar-andre.png"
                  }
                  alt=""
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <h1 className="text-md font-semibold">André Blackman</h1>
                <p className="text-sm  ">@mindofandre</p>
              </div>
            </div>
            <div>
              <p className="justify-normal text-sm p-2 text-justify">
                One of the most incredible things about{" "}
                <span className="text-blue-400">@NotionHQ</span> the dynamic
                community being built - creating and sharing at its best..
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Community;
