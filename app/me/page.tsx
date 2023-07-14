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
        <p>Hey, I&apos;m Tania! I&apos;m a software developer working in Chicago. Welcome to my spot on the
          web for my projects, tutorials, art, musings, and anything else I want to show the world.
          Check out the projects page to see a highlight of my open-source work, and the blog for
          my tutorials and more.
        </p>

        <p>
          You can contact me by email at hello at taniarascia.com to say hi! I always appreciate
          meeting new people.
        </p>

        <ul
          className="mt-[20px] pl-[24px] flex flex-col gap-[7px] box-border
            text-[#9CA0FA]"
        >
          <li>Github</li>
          <li>Facebook</li>
          <li>Email</li>
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
          className="mt-[20px] pl-[24px] flex flex-col gap-[7px] box-border list-disc dark:marker:text-dark-marker"
        >
          <li className="text-dark-fontColorBase" >This website is hosted on Netlify and uses the Gatsby framework</li>
          <li className="text-dark-fontColorBase" >Coding: <p className="inline-block" >
            <span className="text-[#9CA0FA] underline underline-offset-2" >Visual Studio Code </span> with
            <span className="text-[#9CA0FA] underline underline-offset-2" > GitHub Dark</span>
          </p></li>
          <li className="text-dark-fontColorBase" >Terminal: <p className="inline-block text-[#9CA0FA] underline underline-offset-2" >Windows Terminal</p></li>
          <li className="text-dark-fontColorBase" >Notes: <p className="inline-block text-[#9CA0FA] underline underline-offset-2" >Notion</p></li>
        </ul>

        <h2
          className="mt-[55px] text-[31px] dark:text-dark-fontColorHeading text-light-fontColorHeading font-bold not-italic leading-[35.2px]
            tracking-[-0.8px]
            after:content-[''] after:block after:w-full after:h-[0.5px] after:bg-[#2C2C2C] after:mt-[7.5px]"
        >
          Others information
        </h2>

        <ul
          className="mt-[20px] pl-[24px] flex flex-col gap-[7px] box-border list-disc dark:marker:text-dark-marker"
        >
          <li
            className="w-fit text-[#9CA0FA] text-[17px] not-italic font-normal leading-[25.2px] 
              underline underline-offset-1 tracking-[-0.16px] hover:cursor-pointer hover:bg-[#9CA0FA] hover:text-dark-bg"
            onClick={() => handleRouter('/resume')}
          >
            Resume
          </li>
        </ul>

      </section>
    </InfoLayout>
  )
}

export default Me;
