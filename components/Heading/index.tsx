import React from 'react'

interface HeadingProps {
    text: string,
}


const Heading = (props: HeadingProps) => {
    return (
        <h2
            className="mt-[55px] dark:text-dark-fontColorHeading text-[30px] not-italic font-bold leading-[35.2px] tracking-[-0.8px]
                    after:content-[''] after:block after:w-full after:h-[0.5px] after:bg-[#2C2C2C] after:mt-[7.5px]"
        >
            {props.text}
        </h2>
    )
}

export default Heading;
