
import React from 'react'
import Link from 'next/link'
import { Audiowide } from 'next/font/google'

const font = Audiowide({
    subsets: ['latin'],
    weight: ['400'],
    preload: false
})

export default function Navbar() {
    return (
        <nav className='h-20 flex items-center justify-between'>
            <Link href={'/'} className={ font.className + ' font-normal text-3xl p-2' }>MOYA</Link>
            <Link href={'/oAuth/login'} className='px-2.5 py-1'>
                เข้าสู่ระบบ
            </Link>
        </nav>
    )
}
