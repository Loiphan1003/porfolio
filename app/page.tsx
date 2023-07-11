"use client";
import Image from 'next/image'
import { ProjectItem } from '@/components';
import { useRouter } from 'next/navigation'
import myImage from '../assets/images/ram.png';
import React from 'react';


export default function Home() {

  const router = useRouter();

  const handleViewAll = (typeOpen: string) => {
    let pathName: string = '';
    if(typeOpen === 'projects') pathName = '/projects';
    return router.push(pathName);
  }


  return (
    <React.Fragment>
      <section
        className="w-auto h-[358px] flex flex-col md:flex-row gap-[24px] mt-[20px] md:mt-[48px] md:items-center"
      >
        <div
          className="md:pt-[79px] md:pr-[83px] md:pb-[48px] box-border"
        >
          <h1 className="text-[2.2rem] md:text-[48px] dark:text-dark-fontColorHeading text-light-fontColorHeading  leading-[53px] font-bold not-italic">Hi, I&apos;m Loi Phan</h1>
          <div
            className="mt-[1.5rem] md:mt-[25px] text-[1rem] md:text-[19px] dark:text-dark-fontColorBase text-light-fontColorBase font-medium leading-[31px] not-italic tracking-[-0.16px]"
          >
            <p>Welcome to my portfolio</p>
            <p className="md:mt-[35px]">I&apos;m a software developer in Ho Chi Minh City. I like listening music and gaming.</p>
          </div>
        </div>

        <Image
          src={myImage}
          width={0}
          height={0}
          className="h-[100%] max-w-[250px] md:max-w-[100%]"
          alt="Picture of the author"
        />
      </section>

      <section
        className="mt-[48px]"
      >
        <div
          className="flex flex-row justify-between items-center"
        >
          <p className=" dark:text-dark-fontColorHeading text-light-fontColorHeading text-[1.7rem] md:text-[32px] font-bold leading-[35px] not-italic tracking-[-0.8px]" >Projects</p>

          <div
            className="w-[92px] h-[42px] flex justify-center items-center dark:bg-dark-buttonBackgroundColor bg-light-buttonBackgroundColor text-[14px] dark:text-dark-fontColorBase text-light-fontColorBase font-medium leading-[16px] not-italic
            rounded-[6px] border border-solid dark:border-dark-borderColor border-light-borderColor hover:cursor-pointer"
            onClick={() => handleViewAll('projects')}
          >
            View all
          </div>
        </div>

        <div
          className="mt-[34px] grid gap-4 grid-cols-1 md:grid-cols-3 md:grid-rows-3"
        >
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </section>
    </React.Fragment>
  )
}
