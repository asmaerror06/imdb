import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function header() {
    return (
        <div className='flex items-center justify-between max-w-6xl py-6 mx-2 sm:mx-auto'>
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome} />
                <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />

            </div>
            <div className="flex items-center space-x-5">
                < DarkModeSwitch />
                <Link href="/">
                    <h2 className="text-2xl">
                        <span className='px-2 py-1 mr-1 font-bold rounded-lg bg-amber-500' >IMDB</span>
                        <span className='hidden text-xl sm:inline'>Clone</span>
                    </h2>
                </Link>

            </div>
        </div>
    )
}
