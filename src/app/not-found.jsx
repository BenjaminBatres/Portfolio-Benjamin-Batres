import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h1 className='text-[52px] md:text-[120px] xl:text-[152px] tracking-tighter leading-none font-black uppercase'>Error 404</h1>
        <h1 className='text-[52px] md:text-[105px] xl:text-[152px] tracking-tighter leading-none font-black uppercase flex items-end gap-1 mb-7 md:mb-10 lg:mb-16'>Not found <div className='w-6 md:h-12 h-6 md:w-12 bg-red-500 rounded-full' /></h1>
        <Link href='/' className='uppercase font-black text-4xl md:text-5xl tracking-tighter flex items-center gap-3 hover:font-semibold duration-300 group'>
        Let's go home
        <div className='h-9 w-9 bg-red-500 rounded-full flex items-center justify-center group-hover:h-7 group-hover:w-7 duration-300'>
            <GoArrowUpRight className='text-[22px] group-hover:-translate-y-3 group-hover:translate-x-2 duration-300'/>
        </div>
        </Link>
        
    </div>
  )
}
