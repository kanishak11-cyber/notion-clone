import RightArrow from "@/icon/RightArrow";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center min-w-full ">
      <div className="w-3/4 py-10">
        <h1 className="text-6xl font-bold mb-4">
          Write, Plan, Share. <br /> With AI at your side.
        </h1>
        <p className="text-gray-900 mb-8  text-xl font-medium leading-8 ">
          Notion is the connected workspace where better, faster work happens.
        </p>
        <Button
          variant="solid"
          color="gray"
          highContrast={true}
          radius="medium"
          className="flex items-center justify-center gap-2"
        >
          Get Notion free <RightArrow />
        </Button>
      </div>
      <div className="w-1/2 -top-10 justify-center items-center flex  -mt-10 -z-10 pt-16">
        <Image
          className=" bg-no-repeat"
          src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png"
          alt=""
          
          // layout="responsive"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default Welcome;
