"use client";

import Footer from '@/components/layout/Footer'
import Navber from '@/components/layout/Navber/Navber'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Toaster />
            <Navber />
            {children}
            <Footer />
        </>
    )
}

export default LayoutProvider