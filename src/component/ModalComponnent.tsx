import React, { FC } from 'react'

interface ModalProps {
    isOpen: boolean,
    isClosed: () => void,
    children: React.ReactNode
}

const ModalComponent: FC<ModalProps> = ({ isOpen, isClosed, children }) => {

    return (
        <>
            {
                isOpen &&
                <div className='absolute h-screen w-full bg-neutral-800 opacity-100  p-2'>
                    {children}

                </div>


            }
        </>
    )
}

export default ModalComponent