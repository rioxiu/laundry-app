"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { useCallback, useState } from "react";

export default function Home() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    // console.log(password)
  }

  const handleLogin = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.API_URI}/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        alert('Login Success')
      } else {
        alert('Login Failed')
      }
    } catch (error) {

    }
  }, [])
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <section className="m-auto flex flex-col gap-5">
        <div className="text-center">
          <span className="text-lg font-semibold">Login</span>
        </div>
        <div className="">
          <Label>Email</Label>
          <Input onChange={handleEmail} value={email} type="mail" placeholder="etc frieren@mail.com" size={30} />
        </div>
        <div className="">
          <Label>Password</Label>
          <Input onChange={handlePassword} value={password} type="password" placeholder="input your password" size={30} />
        </div>
        <Button onClick={handleLogin} className="text-center">Login</Button>
      </section>
    </main>
  );
}
