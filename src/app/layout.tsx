import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'

import GalleryDrawer from '@/components/GalleryDrawer'

export const metadata: Metadata = {
  title: 'James welding and metal work',
  description: 'Best welding services provided by James welding in kenya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-neutral-50 font-rubik'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
