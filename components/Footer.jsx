"use client";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import Select from 'react-select';
import Logo from '@/assets/notionLogo.png';
import Image from 'next/image';
const socialMediaIcons = {
  instagram: <FaInstagram />,
  twitter: <FaTwitter />,
  linkedin: <FaLinkedin />,
  facebook: <FaFacebook />,
  youtube: <FaYoutube />,
};

const Footer = () => {
  const socialMediaOptions = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'youtube', label: 'YouTube' },
  ];

  return (
    <div className='flex flex-col gap-20 pb-20 pt-5 items-center'>
      <div className='flex gap-32'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center'>
            <Image className='w-14' alt='logo' src={Logo} width={80} height={80} />
            <h1 className='text-lg font-semibold'>Notion</h1>
          </div>

          <div className='flex gap-4 items-center'>
            {socialMediaOptions.map(({ value }) => (
              <div key={value} className='w-10 h-10 text-3xl hover:text-blue-500 hover:pointer-events-auto'>
                {socialMediaIcons[value]}
              </div>
            ))}
          </div>

          <Select
            className='w-32 px-3 py-1 hover:bg-gray-200 border border-gray-300 outline-none'
            options={[
              { value: 'English', label: 'English (US)' },
              { value: 'Français', label: 'Français (France)' },
                { value: '日本語', label: '日本語' },
                { value: '한국어', label: '한국어' },
                { value: 'Deutsch', label: 'Deutsch' },
                { value: 'Русский', label: 'Русский' },
                { value: 'Português', label: 'Português (Brasil)' },
                { value: '中文', label: '中文 (简体)' },
                { value: 'Español', label: 'Español (Latinoamérica)' },
                { value: 'Italiano', label: 'Italiano' },
                { value: 'Türkçe', label: 'Türkçe' },
                { value: 'Polski', label: 'Polski' },
                { value: 'Nederlands', label: 'Nederlands' },
                { value: 'Tiếng Việt', label: 'Tiếng Việt' },
                { value: 'Čeština', label: 'Čeština' },
                { value: 'Svenska', label: 'Svenska' },
                { value: 'Magyar', label: 'Magyar' },
                { value: 'Bahasa Indonesia', label: 'Bahasa Indonesia' },
                { value: 'ภาษาไทย', label: 'ภาษาไทย' },
                { value: 'Dansk', label: 'Dansk' },
                { value: 'Suomi', label: 'Suomi' },
                { value: 'Română', label: 'Română' },
                { value: 'Українська', label: 'Українська' },
                { value: 'العربية', label: 'العربية' },
                { value: 'हिन्दी', label: 'हिन्दी' },
                { value: 'עִברִית', label: 'עִברִית' },
                { value: 'Bahasa Melayu', label: 'Bahasa Melayu' },
                { value: 'Filipino', label: 'Filipino' },

              // Add other language options
            ]}
          />
        </div>

        <div className='flex flex-col gap-10'>
          <div>
            <span className='text-[17px] font-bold'>Product</span>
            <ul>
            <li className='text-sm text-gray-500 pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Wikis</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Projects</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Docs</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Notion AI</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>What's new</li>
            </ul>
          </div>
          <div>
            <span className='text-[17px] font-bold'>Solutions</span>
            <ul className=''>
            <li className='text-sm text-gray-500  pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Enterprise</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Small business</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Personal use</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Remote work</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Startups</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Education</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Noprofits</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Engineering</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Product</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Design</li>
          <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Managers</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-10'>
          <div>
            <span className='text-[17px] font-bold'>Download</span>
            <ul>
            <li className='text-sm text-gray-500 pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>iOS & Android</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Mac & Windows</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Web Clipper</li>
            </ul>
          </div>
          <div>
            <span className='text-[17px] font-bold'>Build</span>
            <ul>
            <li className='text-sm text-gray-500 pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Integrations</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Templates</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>API docs</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Guides & tutorials</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Hire a consultant</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Become an affiliate</li>
            </ul>
          </div>
          <div>
            <span className='text-[17px] font-bold'>Learn</span>
            <ul>
            <li className='text-sm text-gray-500 pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Customer stories</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Help center</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Webinars</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Blog</li>
              <li className='text-sm text-gray-500 p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Community</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-10'>
          <div>
            <span className='text-[17px] font-bold'>Get started</span>
            <ul>
            <li className='text-sm text-gray-500  pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Switch from Confluence</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Switch from Asana</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Switch from Evernote</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Compare vs Monday</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Compare vs Clickup</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Compare vs Jira</li>
            </ul>
          </div>
          <div>
            <span className='text-[17px] font-bold'>Resources</span>
            <ul>
            <li className='text-sm text-gray-500  pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Pricing</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>About us</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Careers</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Media kit</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Email us</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Security</li>
              <li className='text-sm text-gray-500  pt-3 px-1  pb-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Cookie settings</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Terms & privacy</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>California Privacy Notice</li>
              <li className='text-sm text-gray-500  p-1 font-normal hover:text-blue-400 hover:underline underline-offset-2'>Status</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-sm font-semibold'>Do Not Sell or Share My Info</h2>
        <h3 className='text-sm text-gray -400'>© 2023 Notion Labs, Inc.</h3>
      </div>
    </div>
  );
};

export default Footer;
