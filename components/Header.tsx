"use client"

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar'

const Header = () => {
    return (
        <header>
            <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
                <div className='absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-primary rounded-md filter blur-3xl opacity-50 -z-50' />

                <Image
                    src={'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'}
                    alt='Trello Logo'
                    width={300}
                    height={100}
                    className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                />

                <div className='flex items-center flex-1 gap-5 justify-end w-full'>
                    <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                        <MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />

                        <input
                            type="text" 
                            placeholder='جستجو'
                            className='flex-1 outline-none p-2'
                        />

                        <button hidden>
                            {"جستجو"}
                        </button>
                    </form>

                    <Avatar name='Hamidreza Hashemi' round color='#0055D1' size='50'/>
                </div>
            </div>
        </header>
    )
}

export default Header