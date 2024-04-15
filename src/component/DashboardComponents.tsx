import React, { FC, Fragment } from 'react'

type DashboardComponentsProps = {
    children: React.ReactNode
}

const DashboardComponents: FC<DashboardComponentsProps> = ({ children }) => {
    return (
        <>
            <div className='flex flex-row min-h-screen w-full gap-10'>
                <aside className='flex justify-center  p-10 bg-blue-400'>
                    <ul className='flex gap-4 flex-col'>
                        <a href='' className='text-xl font-bold'>Home</a>
                        <a href='' className='text-xl font-bold'>Paket</a>
                        <a href='' className='text-xl font-bold'>Penjualan</a>
                        <a href='' className='text-xl font-bold'>Pelanggan</a>
                        <a href='' className='text-xl font-bold'>Produk</a>
                        <a href='' className='text-xl font-bold'>Transaksi</a>
                    </ul>
                </aside>
                <main className='flex flex-col w-full gap-10 '>
                    <header className='bg-slate-600 p-4 items-center rounded-bl-lg flex justify-between gap-10'>
                        <span>Hello</span>
                        <div className='flex flex-row gap-4 items-center'>
                            <span>Selamat datang Admin</span>
                            <button className='bg-blue-400 p-2 rounded-lg'>Logout</button>
                        </div>
                    </header>
                    {children}
                </main>
            </div>
        </>
    )
}

export default DashboardComponents