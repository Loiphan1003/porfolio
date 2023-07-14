import React from 'react'

interface DescribeInfoProps {
    position: string,
    nameCompany: string,
    timeStart: string,
    timeEnd: string,
    description: string,
}


export default function DescribeInfo(props: DescribeInfoProps) {
    return (
        <div
            // className="mt-[55px]"
        >
            <h3
                className="dark:text-dark-fontColorHeading text-[26.8px] not-italic font-medium leading-[31.68px] tracking-[-0.32px]"
            >
                {props.position}
            </h3>
            <p
                className="mt-[19px] dark:text-[#E6E6E6] text-[16.8px] font-normal leading-[27.3px] tracking-[-0.16px]"
            >
                <span
                    className="font-bold"
                >{props.nameCompany} - </span> {props.timeStart} - {props.timeEnd}</p>
        </div>
    )
}
