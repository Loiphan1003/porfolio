"use client";
import Image from 'next/image'
import { ProjectItem, Reveal } from '@/components';
import { useRouter } from 'next/navigation'
import myImage from '../assets/images/lp.jpg';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '@/redux/reducer/projectSlice/asyncThunk';
import { RootState } from '@/redux/store';
import { Button } from '@/components/Button';




export default function Home() {

  const dispatch = useDispatch<any>();
  const projectState = useSelector((state: RootState) => state.project.project);
  const router = useRouter();


  useEffect(() => {
    dispatch(getProjects())
  }, [dispatch])

  const handleViewAll = (typeOpen: string) => {
    let pathName: string = '';
    if (typeOpen === 'projects') pathName = '/projects';
    return router.push(pathName);
  }


  return (
    <React.Fragment>
      <Reveal>
        <section
          className="w-auto h-fit flex flex-col md:flex-row gap-[24px] mt-[20px] md:mt-[48px] md:items-center"
        >
          <div
            className="md:pt-[79px] md:pr-[83px] md:pb-[48px] box-border"
          >
            <h1
              className="relative w-[max-content] text-[2.2rem] md:text-[3rem] dark:text-dark-fontColorHeading
            text-light-fontColorHeading font-bold not-italic before:absolute 
            before:inset-0 dark:before:bg-dark-bg before:text-light-fontColorHeading
            before:animate-typing"
            >
              Hi, I&apos;m Lợi ✌
            </h1>

            <div
              className="mt-[1.5rem] md:mt-[25px] text-[1rem] md:text-[1.2rem] dark:text-dark-fontColorBase text-light-fontColorBase font-medium leading-[31px] not-italic tracking-[-0.16px]"
            >
              <p>Welcome to my portfolio</p>
              <p className="md:mt-[20px]">I&apos;m a frontend developer in Ho Chi Minh City. I like listening music and gaming.</p>
            </div>
          </div>

          <Image
            src={myImage}
            width={0}
            height={0}
            className="h-[100%]  md:w-[250px] max-w-[250px] md:max-w-[100%] rounded-lg"
            alt="Picture of the author"
          />
        </section>
      </Reveal>

      <Reveal>
        <section
          className="mt-[48px]"
        >
          <div
            className="flex flex-row justify-between items-center"
          >
            <p className=" dark:text-dark-fontColorHeading text-light-fontColorHeading text-[1.7rem] md:text-[2rem] font-bold leading-[35px] not-italic tracking-[-0.8px]" >Projects</p>

            <Button label='View all' onClick={() => handleViewAll('projects')} />
          </div>

          <div
            className="mt-[34px] grid gap-4 md:grid-cols-3 "
          >
            {projectState.map((i) => (
              <ProjectItem key={i.name} data={i} />
            ))}
          </div>
        </section>
      </Reveal>
    </React.Fragment>
  )
}
