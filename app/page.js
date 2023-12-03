
import Carousel2 from '@/components/Carousel2'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import TabsComponent from '@/components/TabsComponent'
import Welcome from '@/components/Welcome'
import Image from 'next/image'
import logos from '../public/assets/company.png'
import { IoIosArrowRoundForward } from 'react-icons/io'
import RightArrow from '@/icon/RightArrow'
import Features from '@/components/Feature'
import { TbArrowsShuffle } from 'react-icons/tb'
import { FaRegEye } from 'react-icons/fa'
import { IoColorPaletteOutline } from 'react-icons/io5'

const metalab = 'https://www.notion.so/cdn-cgi/image/format=webp,width=256/front-static/shared/logos/color/metalab.png'
const pencil =  ' https://www.notion.so/cdn-cgi/image/format=webp,width=640/front-static/pages/home/giant-pencil-illustration.png'
const peek = 'https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/illustrations/blocks/topPeekI.png'
const tools = 'https://www.notion.so/cdn-cgi/image/format=webp,width=1200/front-static/pages/home/tools-before-notion-V2.png'
const strike ='https://www.notion.so/cdn-cgi/image/format=webp,width=1920/front-static/pages/home/tools-strikethrough-V2.png'
const info= 'https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/customize-info.png'
 const idea= 'https://www.notion.so/cdn-cgi/image/format=webp,width=2048/front-static/pages/home/build-any-page-communicate-any-idea.png'
const match = 'https://www.notion.so/cdn-cgi/image/format=webp,width=96/front-static/shared/logos/color/match-group.png'
export default function Home() {
  return (
    <div className='flex flex-col '>
      <Welcome />
      <Carousel2 />
      <div className="flex flex-col items-center mt-20 gap-6">
        <h1 className="text-6xl font-semibold">
          Millions run on Notion every day
        </h1>
        <p className="text-center text-lg">
          Powering the world’s best teams, from next-generation startups <br />{" "}
          to established enterprises.
        </p>
        <div className="mt-3 text-md flex items-center hover:underline text-blue-500">
          <p>Read customer stories</p>
          <RightArrow className="ml-2" />
        </div>

        <Image src={logos} alt="logos" className="mt-4" />
      </div>

      <div className="flex flex-col items-center mt-28">
        <h1 className="text-6xl font-semibold">Consolidate tools. </h1>
        <h1 className="text-6xl font-semibold">Cut costs. </h1>

        <div className="mt-10 relative">
          <img src={tools} alt="" className=" z-0" />
         
          <img
            src={pencil}
            alt=""
            className="absolute -top-[10.5rem] -right-[5.8rem] w-[25%]"
          />
        </div>
        <div className='z-[100] -mt-[100px]'>
          <img src={strike}  alt=''/>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <p className="text-2xl max-w-2xl text-center">{`"We got rid of nearly a dozen different tools because of what Notion does for us."`}</p>
          <div className="mt-4 flex items-center gap-2">
            <img src={metalab} alt="" />
            <div>
              <h3 className="text-sm font-semibold">Justin Watt</h3>
              <h3 className="text-xs">Director of Ops & Marketing, MetaLab</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 items-center mt-40 ">
          <div className="flex items-center space-x-10 relative">
            <img
              src={peek}
              alt=""
              className="absolute -bottom-3 -left-[15vw] w-[30%] "
            />
            <h1 className="text-6xl mb-6 font-bold">
              Powerful building blocks
            </h1>
          </div>
          <div className="pt-10 w-[60vw] self-start bg-[#f6f5f4] p-6 rounded-lg">
            <div className="relative">
              <TbArrowsShuffle className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="font-semibold text-lg ">
              Visualize, filter & sort any way you want
            </h2>
            <p className="max-w-lg font-medium text-black/80">
              Show only tasks assigned to you, or items marked as urgent. Break
              down any project in the way that’s most helpful to you.
            </p>
            <div className="flex flex-col items-center justify-center mt-5 rounded-3xl p-2">
              <Features />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-3/4 gap-2 mt-2">
          <div className="bg-[#f6f5f4] p-10 rounded-lg relative h-[80vh] border-2">
            <FaRegEye className="h-8 w-8 text-blue-500" />
            <h1 className="font-semibold mt-4">Customize the info you track</h1>
            <p className="text-sm mt-1">
              Create your own labels, tags, owners, and more, so everyone has
              context and everything stays organized.
            </p>
            <Image
              src={info}
              alt=""
              width={1000}
              height={1000}
              className="absolute bottom-0 right-0 rounded-br-lg "
            />
          </div>

          <div className="bg-[#f6f5f4] p-10 rounded-lg relative h-[80vh] border-2">
            <IoColorPaletteOutline className="h-8 w-8 text-blue-500" />
            <h1 className="font-semibold mt-4">
              Build any page, communicate any idea
            </h1>
            <p className="text-sm mt-1">
              Everything is drag and drop in Notion — images, toggles, to-do’s,
              even embedded databases.
            </p>
            <Image
              src={idea}
              width={1000}
              height={1000}
              alt=""
              className="absolute bottom-0 right-0 rounded-br-lg "
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <p className="text-2xl max-w-2xl text-center">{`"Notion adapts to your needs. It’s as minimal or as powerful as you need it to be."`}</p>
        <div className="mt-4 flex items-center gap-2">
          <Image src={match} alt="" className="w-6" width={1000} height={1000} />
          <div>
            <h3 className="text-sm font-semibold">Rahim Makani</h3>
            <h3 className="text-xs">Director of Product, Matchgroup</h3>
          </div>
        </div>
      </div>
      <TabsComponent />
      <Community />
      <Footer />
    </div>
  )
}
