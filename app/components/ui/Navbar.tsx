"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import headerImage from '@/app/images/header.png';
import ThemeButton from './ThemeButton';
import classnames from 'classnames';
import Link from 'next/link';


const NavbarElement: { text: string, path: string }[] = [{
    text: 'About',
    path: '/me'
},
{
    text: 'Projects',
    path: '/projects'
}, {
    text: 'Resume',
    path: '/resume'
}]


export const Navbar = () => {

    const currentPath = usePathname();

    return (
        <div className='container w-screen mx-auto px-4 md:px-0' >
            <div
                className="w-auto h-[60px] md:h-[80px] flex flex-row justify-between items-center"
            >
                <div
                    className="w-fit md:h-[60px] flex items-center "
                >
                    <Link
                        className="w-[100px] md:w-[152px] h-[25px] flex items-center space-x-2 transition-colors delay-150"
                        href={'/'}
                    >
                        <Image
                            src={headerImage}
                            width={0}
                            height={0}
                            className="md:w-[25px] md:h-[25px]"
                            alt='header'
                        />
                        <p className="text-[0.9rem] md:text-[1.2rem] font-bold not-italic leading-[19px]" >Lợi Phan</p>
                    </Link>

                    <ul
                        className="w-[200px] flex gap-[20px] space-x-2 ml-[10px] md:ml-0 md:pl-1 md:pr-[170px]"
                    >
                        {NavbarElement.map((element) => (
                            <li
                                key={element.text}
                                className={classnames({
                                    'text-zinc-500 ': currentPath !== element.path,
                                    'border-b border-purple-400 dark:text-zinc-100 text-zinc-900': currentPath === element.path,
                                    'text-[.9rem] hover:text-zinc-800 dark:hover:text-zinc-100 hover:border-b hover:border-purple-400 md:text-[1rem] transition-colors relative font-medium not-italic leading-[27px]': true
                                })}
                            >
                                <Link href={element.path}>{element.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <ThemeButton />
            </div >
        </div>

    )
}
