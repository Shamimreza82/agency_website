import { ReactNode } from 'react'

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default LayoutProvider