import { Krub } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const font = Krub({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin-ext', 'latin', 'thai'],
    preload: false
})

export const metadata: Metadata = {
    title: 'Moya Series',
    description: 'Moya Moya Chinese Mini Series'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={ font.className + ' tracking-wide select-none bg-white' }>
                { children }
            </body>
        </html>
    )
}
