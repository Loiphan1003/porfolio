import React from 'react'
import Image from 'next/image';

import { lpImage } from '@/assets/images';

const InfoLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div
            className="mt-[48px] w-full flex flex-col lg:flex-row gap-[6rem]"
        >
            <div
                className="max-w-full min-w-0"
            >
                {children}
            </div>

            <aside
                className="w-full lg:max-w-[300px]"
            >
                <div
                    className="my-[1rem] p-[25px] box-border flex flex-col gap-2 rounded-md border dark:border-dark-borderColor bg-[#1F1F1F]"
                >
                    <h2>Me</h2>
                    <Image
                        src={lpImage}
                        alt='My image'
                        width={0}
                        height={0}
                    />
                </div>
            </aside>
        </div>
    )
}

export default InfoLayout;
