"use client";
import React from 'react'
import ThemeButton from '../ThemeButton'
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import headerImage from '../../assets/images/header.png';
import { openNewPage } from '@/utils';


const NavbarElement: { text: string, path: string }[] = [{
    text: 'About',
    path: '/me'
},
{
    text: 'Projects',
    path: '/projects'
}, {
    text: 'GitHub',
    path: '/github'
},
]


export const Navbar = () => {

    const router = useRouter();
    const pathName = usePathname();

    const handleClickMenu = (path: string) => {
        if(path === '/github') return openNewPage('https://github.com/Loiphan1003');
        router.push(path);
    }

    return (
        <div
            className="w-auto h-[60px] md:h-[80px] flex flex-row justify-between items-center"
        >
            <div
                className="w-[300px] md:w-[418px] md:h-[60px] flex flex-row md:flex-col items-start gap-1 md:gap-[20px]"
            >
                <div
                    className="w-[100px] md:w-[152px] h-[25px] flex items-center gap-[10px] hover:cursor-pointer"
                    onClick={() => handleClickMenu('/')}
                >
                    <Image
                        src={headerImage}
                        width={0}
                        height={0}
                        className="md:w-[25px] md:h-[25px]"
                        alt='header'
                    />
                    <p className="text-[.9rem] md:text-[19px] font-bold not-italic leading-[19px]" >Lợi Phan</p>
                </div>

                <ul
                    className="w-[200px] flex flex-row gap-[20px] md:gap-[33px] ml-[10px] md:ml-0 md:pl-1 md:pr-[170px] dark:text-dark-navColor text-light-navColor"
                >
                    {NavbarElement.map((element) => (
                        <li
                            key={element.text}
                            className={`text-[.9rem] md:text-[14.8px] relative font-medium not-italic leading-[27px] hover:cursor-pointer 
                            ${pathName === element.path ?
                            "after:content-[''] after:block after:absolute after:w-[100%] after:h-1 after:bg-purple-400  after:rounded-[20%]" 
                            : "hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-[100%] hover:after:h-1 hover:after:bg-purple-400  hover:after:rounded-[20%]"}`}
                            onClick={() => handleClickMenu(element.path)}
                        >
                            {element.text}
                        </li>
                    ))}
                </ul>
            </div>

            <ThemeButton />
        </div>
    )
}
