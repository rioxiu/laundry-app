'use client'
import DashboardComponents from '@/component/DashboardComponents'
import ModalCuciKeringComponnent from '@/component/ModalCuciKeringComponnent';
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

const CuciKeringPage = () => {
    const [isOpenModal, setOpenModal] = useState<boolean>(false)

    const openModal = () => {
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false)
    }
    return (
        <DashboardComponents>
            <div className='rounded-lg bg-neutral-200 p-2 mt-5 mx-5 '>
                <span className='text-2xl font-bold text-black'>Cuci Kering</span>
                <div className='mt-5 flex flex-row justify-between items-center rounded-lg'>
                    <span>Tambah Orderan</span>
                    <span onClick={openModal} className='font-bold'><FaPlus />
                    </span>
                </div>

            </div>
            <div className='rounded-lg bg-neutral-200 p-2 mx-5 '>
                <span className='text-2xl font-bold text-black'>Tabel Orderan</span>
            </div>

            <ModalCuciKeringComponnent isOpen={isOpenModal} isClosed={closeModal}>
                <div className='flex flex-col'>
                    <div className='flex justify-between'>
                        <span>Tambah Pesanan</span>
                        <span onClick={closeModal}>Tutup</span>
                    </div>
                    <div className='flex flex-row justify-between gap-5 mt-10 bg-slate-200 rounded-md p-4'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Unit(Kg)</label>
                            <input type="text" className='w-24 bg-white input input-bordered' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="">Harga</label>
                            <input value={4500} type="text" className='w-24 input input-bordered' disabled />
                        </div>
                    </div>

                </div>
            </ModalCuciKeringComponnent>
        </DashboardComponents>
    )
}

export default CuciKeringPage