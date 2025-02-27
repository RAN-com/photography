'use client';

import {button} from './ui/button'
import {SunIcon, MoonIcon} from '@radix-ui/react-icons';
import {useTheme} from 'next-themes'

const ThemeToggler=()=>{
    const{theme,setTheme}= useTheme();
    return(
        <div>
            <button
            onclick={() => setTheme(theme === 'dark'?'light':'dark')}>
                <SunIcon
                className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 translate-all dark:rotate-90 dark:scale-0'/>
                <MoonIcon
                className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'/>
            </button>
        </div>
    )
}
export default ThemeToggler