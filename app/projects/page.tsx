"use client"
import { ProjectItem, Reveal } from '@/components';
import { getProjects } from '@/redux/reducer/projectSlice/asyncThunk';
import { RootState } from '@/redux/store';
import { AnyAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Projects = () => {

    const projectState = useSelector((state: RootState) => state.project.project);

    const dispatch = useDispatch<any>();

    useEffect(() => {
        if(projectState.length == 0){
            dispatch(getProjects())
        }
    }, [projectState])


    return (
        <main
            className="mt-[2rem] md:mt-[48px] min-h-[60vh]"
        >
            <Reveal>
                <header>
                    <h1 className="text-[2.2rem] md:text-[48px] font-bold not-italic leading-[53px]" >Projects</h1>
                </header>
            </Reveal>

            <Reveal>
                <section
                    className="mt-[48px] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projectState.map((i) => (
                        <ProjectItem key={i.name} data={i} />
                    ))}

                </section>
            </Reveal>
        </main>
    )
}

export default Projects;