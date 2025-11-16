import Navber from '@/components/layout/Navber'
import { ReactNode } from 'react'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navber />
            {children}
        </div>
    )
}

export default LayoutProvider