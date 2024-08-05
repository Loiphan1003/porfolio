import React from 'react'

interface IHeadingProps {
    text: string,
}


const Heading = ({ text }: IHeadingProps) => {
    return (
        <h2
            className="dark:text-dark-fontColorHeading transition-colors ease-linear text-[1.8rem] not-italic font-bold leading-[35.2px]
            border-b border-b-[#2C2C2C] pb-2"
        >
            {text}
        </h2>
    )
}

export default Heading;
