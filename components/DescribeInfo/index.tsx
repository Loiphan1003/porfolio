import React from 'react'

interface Props {
    data: {
        position: string,
        nameCompany: string,
        timeStart: string,
        timeEnd: string,
        description: string,
    }

}


export default function DescribeInfo({ data }: Props) {

    return (
        <div
        >
            <h3
                className="dark:text-dark-fontColorHeading text-[1.7rem] not-italic font-medium leading-[31.68px] tracking-[-0.32px]"
            >
                {data.position}
            </h3>
            <p
                className="mt-[19px] dark:text-[#E6E6E6] text-[1rem] font-normal leading-[27.3px] tracking-[-0.16px]"
            >
                <span
                    className="font-bold"
                >{data.nameCompany} - </span> {data.timeStart} - {data.timeEnd}
            </p>

            <ul
                className="mt-2 pl-[20px] list-disc list-inside flex flex-col gap-2"
            >
                {data.description !== '' && data.description.split('.').map((item) => (
                    <li key={item} >{item.trim()}</li>
                ))}
            </ul>
        </div>
    )
}
