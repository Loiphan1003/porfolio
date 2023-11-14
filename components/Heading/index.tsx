import React from 'react'

interface IHeadingProps {
    text: string,
}


const Heading = ({ text }: IHeadingProps) => {
    return (
        <h2
            className="mt-[55px] dark:text-dark-fontColorHeading text-[1.8rem] not-italic font-bold leading-[35.2px] tracking-[-0.8px]
            after:content-[''] after:block after:w-full after:h-[0.5px] after:bg-[#2C2C2C] after:mt-[7.5px]"
        >
            {text}
        </h2>
    )
}

export default Heading;
