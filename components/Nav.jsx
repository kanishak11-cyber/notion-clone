import React from "react";
import Menu from "./navbar/Menu";
import Image from "next/image";
import Logo from "@/icon/Logo";
import { Button } from "@radix-ui/themes";
const Nav = () => {
  return (
    <div className="flex flex-row  px-2 gap-1 items-center justify-between mx-auto min-w-screen ">
      <div className="h-12 w-28 items-center py-2 px-1">
        <Logo />
      </div>
      <Menu />
      
    </div>
  );
};

export default Nav;
