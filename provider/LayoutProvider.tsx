import Footer from '@/components/layout/Footer'
import Navber from '@/components/layout/Navber'
import { ReactNode } from 'react'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navber />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutProvider