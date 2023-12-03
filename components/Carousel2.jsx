"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { PiBookOpen } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";

const ai =
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/6Onv3yRAxJAzFIZJpuwb5E/24e411a845cfcb4a8e2848e9912a9d29/Q_A_Kombi_Hero_screenshot.png";
const wiki =
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/4NsNEojqcfzqch9Eoum1Gm/9aa7d73ac74b60358499211eff4fd074/engineering-wiki-V2.png";
const projects =
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/546F1MvF9KlFXBOO41AKLx/605f38de934bb47bcd89e6335eee1242/projects.png";
const docs =
  "https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://images.ctfassets.net/spoqsaf9291f/1h9O767GwXx8lwWKS55G6o/aa28560fbd35d34a414522259fde3517/meeting-notes.png";

const tabs = [
  {
    title: "AI",
    description: "Ask literally anything. Notion will answer.",
    color: "#800080",
    icon: (
      <div className="p-1 bg- rounded-md">
        <BsStars className="h-6 w-6 text-purple-800" />
      </div>
    ),
    img: ai,
  },
  {
    title: "Wikis",
    description: "Centralize your knowledge. No more hunting for answers.",
    color: "#FF0000",
    icon: (
      <div className="p-1 bg-red-200/50 rounded-md">
        <PiBookOpen className="h-6 w-6 text-red-800" />
      </div>
    ),
    img: wiki,
  },
  {
    title: "Projects",
    description: "Manage complex projects without the chaos",
    color: "#0000FF",
    icon: (
      <div className="p-1 bg-blue-200/50 rounded-md">
        <TbTargetArrow className="h-6 w-6 text-blue-500" />
      </div>
    ),
    img: projects,
  },
  {
    title: "Docs",
    description: "Simple, powerful, beautiful. Next-gen notes & docs.",
    color: "#DAA520",
    icon: (
      <div className="p-1 bg-orange-200/50 rounded-md">
        <IoDocumentTextOutline className="h-6 w-6 text-orange-500" />
      </div>
    ),
    img: docs,
  },
];
const Carousel2 = () => {
  const [activeImage, setActiveImage] = useState(ai);
    const [activeTab, setActiveTab] = useState(tabs[0].img);
  return (
    <div className="flex items-center flex-col">
    <div className="flex gap-5">
      {tabs.map((tab) => {
        return (
          <Tab
            tab={tab}
            key={tab.title}
            setActiveImage={setActiveImage}
            setActiveTab={setActiveTab}
            className={activeTab === tab.img ? "bg-white" : ""}
          />
        );
      })}
    </div>

    <div className="px-5 pt-5 w-1/2 m-2  rounded-2xl   shadow-xl shadow-gray-100">
      <img src={activeImage} alt="" className="w-full rounded-2xl" placeholder="blur" />
    </div>
  </div>
  );
};

export default Carousel2;

export const Tab = ({ tab, setActiveImage,setActiveTab }) => {
  return (
    <div
      onMouseEnter={() => {
        setActiveImage(tab.img);
        setActiveTab(tab.title);
      }}
      className="max-w-[15rem] group h-[15vh] rounded-lg border-gray-300 border px-5 py-3 bg-gray-50 shadow-lg hover:bg-white transition-all cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        {tab.icon}
        <h1 className="text-xl font-semibold">{tab.title}</h1>
      </div>
      <p className="text-xs mt-6 group-hover:mt-2 transition-all font-medium tracking-wide">
        {tab.description}
      </p>
      <button
        className="group-hover:flex items-center text-xs hidden transition-all"
        style={{
          color: tab.color,
        }}
      >
        <p>Learn more</p>
        <IoIosArrowRoundForward className="h-5 w-5" />
      </button>
    </div>
  );
};
