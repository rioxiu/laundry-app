'use client'
import { useCookies } from 'next-client-cookies'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import React, { Fragment, Suspense, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from 'next/link'
import { login, register } from '../schema/user'
const LoginPage = () => {
    const cookies = useCookies()
    // const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<{
        email?: string,
        password?: string
    }>({})

    useEffect(() => {
        if (cookies.get('token'))
            // redirect('/dashboard')
            fetchURL()
    }, [])

    const validateForm = () => {
        const result = login.safeParse({
            email: email,
            password: password
        })

        if (!result.success) {
            const newErrors: {
                email?: string,
                password?: string
            } = {}
            result.error.errors.forEach(error => {
                if (error.path[0] === 'email') {
                    newErrors.email = error.message
                }
                if (error.path[0] === 'password') {
                    newErrors.password = error.message
                }
            })

            setErrors(newErrors)
            return false
        }
        setErrors({})
        return true
    }
    const handleLogin = useCallback(async () => {
        if (!validateForm) {
            return
        }
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/v1/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            if (res.ok) {
                const data = await res.json()
                const token = data.token
                toast.success('Login Success')
                cookies.set("token", token)
                // router.push('/dashboard')

            } else {
                toast.error('Login Failed')
            }
        } catch (error) {
            console.log(error)
        }
    }, [email, password])

    const fetchURL = useCallback(async () => {


    }, [])
    return (
        <Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <main className="flex flex-col min-h-screen justify-center items-center">
                    <form className="m-auto flex flex-col gap-5">
                        <div className="text-center">
                            <span className=" text-neutral-800 text-2xl font-semibold">Login</span>
                        </div>
                        <div className="">
                            <Label>Email</Label>
                            <Input onChange={(e) => setEmail(e.target.value)} value={email} type="mail" placeholder="etc frieren@mail.com" size={30} />
                        </div>
                        <div className="">
                            <Label>Password</Label>
                            <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="input your password" size={30} />
                            <Link href="/register" className='text-xs text-blue-500 hover:text-blue-800 text-end grid mt-2' >Belum punya akun?</Link>
                        </div>
                        <Button onClick={handleLogin} className="text-center">Login</Button>
                    </form>
                </main>
            </Suspense>
        </Fragment>

    );
}

export default LoginPage