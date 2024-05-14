'use client'
import DashboardComponents from '@/component/DashboardComponents'
import ModalComponent from '@/component/ModalComponnent';
import React, { FC, MouseEvent, MouseEventHandler, ReactElement, Suspense, useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaPlus, FaUser, FaWhatsapp } from "react-icons/fa";
import { useCookies } from 'next-client-cookies';
import toast from 'react-hot-toast';

type CuciKeringPageProps = {
    children: ReactElement
}

const CuciKeringPage: FC<CuciKeringPageProps> = () => {

    const cookies = useCookies()
    const [isOpenModal, setOpenModal] = useState<boolean>(false)
    const [cariPelanggan, setCariPelanggan] = useState<boolean>(false)
    const [addPelanggan, setAddPelanggan] = useState<boolean>(false)
    const [noHP, setNoHP] = useState<string>('')
    const [addDataPelanggan, setAddDataPelanggan] = useState({
        name: "",
        phone: ""
    })
    const [dataPelanggan, setDataPelanggan] = useState<any>([])
    const [showData, setShowData] = useState<boolean>(false)

    const openModal = () => {
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false)
    }

    const showPackageCuciKering = async () => {
        try {
            const response = await fetch
        } catch (error) {

        }
    }

    const handleSearchNomorHandphone = async (e: MouseEvent<HTMLSpanElement>) => {
        try {
            e.preventDefault()
            const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/v1/api/customer/${noHP}`)
            if (res.status !== 200) {
                toast.error("Nomor Handphone tidak ditemukan")
            }
            const data = await res.json()

            setShowData(true)
            setDataPelanggan(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleAddPelanggan = async (e: MouseEvent<HTMLSpanElement>) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URI + '/v1/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + cookies.get('token')
                },
                body: JSON.stringify({
                    name: addDataPelanggan.name,
                    phone: addDataPelanggan.phone,
                })

            })
            if (response.ok) {
                // alert('data sudah ditambahkan')
                toast.success('data sudah ditambahkan')
                setAddPelanggan(false)
            } else {
                toast.error('data gagal ditambahkan')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const submitPelanggan = async (e: MouseEvent<HTMLSpanElement>) => {
        try {

        } catch (error) {

        }
    }
    useEffect(() => {

    }, [])

    return (
        <DashboardComponents>
            <div className='rounded-lg bg-neutral-200 p-2 mt-5 mx-5 '>
                <span className='text-2xl font-bold '>Cuci Kering</span>
                <div className='mt-5 flex flex-row justify-between items-center rounded-lg'>
                    <span>Tambah Orderan</span>
                    <span onClick={openModal} className='font-bold'><FaPlus />
                    </span>
                </div>

            </div>
            <div className='rounded-lg bg-white p-2 mx-5 '>
                <span className='text-2xl font-bold text-black'>Tabel Orderan</span>
            </div>

            <ModalComponent isOpen={isOpenModal} isClosed={closeModal}>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col '>
                        <div className='flex justify-between'>
                            <span>Tambah Pesanan</span>
                            <span onClick={closeModal}>Tutup</span>
                        </div>
                        <div className='flex flex-row justify-between gap-5 mt-3 bg-slate-200 rounded-md p-4'>
                            <div className='flex flex-col gap-1'>
                                <label className='text-black' htmlFor="">Unit(Kg)</label>
                                <input type="text" className='w-24 bg-white input input-bordered' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-black' htmlFor="">Harga</label>
                                <input value={4500} type="text" className='w-24 input input-bordered' disabled />
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col bg-white text-black p-2 rounded-md '>
                        <div className='flex flex-row-reverse items-center justify-between gap-2 '>
                            <span onClick={(e: MouseEvent<HTMLSpanElement>) => {
                                e.preventDefault()
                                setCariPelanggan(!cariPelanggan)
                            }}>
                                <IoSearch />
                            </span>

                            <span className='text-neutral-800' >Cari Pelanggan</span>

                        </div>
                        {
                            cariPelanggan && <div className=' mt-4 flex flex-col gap-2'>
                                <input value={noHP} onChange={(e) => setNoHP(e.target.value)} type="text" placeholder='cari pelanggan via nomor handphone' className='input text-white' />
                                <button className='btn ' onClick={handleSearchNomorHandphone}>Cari</button>
                                {
                                    showData && dataPelanggan ? (
                                        <div className='mt-5 flex flex-col gap-2 bg-slate-300 p-2 rounded-md'>
                                            <span className='flex flex-row gap-2 items-center'><FaUser size={25} />
                                                {dataPelanggan.name}</span>
                                            <span className='flex flex-row gap-2'><FaWhatsapp size={25} />
                                                {dataPelanggan.phone}</span>
                                        </div>
                                    )
                                        : <div></div>
                                }
                            </div>

                        }
                    </div>

                    <div className='flex flex-col bg-white text-black p-2 rounded-md'>
                        <div className='flex flex-row gap-2 items-center justify-between'>
                            <span>Tambah Pelanggan Baru</span>
                            <span onClick={(e) => {
                                setAddPelanggan(!addPelanggan)
                            }}><FaPlus /></span>
                        </div>
                        {
                            addPelanggan &&
                            <form action="" className='mt-5 flex gap-3 flex-col'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className='text-md'>Nama</label>
                                    <input value={addDataPelanggan.name} onChange={(e) => {
                                        setAddDataPelanggan({
                                            ...addDataPelanggan,
                                            name: e.target.value
                                        })
                                    }} type="text" className='input text-white' placeholder='isi nama pelanggan' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="">Nomor Handphone</label>
                                    <input value={addDataPelanggan.phone} onChange={(e) => {
                                        setAddDataPelanggan({
                                            ...addDataPelanggan,
                                            phone: e.target.value
                                        })
                                    }} type="text" className='input text-white' placeholder='isi nomor handphone' />
                                </div>
                                <span className='btn' onClick={handleAddPelanggan}>Submit</span>
                            </form>
                        }
                    </div>
                    <span className='btn'>Submit</span>
                </div>
            </ModalComponent>
        </DashboardComponents>
    )
}

export default CuciKeringPage