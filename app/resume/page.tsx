import DescribeInfo from '@/components/DescribeInfo';
import Heading from '@/components/Heading';
import { InfoLayout } from '@/components/layouts';
import React from 'react'

const Resume = () => {
    return (
        <InfoLayout>
            <h1
                className="dark:text-dark-fontColorHeading text-[48px] font-bold not-italic leading-[52.8px]"
            >
                Lợi Phan
            </h1>

            <section
                className="mt-[32px]"
            >
                <ul
                    className="pl-[24px] box-border"
                >
                    <li>Email - hello [at] phanvuloi.it@gmail.com</li>
                    <li>GitHub - loiphan1003</li>
                </ul>

                <Heading text='Experience' />
                <div
                    className='mt-[22px] flex flex-col gap-[55px]'
                >
                    <DescribeInfo
                        position="Intern Front End Developer"
                        nameCompany="Alta Software"
                        timeStart='April 2023'
                        timeEnd='June 2023'
                        description=''
                    />

                </div>

                <Heading
                    text='Skills'
                />

                <div
                    className="mt-[15px] pl-[24px] box-border flex flex-col gap-[7px]"
                >
                    <p><span className='font-bold' >Languages</span> - Node.js, JavaScript (React/Redux, Vue), TypeScript, GraphQL, SQL, PHP,
                        Python, Bash, HTML5, CSS3, JSON</p>

                    <p><span className='font-bold' >Concepts</span> - Web Application Development, Design Patterns (REST API Design, MVC),
                        Databases (Postgres, SQL), Authentication and Security (OAuth2, OpenID Connect,
                        SSO, JWT), Linux/UNIX Administration, Webpack, Electron, Version Control (Git), AWS
                        Infrastructure (EC2, Route 53, RDS), Testing (Unit, Component, Integration, End-to-
                        end)</p>

                </div>

                <Heading
                    text='Education'
                />

                <div
                    className='mt-[22px] flex flex-col gap-[55px]'
                >
                    <DescribeInfo
                        position="Bachelor of University"
                        nameCompany='Hutech University'
                        timeStart='2019'
                        timeEnd='2023'
                        description=''
                    />
                </div>

            </section>
        </InfoLayout>
    )
}

export default Resume;