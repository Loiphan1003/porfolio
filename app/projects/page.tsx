import { ProjectItem } from '@/components';
import React from 'react'

const Projects = () => {
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
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
        </section>
    </main>
  )
}

export default Projects;