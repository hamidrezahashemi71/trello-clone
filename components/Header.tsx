"use client"

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar'

const Header = () => {
    
    return (
        <header>
            <div className='headerContainer'>
                <div className='headerGradientBg' />

                <div className='headerLeftContainer'>
                    <form className='headerSearchForm'>
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

                <Image
                    src={'https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png'}
                    alt='Trello Logo'
                    width={300}
                    height={100}
                    className='headerLogoImage'
                />
            </div>
        </header>
    )
}

export default Header