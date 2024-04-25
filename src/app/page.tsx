"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";



const Home: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {

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

        localStorage.setItem('jsonwebtoken', token)
        sessionStorage.setItem('jsonwebtoken', token)
        router.push('/dashboard')

      }
    } catch (error) {
      console.log(error)
    }
  }, [email, password])

  const fetchURL = useCallback(async () => {


  }, [])
  return (
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
  );
}


export default Home;