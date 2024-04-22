'use client'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'
import React, { FC, Fragment, MouseEventHandler, ReactElement } from 'react'
import { MdArrowDropDown } from 'react-icons/md'



type DashboardComponentsProps = {
    children: React.ReactNode
}

const DashboardComponents: FC<DashboardComponentsProps> = ({ children }) => {
    const router = useRouter()

    const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        localStorage.removeItem('jsonwebtoken')
        sessionStorage.removeItem('jsonwebtoken')
        router.push('/')
        alert('succes logout')
    }
    return (
        <>
            <header className='grid justify-between  items-center grid-cols-2 p-5 bg-neutral-800'>
                <span>A</span>
                <div className='justify-self-end gap-2 items-center flex flex-row'>
                    <span>Halo Admin</span>
                    <div className='dropdown dropdown-bottom'>
                        <button tabIndex={0} className=' hover:bg-neutral-700 p-1 rounded-lg flex flex-row items-center' >
                            Menu
                            <MdArrowDropDown />
                        </button>
                        <ul tabIndex={0} className='dropdown-content menu bg-neutral-900 rounded-lg p-2 flex flex-col gap-4 z-[1'>
                            <li>Product</li>
                            <li>Tagihan</li>
                            <li></li>
                        </ul>
                    </div>
                </div>


            </header>
            <div className='flex flex-row min-h-screen w-full gap-10'>
                <main className='flex flex-col w-full gap-10 '>

                    {children}
                </main>
            </div>
        </>
    )
}

export default DashboardComponents