"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { InfoLayout } from '@/components/layouts';
import { Reveal } from '@/components';


const Me = () => {

  const router = useRouter();

  const handleRouter = (path: string) => {
    router.push(path);
  }

  return (
    <InfoLayout>

      <h1
        className="text-[3rem] not-italic font-bold leading-[53px]"
      >About me</h1>

      <section>
        <Reveal>
          <p className='mt-2' >
            Hi, I&apos;m a software engineer in Vietnam. I am happy to have the opportunity to introduce myself and share my passion for both programming and my hobby. As a software engineer, I always try to improve my knowledge, design and create applications that improve my life ...
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
        </Reveal>

        <Reveal>
          <h2
            className="mt-[55px] text-[1.9rem] dark:text-dark-fontColorHeading text-light-fontColorHeading font-bold not-italic leading-[35.2px]
            tracking-[-0.8px]
            after:content-[''] after:block after:w-full after:h-[0.5px] after:bg-[#2C2C2C] after:mt-[7.5px]"
          >
            Tools
          </h2>

          <h3
            className="mt-[23px] text-[1.6rem] not-italic font-medium leading-[31.68px]
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
        </Reveal>

      </section>
    </InfoLayout>
  )
}

export default Me;
