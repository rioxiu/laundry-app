import React, { FC } from 'react'

interface ModalProps {
    isOpen: boolean,
    isClosed: () => void,
    children: React.ReactNode
}

const ModalCuciKeringComponnent: FC<ModalProps> = ({ isOpen, isClosed, children }) => {

    return (
        <>
            {
                isOpen &&
                <div className='fixed h-screen w-full bg-neutral-800 opacity-100 rounded-lg   p-2'>
                    {children}

                </div>


            }
        </>
    )
}

export default ModalCuciKeringComponnent