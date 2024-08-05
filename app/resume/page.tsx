"use client"
import { Reveal } from '@/app/components';
import DescribeInfo from '@/app/components/DescribeInfo';
import Heading from '@/app/components/Heading';
import { InfoLayout } from '@/app/components/layouts';
import { certificate } from '@/data';
import Link from 'next/link';
import React from 'react'

const Resume = () => {

    const skills = [
        { key: 'Languages', value: "C#, JavaScript, TypeScript, SQL, HTML5, CSS3, JSON." },
        { key: 'Frameworks and Libraries', value: "ASP.NET MVC, .NET Core Web API, WPF, Entity Framework, ReactJS, Redux, Tailwind CSS, Axios, Cypress." },
        { key: 'Concepts', value: "Web Application Development, Design Patterns (REST API Design, MVC), Authentication and Security (OAuth2, JWT), Webpack, Electron, Testing (Unit)." },
        { key: 'Database', value: "MySQL, SQL Server, MongoDB." },
        { key: 'Version Control', value: "Git." },
        { key: 'Tools', value: "Figma, Postman, Visual Studio Code, Visual Studio." },
    ];


    return (
        <InfoLayout>
            <Reveal>
                <h1
                    className="dark:text-dark-fontColorHeading text-[3rem] font-bold not-italic leading-[52.8px]"
                >
                    Lợi Phan
                </h1>
            </Reveal>

            <section
                className="mt-[32px] flex flex-col space-y-14"
            >
                <Reveal>
                    <ul  >
                        <li>Email - hello [at] phanvuloi.it@gmail.com</li>
                        <li>GitHub - <Link href="https://github.com/Loiphan1003" className='text-[#9CA0FA] underline underline-offset-2'>Loiphan1003</Link></li>
                    </ul>
                </Reveal>

                <Reveal>
                    <Heading text='Experience' />
                    <div
                        className='mt-4'
                    >
                        <DescribeInfo

                            data={{
                                position: "Intern Front End Developer",
                                nameCompany: "Alta Software",
                                timeStart: 'April 2023',
                                timeEnd: 'June 2023',
                                description: "Create a user interface based on blueprints available on Figma. Technologies used during the internship: ReactJS, Firebase, Typescript, Redux"
                            }}
                        />

                    </div>
                </Reveal>

                <Reveal>
                    <Heading text='Skills' />

                    <div
                        className="mt-4  box-border flex flex-col space-y-3"
                    >
                        {skills.map(skill => (
                            <li
                                key={skill.key}
                            >
                                <span className='font-bold' >{skill.key}</span>: {skill.value}
                            </li>
                        ))}
                    </div>
                </Reveal>

                <Reveal>
                    <Heading
                        text='Education'
                    />

                    <div
                        className='mt-[22px]'
                    >
                        <h3
                            className="capitalize dark:text-dark-fontColorHeading text-[1.3rem] not-italic 
                                font-semibold "
                        >
                            HUTECH University - 2019-2023
                        </h3>

                        <ul className='mt-2 flex flex-col gap-2' >
                            <li className="dark:text-[#E6E6E6] text-base font-normal">Degree Of Engineer</li>
                            <li className="dark:text-[#E6E6E6] text-base font-normal"> GPA: 3.27/4</li>
                        </ul>
                    </div>
                </Reveal>

                <Reveal>
                    <Heading
                        text='Certificate'
                    />

                    <div
                        className="mt-[22px] flex flex-col gap-8"
                    >
                        {certificate.map((item) => (
                            <div key={item.name}>
                                <h3
                                    className="capitalize dark:text-dark-fontColorHeading text-[1.3rem] not-italic 
                                font-semibold leading-[31.68px] tracking-[-0.32px]"
                                >
                                    {item.name}
                                </h3>

                                <p
                                    className="mt-[10px] dark:text-[#E6E6E6] text-base font-normal"
                                >
                                    {item.placeOfIssue}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>
        </InfoLayout>
    )
}

export default Resume;
