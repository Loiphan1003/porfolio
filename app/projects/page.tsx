"use client"
import { ProjectItem } from '@/components';
import { RootState } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

const Projects = () => {

    const projectState = useSelector((state: RootState) => state.project.project);

    return (
        <main
            className="mt-[2rem] md:mt-[48px]"
        >
            <header>
                <h1 className="text-[2.2rem] md:text-[48px] font-bold not-italic leading-[53px]" >Projects</h1>
            </header>

            <section
                className="mt-[48px] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
                {projectState.map((i) => (
                    <ProjectItem key={i.name} data={i} />
                ))}

            </section>
        </main>
    )
}

export default Projects;