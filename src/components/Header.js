"use client"

import { MagnifyingGlassIcon, QueueListIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Avatar from 'react-avatar'

export default function Header() {
  return (
    <header className='flex md:flex-row flex-col items-center justify-center gap-10 md:justify-between p-5 md:p-10 bg-indigo-100'>
      {/* Logo */}
      <div className='flex gap-3'>
        <div className='w-fit p-1 bg-white rounded-lg flex justify-center items-center'>
          <QueueListIcon className='text-indigo-600 w-8 h-8' />
        </div>
        <h2 className='font-extrabold font-Roboto text-slate-900 text-4xl m-0'>Freello</h2>
      </div>
      {/* Search bar */}
      <div className='w-full md:w-80 flex gap-5'>
        <form className='w-full flex shadow-md rounded-md bg-white items-center p-2 gap-2'>
          <MagnifyingGlassIcon className='text-gray-400 w-6 h-6'/>
          <input className='w-full py-2 outline-none border-none' placeholder='Search'/>
          <button type='submit' hidden></button>
        </form>
        <Avatar name='Soy Krad' round size='50' color='#FF2E2E' textSizeRatio={2}/>
      </div>
    </header>
  )
}
