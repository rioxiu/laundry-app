"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { FC, Suspense, useCallback, useEffect, useState } from "react";
import axios from 'axios'
import { redirect, useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { setCookies } from "./middleware/cookies";
import { useCookies } from "next-client-cookies";



const Home: React.FC = () => {
  const cookies = useCookies()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (cookies.get('token')) redirect('/dashboard')
    fetchURL()
  }, [])

  const handleLogin = useCallback(async () => {
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
        alert('berhasil login')

        // setCookies(token)
        // localStorage.setItem("jsonwebtoken", token)
        cookies.set("token", token)
        router.push('/dashboard')

      }
    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const fetchURL = useCallback(async () => {


  }, [])
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="flex flex-col min-h-screen justify-center items-center">
          <section className="m-auto flex flex-col gap-5">
            <div className="text-center">
              <span className="text-lg font-semibold">Login</span>
            </div>
            <div className="">
              <Label>Email</Label>
              <Input onChange={(e) => setEmail(e.target.value)} value={email} type="mail" placeholder="etc frieren@mail.com" size={30} />
            </div>
            <div className="">
              <Label>Password</Label>
              <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="input your password" size={30} />
            </div>
            <Button onClick={handleLogin} className="text-center">Login</Button>
          </section>
        </main>
      </Suspense>
    </>

  );
}


export default Home;