"use client";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateThemeState } from '@/redux/reducer/themeSlice';
import { useTheme } from 'next-themes';


const ThemeButton = () => {

    // const dispatch = useDispatch();
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        const themeDefault = localStorage.getItem('theme');
        if(themeDefault !== null) return;
        return localStorage.setItem('theme', 'dark')
    }, [])



    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div
            className="w-[38px] h-[38px] p-[9px] rounded-[6px] dark:bg-dark-buttonBackgroundColor bg-light-buttonBackgroundColor
            border-[1px] dark:border-dark-borderColor border-light-borderColor hover:cursor-pointer"
            onClick={() => handleChangeTheme()}
        >
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect y="0.5" width="20" height="20" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_2_227" transform="scale(0.025)" />
                    </pattern>
                    <image id="image0_2_227" width="40" height="40" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYlJREFUWEftmDFuwkAQRe0rRIECWpSWs+QE1ClzDgpKak6QU0TQ0kZROigSixMggbD9LXms4a/HcZhFoVnh3WX/vBnPzpAmHT+jh+R07Sf2hyTtckSnzZeD3QqUwnafiwLUz2s+ZB+jfJzO9jWAbYmaCboXKONKE5y9z2tLQTSUpJlgdAI1wSw2GclfIxidQAhGbFpJ9kYweoEwQOZLGZM3I+hGYFdX907wbgR+bY65Lc/L73xELLoh+C+QFaUsYd+MoCZMppn4Bcp6jlUZzKWh6QXrKMFoBKLqGE+K3sJKMjT2WhP0L3Bd2jQoujSQhKUaUdZEybeWkcN8dZNULvEucLsq+tnHp3o/myhEYWlVMeNB2R9r5MwE3QqUeUsVioUl0SofBhILJdeIwWgFajdGI0bLhegxtH24MTAv6z+5r1EP4m2Gi90JlK7Gdya4LTGWV9UYjEagJCJvireXoQat9hwxFkqMxqB2qnuBjKhmmLUaojHI/Mf+m7a61OxiJriv+T/ri60GnAG1B7A4DYusaQAAAABJRU5ErkJggg==" />
                </defs>
            </svg>

        </div>
    )
}
export default ThemeButton;
