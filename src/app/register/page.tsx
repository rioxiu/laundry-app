'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { IRegister } from '../types/user'

const Register = () => {

    const [register, setRegister] = useState<IRegister>({
        name: '',
        email: '',
        password: '',
    })

    const handleRegister = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/v1/api/register`, {
                body: JSON.stringify({
                    name: register.name,
                    email: register.email,
                    password: register.password
                })
            })
            const data = await response.json()
        } catch (error) {

        }
    }
    return (
        <Fragment>
            <main className="flex flex-col min-h-screen justify-center items-center">
                <form onSubmit={handleRegister} className="m-auto flex flex-col gap-5">
                    <div className="text-center ">
                        <span className=" text-2xl font-semibold">Register</span>
                    </div>
                    <div className=" grid grid-cols-1 space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input onChange={(e) => setRegister({
                            ...register,
                            name: e.target.value
                        })} size={30} type="text" id="name" placeholder="name" />
                    </div>
                    <div className=" grid grid-cols-1 space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input onChange={(e) => setRegister({
                            ...register,
                            email: e.target.value
                        })} size={30} type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input onChange={(e) => setRegister({
                            ...register,
                            password: e.target.value
                        })} size={30} type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="space-y-2 ">
                        <Label htmlFor="password">Confirm Password</Label>
                        <Input type="password" id="password" placeholder="Confirm Password" />
                    </div>
                    <Link href="/login" className="text-xs text-blue-500 hover:text-blue-800 grid text-end">Sudah punya akun? Login</Link>
                    <div className="flex flex-col gap-2">
                        <Button onClick={() => { }} className="btn btn-primary">Register</Button>
                    </div>
                </form>
            </main>

        </Fragment>
    )
}

export default Register