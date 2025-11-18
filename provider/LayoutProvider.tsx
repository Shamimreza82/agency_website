import Footer from '@/components/layout/Footer'
import Navber from '@/components/layout/Navber/Navber'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <SessionProvider>
            <Toaster />
            <Navber />
            {children}
            <Footer />
        </SessionProvider>
    )
}

export default LayoutProvider