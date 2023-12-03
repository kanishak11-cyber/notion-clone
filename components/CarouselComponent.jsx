"use client"
import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import React from 'react'

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      jiji hauhsa 
        <Carousel slideInterval={5000} className='h-96'>
        <Image src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-01.png" alt="..." width={1000} height={1000}  />
        <Image src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-02.png" alt="..." width={1000} height={1000}  />
        <Image src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-03.png" alt="..." width={1000} height={1000}  />
        <Image src="https://www.notion.so/cdn-cgi/image/format=webp,width=1920,quality=75/front-static/pages/home/community/community-slide-04.png" alt="..." width={1000} height={1000}  />
      </Carousel>
        </div>
  )
}

export default CarouselComponent