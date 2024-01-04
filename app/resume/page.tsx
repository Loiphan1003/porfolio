"use client"
import { Reveal } from '@/components';
import DescribeInfo from '@/components/DescribeInfo';
import Heading from '@/components/Heading';
import { InfoLayout } from '@/components/layouts';
import { certificate } from '@/data';
import React from 'react'

const Resume = () => {
    return (
        <InfoLayout>
            <h1
                className="dark:text-dark-fontColorHeading text-[3rem] font-bold not-italic leading-[52.8px]"
            >
                Lợi Phan
            </h1>

            <section
                className="mt-[32px]"
            >
                <Reveal>
                    <ul
                        className="pl-[24px] box-border"
                    >
                        <li>Email - hello [at] phanvuloi.it@gmail.com</li>
                        <li>GitHub - Loiphan1003</li>
                    </ul>
                </Reveal>

                <Reveal>
                    <Heading text='Experience' />
                    <div
                        className='mt-[22px] flex flex-col gap-[55px]'
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
                    <Heading
                        text='Skills'
                    />

                    <div
                        className="mt-[15px] pl-[24px] box-border flex flex-col gap-[7px]"
                    >
                        <li><span className='font-bold' >Languages</span> - C#, JavaScript, TypeScript, SQL,
                            HTML5, CSS3, JSON</li>

                        <li><span className='font-bold' >Frameworks and Libraries</span> - ASP.NET MVC, .NET Core Web API, WPF, Entity Framework, ReactJS, Redux, Tailwind CSS, Axios, Cypress.</li>
                        
                        <li><span className='font-bold' >Concepts</span> - Web Application Development, Design Patterns (REST API Design, MVC), Authentication and Security (OAuth2, JWT), Webpack, Electron, Testing (Unit)</li>

                        <li><span className='font-bold' >Database</span> - MySQL, SQL Server, MongoDB</li>

                        <li><span className='font-bold' >Version Control</span> - Git</li>

                        <li><span className='font-bold' >Tools</span> - Figma, Postman, Visual Studio Code, Visual Studio
                        </li>
                    </div>
                </Reveal>

                <Reveal>
                    <Heading
                        text='Education'
                    />

                    <div
                        className='mt-[22px] flex flex-col gap-[55px]'
                    >
                        <DescribeInfo
                            data={{
                                position: "Bachelor of University",
                                nameCompany: 'Hutech University',
                                timeStart: '2019',
                                timeEnd: '2023',
                                description: ''
                            }}
                        />
                    </div>
                </Reveal>

                <Reveal>
                    <Heading
                        text='Certificate'
                    />

                    <div
                        data-testid="cypress-certificates"
                        className="mt-[22px] flex flex-col gap-8"
                    >
                        {certificate.map((item) => (
                            <div
                                key={item.name}
                            >
                                <h3
                                    className="capitalize dark:text-dark-fontColorHeading text-[1.3rem] not-italic 
                                font-semibold leading-[31.68px] tracking-[-0.32px]"
                                >
                                    {item.name}
                                </h3>
                                <p
                                    className="mt-[10px] dark:text-[#E6E6E6] text-[1rem] font-normal leading-[27.3px] tracking-[-0.16px]"
                                >{item.placeOfIssue}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>

            </section>
        </InfoLayout>
    )
}

export default Resume;
