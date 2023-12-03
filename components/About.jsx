import Airplane from "@/icon/Airplane";
import Calender from "@/icon/Calender";
import Clipboard from "@/icon/Clipboard";
import Drawer from "@/icon/Drawer";
import Flag from "@/icon/Flag";
import Home from "@/icon/Home";
import Ok from "@/icon/Ok";
import RightArrow from "@/icon/RightArrow";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="flex flex-row  gap-4 justify-center py-4">
        <div className="flex flex-col text-center   gap-6">
          <h1 className="text-5xl mr-20 text-center font-semibold">Endless ways to use it</h1>
          <p className="py-2 hover:underline text-center flex flex-row w-full text-xl gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>
        </div>
        <div className="flex z-10 -mr-[400px] justify-end items-end ">
          <Image
            src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekJ.png"
            alt=""
            width={1000}
            height={1000}
            className="z-10 h-48 w-48"
          />
        </div>
      </div>

      <div className="flex flex-row gap-10 -mt-20">
        <div className="p-8 bg-[#f1efee] rounded-3xl flex items-start flex-col ">
          <div className="h-10 w-10">
             <Home />
          </div>
         
          <h1 className="text-start font-semibold text-4xl py-6">Company wiki</h1>
          <p className="py-2 hover:underline text-start flex flex-row w-full text-sm gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>

              <div className="-mr-10 -mb-10 rounded-3xl overflow-hidden z-10">
                <Image
                  src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/company-wiki-template.png'
                  alt='img'
                  width={1000}
                  height={1000}
                  className="rounded-t-xl"
                />
              </div>
        </div>
        <div className="flex gap-4 flex-col">
        <div className="bg-[#f1efee] rounded-3xl">
            <div className="p-8 w-60 h-full mx-auto justify-start">
              <div className="h-6 w-6">
                <Flag/>
              </div>
              <h1 className="text-lg font-semibold text-start py-3">Product roadmap</h1>
              <p className="py-2 hover:underline text-start flex flex-row w-full text-sm gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>
            </div>
          </div>
          <div className="bg-[#f1efee] rounded-3xl">
            <div className="p-8 w-60 h-full mx-auto justify-start">
              <div className="h-6 w-6">
                <Clipboard/>
              </div>
              <h1 className="text-lg font-semibold text-start py-3">Meeting notes</h1>
              <p className="py-2 hover:underline text-start flex flex-row w-full text-sm gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>
            </div>
          </div>
          <div className="bg-[#f1efee] rounded-3xl">
            <div className="p-8 w-60 h-full mx-auto justify-start">
              <div className="h-6 w-6">
                <Calender/>
              </div>
              <h1 className="text-lg font-semibold text-start py-3">
                Editorial calender
              </h1>
              <p className="py-2 hover:underline text-start flex flex-row w-full text-sm gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-[#f1efee] rounded-3xl">
            <div className="p-8 w-60 h-full mx-auto justify-start">
              <div className="h-6 w-6">
                <Ok/>
              </div>
              <h1 className="text-lg font-semibold text-start py-3">OKRs</h1>
              <p className="py-2 hover:underline text-start flex flex-row w-full text-sm gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>
            </div>
          </div>
          <div className="bg-[#f1efee] rounded-3xl">
            <div className="p-8 w-60 h-full mx-auto justify-start">
              <div className="h-10 w-10">
                <Airplane />
              </div>
              <h1 className="text-lg font-semibold text-start py-3">
                Vaction Planner
              </h1>
              <p className="py-2 hover:underline text-start flex flex-row w-full text-sm gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>
            </div>
          </div>
          <div className="bg-[#f1efee] rounded-3xl">
            <div className="p-8 w-60 h-full mx-auto justify-start">
              <div className="h-10 w-10">
                <Drawer />
              </div>
              <h1 className="text-lg font-semibold text-start py-3">
                Habit Tracker
              </h1>
              <p className="py-2 hover:underline text-start flex flex-row w-full text-sm gap-1 text-cyan-600 items-center ">
                Get templates <RightArrow />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mt-10 flex flex-col mb-10 items-center pt-10 justify-center gap-2">
        <h1 className="text-6xl font-bold">Get started for free</h1>
        <p className="mb-2">
          Play around with it first. Pay and add your team later.
        </p>
        <div className="flex gap-5  items-center">
          <Button
            color="gray"
            variant="solid"
            radius="medium"
            highContrast="true"
          >
            Try Notion free
          </Button>
          <h3 className="text-blue-500 hover:underline underline-offset-2 flex flex-row items-center gap-1">
            Request a demo <RightArrow />
          </h3>
        </div>
      </div>
      <Image
        className="mb-10  justify-between items-center mx-auto"
        width={800}
        height={800}
        alt="img"
        src="https://www.notion.so/cdn-cgi/image/format=webp,width=750/front-static/pages/home/notion-parade.png"
      />
    </div>
  );
};

export default About;
