import React from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import { Project } from '@/types';
import { openNewPage } from '@/utils';
import { Tag } from '../Tag';

const ibm_plex_mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' });

interface ProjectItemProps {
    data: Project
}

export const ProjectItem = (props: ProjectItemProps) => {


    const handleClickName = (githubLink: string | undefined) => {
        if (githubLink === undefined || githubLink === '') return;
        return openNewPage(githubLink);
    }

    const handleClickTags = (tag: string) => {
        console.log(tag);
        
    }


    return (
        <div
            className="w-auto h-auto rounded-[6px] border border-solid dark:border-dark-borderColor border-light-borderColor
            p-[25px] box-border dark:bg-dark-cardBackgroundColor bg-light-cardBackgroundColor"
        >
            <div>
                <p
                    className={`${ibm_plex_mono.className} text-[#F57AD0] text-[14px] font-normal leading-[23px] tracking-[-0.16px] not-italic`}
                >
                    {props.data.yearBuild}
                </p>

                <p
                    className="dark:text-dark-fontColorHeading text-light-fontColorHeading text-[17px] font-medium leading-[23px] 
                    not-italic hover:cursor-pointer hover:underline"
                    onClick={() => handleClickName(props.data.gitHubLink)}
                >
                    {props.data.name}
                </p>
                <p
                    className="dark:text-dark-fontColorMuted text-light-fontColorMuted text-[14px] font-normal leading-[21px] tracking-[-0.16px] not-italic"
                >
                    {props.data.description}
                </p>
            </div>

            <div className="w-auto mt-[15px] flex flex-row gap-[8px]" >
                {props.data.gitHubLink &&
                    <Tag 
                        label='Source'
                        onClick={(value) => handleClickTags(value)}
                    />
                }
            </div>
        </div>
    )
}
