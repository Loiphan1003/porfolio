"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { InfoLayout } from '@/components/layouts';


const Me = () => {

  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  }

  return (
    <InfoLayout>

      <h1
        className="text-[48px] not-italic font-bold leading-[53px]"
      >About me</h1>

      <section>
        <p className='mt-2' >Hi, I&apos;m Lợi I&apos;m a frontend developer in Việt Nam. I am thrilled to have the opportunity to introduce myself and share my passion for both programming and my hobbies. As a frontend developer, I specialize in creating engaging and user-friendly
          interfaces for websites and applications.
        </p>

        <ul
          className="mt-[20px] pl-[24px] flex flex-col gap-[7px] box-border
            text-[#9CA0FA]"
        >
          <li
            className='hover:cursor-pointer hover:underline'
            onClick={() => handleRouter('/resume')}
          >My Resume</li>
        </ul>

        <h2
          className="mt-[55px] text-[31px] dark:text-dark-fontColorHeading text-light-fontColorHeading font-bold not-italic leading-[35.2px]
            tracking-[-0.8px]
            after:content-[''] after:block after:w-full after:h-[0.5px] after:bg-[#2C2C2C] after:mt-[7.5px]"
        >
          Tools
        </h2>

        <h3
          className="mt-[23px] text-[25.8px] not-italic font-medium leading-[31.68px]
            tracking-[-0.32px]"
        >
          Software
        </h3>
        <ul
          className="mt-[20px] pl-[24px] flex flex-col gap-[7px] 
          box-border list-disc marker:text-dark-marker dark:text-dark-fontColorBase
          text-light-fontColorBase"
        >
          <li>This website is hosted on Vercel and uses the NextJS framework</li>
          <li>Coding: <p className="inline-block" >
            <span className="text-[#9CA0FA] underline underline-offset-2" >Visual Studio Code </span> with
            <span className="text-[#9CA0FA] underline underline-offset-2" > GitHub Dark</span>
          </p></li>
          <li>Terminal: <p className="inline-block text-[#9CA0FA] underline underline-offset-2" >Windows Terminal</p></li>
          <li>Notes: <p className="inline-block text-[#9CA0FA] underline underline-offset-2" >Notion</p></li>
        </ul>

      </section>
    </InfoLayout>
  )
}

export default Me;
