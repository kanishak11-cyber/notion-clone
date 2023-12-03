"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import OpenBook from "@/icon/OpenBook";
import Target from "@/icon/Target";
import Docs from "@/icon/Docs";
import Image from "next/image";
import Star from "@/icon/Star";
import { Button, Flex } from "@radix-ui/themes";
import { Separator } from "@radix-ui/react-dropdown-menu";

const NavigationMenuDemo = () => {
  // Product, Download, Solution, Resurce, pricing,
  return (
    <NavigationMenu.Root className="bg-white flex w-screen justify-between p-3 ">
      <div className="flex overflow-hidden">
        <NavigationMenu.List className=" flex list-none p-1 ">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className=" hover:bg-gray-50 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Product{" "}
              <CaretDownIcon
                className="  relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute -top-2 left-10 w-full sm:w-auto">
              <ul className="m-0 grid  list-none gap-x-[4px] p-[10px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-4">
                {/* <div className="flex flex-row"> */}
                <ListItem href="/">
                  <div className="py-2 px-1 flex flex-row items-center gap-4">
                    <div>
                      <OpenBook />
                    </div>
                    <div>
                      <p className="font-medium">Wiki</p>
                      <p>centralize your knowledge</p>
                    </div>
                  </div>
                </ListItem>

                <ListItem href="/">
                  <div className="py-2 px-1 flex flex-row items-center gap-4">
                    <div>
                      <Target />
                    </div>

                    <div>
                      <p className="font-medium">Projects</p>
                      <p>For every team or Size</p>
                    </div>
                  </div>
                </ListItem>

                <ListItem href="/">
                  <div className="py-2 px-1 flex flex-row items-center gap-4">
                    <div>
                      <Docs />
                    </div>

                    <div>
                      <p className="font-medium">Docs</p>
                      <p>Simple & Powerful</p>
                    </div>
                  </div>
                </ListItem>

                <ListItem href="/">
                  <div className="py-2 px-1 flex flex-row items-center gap-4">
                    <div>
                      <Star />
                    </div>

                    <div>
                      <p className="font-medium">Notion AI</p>
                      <p>Integrated AI assistant</p>
                    </div>
                  </div>
                </ListItem>

                <ListItem title="Template Gallery" href="/">
                  Setups to get you started.
                </ListItem>
                <ListItem title="Customer Stories" href="/">
                  See how teams use Notion.
                </ListItem>
                <ListItem title="Connections" href="/">
                  Connect your tools to Notion
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className=" hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Download{" "}
              <CaretDownIcon
                className="  relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute -top-2 left-[200px] w-full sm:w-auto">
              <ul className="m-0 grid  list-none gap-x-[4px] p-[10px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-4">
                <ListItem title="ios & Android"></ListItem>
                <ListItem title="Mac & Windows"></ListItem>
                <ListItem title="Web Clipper"></ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          {/* Solutions */}
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className=" hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Solutions{" "}
              <CaretDownIcon
                className="  relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
            //   className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute -top-2 left-[500px] w-full sm:w-auto"
            >
              <div className="grid grid-cols-3">
                <div className="m-0 grid  list-none gap-x-[4px] p-[10px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-5">
                  <h1 className="text-gray-500"> BY TEAM SIZE</h1>

                  {/* <div className="flex flex-row"> */}
                  <ListItem href="/">
                    <div className="py-2 px-1 flex flex-row items-center gap-4">
                      <div>
                        <Image
                          src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/icons/team-size-enterprise.png"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-medium">Enterprise</p>
                        <p>Advance features for your org</p>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem href="/">
                    <div className="py-2 px-1 flex flex-row items-center gap-4">
                      <div>
                        <Image
                          src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/icons/team-size-small-business.png"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-medium">Small Business</p>
                        <p>Run Your team on one Tool</p>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem href="/">
                    <div className="py-2 px-1 flex flex-row items-center gap-4">
                      <div>
                        <Image
                          src="https://www.notion.so/cdn-cgi/image/format=auto,width=1920,quality=100/front-static/shared/icons/team-size-personal.png"
                          alt=""
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-medium">Personal</p>
                        <p>Free for individuals</p>
                      </div>
                    </div>
                  </ListItem>
                </div>
                <div className="m-0 grid  list-none gap-x-[4px] p-[10px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-5">
                  <h1 className="text-gray-500"> BY TEAM FUNCTION</h1>
                  <ListItem title="Design"></ListItem>
                  <ListItem title="Engineering"></ListItem>
                  <ListItem title="Product"></ListItem>
                  <ListItem title="Managers"></ListItem>
                </div>

                <div className="m-0 grid  list-none gap-x-[4px] p-[10px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-5">
                  <h1 className="text-gray-500"> NOTION FOR</h1>
                  <ListItem title="Startups"></ListItem>
                  <ListItem title="Remote work"></ListItem>
                  <ListItem title="Education"></ListItem>
                  <ListItem title="Nonprofits"></ListItem>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Resourcess */}

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
              Resources{" "}
              <CaretDownIcon
                className="  relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className=" absolute top-0 left-[450px]   ">
              <ul className="">
                <ListItem title="Blogs"></ListItem>
                <ListItem title="Guide & Tutorials"></ListItem>
                <ListItem title="Webinars"></ListItem>
                <ListItem title="Help Center"></ListItem>
                <ListItem title="API docs"></ListItem>
                <ListItem title="Community"></ListItem>
                <ListItem title="Hire a consultant"></ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* pricing */}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className=" hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
              href="/"
            >
              Pricing
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
            <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end  overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>

        <div className="perspective-[2000px] absolute top-20 left-0 flex w-full">
          <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </div>

      <Flex className="flex flex-row -left-10 items-center gap-3">
        <Button  variant="ghost" color="gray" highContrast='true' className="font-medium"  radius="small">
          Request a demo
        </Button> 
        <Separator  orientation="vertical" size="4" color="cyan" />
        <Button variant="ghost" color="gray" highContrast='true' className="font-medium"  radius="small" >Login</Button>
        <Button variant="solid " color="gray" highContrast='true'  radius="medium"  >Get Notion Free</Button>
      </Flex>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-1 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-black mb-[2px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.2]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavigationMenuDemo;
