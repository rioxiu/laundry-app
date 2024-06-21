'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { IFormDataRegister, IRegister } from '../types/user'
import toast from 'react-hot-toast'
import { SubmitHandler, useForm } from 'react-hook-form'

const Register = () => {

    // Tidak perlu lagi menggunakan useState biasa karena sudah menggunakan react-hook-form
    // const [register, setRegister] = useState<IRegister>({
    //     name: '',
    //     email: '',
    //     password: '',
    // })

    const { register, handleSubmit, formState: { errors } } = useForm<IFormDataRegister>()

    const handleRegister: SubmitHandler<IFormDataRegister> = async (data) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/v1/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    password: data.password
                })
            })

            if (response.ok) {
                // const data = await response.json()
                toast.success('Register success')
                // alert('Register success')
            } else if (response.status === 400 || 500 || 404) {
                toast.error('Register failed')
                // alert('Register failed')
            }
            // const data = await response.json()
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Fragment>
            <main className="flex flex-col min-h-screen justify-center items-center">
                <form onSubmit={handleSubmit(handleRegister)} className="m-auto flex flex-col gap-5">
                    <div className="text-center ">
                        <span className=" text-2xl font-semibold">Register</span>
                    </div>
                    <div className=" grid grid-cols-1 space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            {...register('name', { required: 'Name is required' })}
                            size={30}
                            type="text"
                            // onChange={(e) => setRegister({
                            //     ...register,
                            //     name: e.target.value
                            // })} 
                            id="name" placeholder="name" />
                        {errors.name && <span className='text-red-800 text-xs'>{errors.name.message}</span>}

                    </div>
                    <div className=" grid grid-cols-1 space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            {...register('email', { required: 'Email is required' })}
                            // onChange={(e) => setRegister({
                            //     ...register,
                            //     email: e.target.value
                            // })} 
                            size={30} type="email" id="email" placeholder="Email" />
                        {errors.email && <span className='text-red-800 text-xs'>{errors.email.message}</span>}

                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            {...register('password', { required: 'Password is required' })}
                            //  onChange={(e) => setRegister({
                            //     ...register,
                            //     password: e.target.value
                            // })} 
                            size={30} type="password" id="password" placeholder="Password" />
                        {errors.password && <span className='text-red-800 text-xs'>{errors.password?.message}</span>}

                    </div>
                    <div className="space-y-2 ">
                        <Label htmlFor="password">Confirm Password</Label>
                        <Input type="password" placeholder="Confirm Password" />
                    </div>
                    <Link href="/login" className="text-xs text-blue-500 hover:text-blue-800 grid text-end">Sudah punya akun? Login</Link>
                    <div className="flex flex-col gap-2">
                        {/* <Button onClick={handleRegister} className="btn btn-primary">Register</Button> */}
                        <span onClick={handleSubmit(handleRegister)} className='p-2 text-center bg-black rounded-lg text-white'>Register</span>
                    </div>
                </form>
            </main>

        </Fragment>
    )
}

export default Register