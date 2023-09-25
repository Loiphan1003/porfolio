import React from 'react';

type Props = {
    label: string,
    onClick: () => void
}

export const Button = (props: Props) => {
    return (
        <div
            className="w-[92px] h-[42px] flex justify-center items-center dark:bg-dark-buttonBackgroundColor bg-light-buttonBackgroundColor text-[14px] dark:text-dark-fontColorBase text-light-fontColorBase font-medium leading-[16px] not-italic
            rounded-[6px] border border-solid dark:border-dark-borderColor border-light-borderColor hover:cursor-pointer
            dark:hover:border-white hover:border-dark-borderColor transition-colors delay-[45ms]"
            onClick={() => props.onClick()}
        >
            {props.label}
        </div>
    )
}
