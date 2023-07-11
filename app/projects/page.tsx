import { ProjectItem } from '@/components';
import React from 'react'

const Projects = () => {
  return (
    <main
        className="mt-[48px]"
    >
        <header>
            <h1 className="text-[48px] font-bold not-italic leading-[53px]" >Projects</h1>
        </header>

        <section
            className="mt-[48px] grid gap-4 grid-cols-3 md:grid-cols-2"
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