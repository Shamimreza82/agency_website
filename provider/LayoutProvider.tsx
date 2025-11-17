import Footer from '@/components/layout/Footer'
import Navber from '@/components/layout/Navber'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Toaster />
            <Navber />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutProvider