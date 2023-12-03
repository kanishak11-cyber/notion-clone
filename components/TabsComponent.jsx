"use client"
import { Box, Tabs, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Container } from "postcss";
import React, { useState } from "react";


const designUrl =
  "https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/design-v2.png";
const productUrl =
  "https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/product.png";
const engineeringUrl =
  "https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/engineering-v2.png";
const marketingUrl =
  "https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/marketing.png";
const hrUrl =
  "https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/hr-v2.png";
const salesUrl =
  "https://www.notion.so/cdn-cgi/image/format=auto,width=96,quality=100/front-static/pages/home/persona-carousel/icons/operations.png";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("engineering");

    const handleTabChange = (value) => {
      setActiveTab(value);
    };
    
  return (
    <div className="text-center flex justify-center flex-col items-center mx-auto w-3/4 py-20">
      <h1 className="py-20 text-5xl font-semibold text-center">Every team, side-by-side</h1>
      <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
        <Tabs.List className="flex justify-center space-x-4  py-28">
          <Tabs.Trigger value="engineering" className="tab-trigger">
            <div className={`text-center ${activeTab === 'engineering' ? 'active-tab' : 'bg-[#f1efee] rounded-lg p-5 '}`}>
              <Image src={engineeringUrl} alt="engineering" width={96} height={96} />
              <h1 className="mt-2">Engineering</h1>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="design" className="tab-trigger">
            <div className={`text-center ${activeTab === 'design' ? 'active-tab' : 'bg-[#f1efee] rounded-lg p-5 '}`}>
              <Image src={designUrl} alt="design" width={96} height={96} />
              <h1 className="mt-2">Design</h1>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="product" className="tab-trigger">
          <div className={`text-center ${activeTab === 'product' ? 'active-tab' : 'bg-[#f1efee] rounded-lg p-5 '}`}>
                <Image 
                src={productUrl}
                alt="design"
                width={96}
                height={96}
                />
                <h1>Product</h1>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="marketing" className="tab-trigger">
          <div className={`text-center ${activeTab === 'marketing' ? 'active-tab' : 'bg-[#f1efee] rounded-lg p-5 '}`}>
                <Image 
                src={marketingUrl}
                alt="marketing"
                width={96}
                height={96}
                />
                <h1>Marketing</h1>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="operation" className="tab-trigger">
          <div className={`text-center ${activeTab === 'operation' ? 'active-tab' : 'bg-[#f1efee] rounded-lg p-5 '}`}>
                <Image 
                src={salesUrl}
                alt="design"
                width={96}
                height={96}
                />
                <h1>Operations</h1>
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger value="hr" className="tab-trigger">
          <div className={`text-center ${activeTab === 'hr' ? 'active-tab' : 'bg-[#f1efee] rounded-lg p-5 '}`}>
                <Image 
                src={hrUrl}
                alt="design"
                width={96}
                height={96}
                />
                <h1>HR</h1>
            </div>
          </Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="engineering" className=" shadow-xl  rounded-2xl">
            <Image
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/engineering.png"
              alt="engineering"
              width={920}
              height={108}
              lazy='true'
              className="rounded-xl"
            />
          </Tabs.Content>

          <Tabs.Content value="design" className=" rounded-lg shadow-xl">
            <Image
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/design.png"
              alt="design"
              width={920}
              height={108}
              lazy='true'
              className="rounded-xl"
            />
          </Tabs.Content>

          <Tabs.Content value="product" className=" rounded-lg shadow-xl">
          <Image
                src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/product.png'
                alt="product"
                width={920}
                height={108}
                lazy='true'
              className="rounded-xl"
            />
          </Tabs.Content>
          <Tabs.Content value="marketing" className=" rounded-lg shadow-xl">
          <Image
                src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/marketing.png'
                alt="marketing"
                width={920}
                height={108}
                lazy='true'
              className="rounded-xl"
            />
          </Tabs.Content>
          <Tabs.Content value="operation" className=" rounded-lg shadow-xl">
          <Image
                src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/operations.png'
                alt="operation"
                width={920}
                height={108}
                lazy='true'
              className="rounded-xl"
            />
          </Tabs.Content>
          <Tabs.Content value="hr" className=" rounded-lg shadow-xl">
          <Image
                src='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/persona-carousel/screenshots/hr.png'
                alt="hr"
                width={920}
                height={108}
                lazy='true'
              className="rounded-xl"
            />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
      <style jsx global>{`
        .tab-trigger {
          text-align: center;
          
          
         
          cursor: pointer;
        }

        .active-tab {
          border-color: gray;
            border-width: 1px ;
            padding: 20px;
            border-radius: 8px;
          background-color: white;
          margin: auto;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default TabsComponent;
