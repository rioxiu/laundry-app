"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC, Suspense, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import { cookies } from "next/headers";
import { setCookies } from "./middleware/cookies";
import { useCookies } from "next-client-cookies";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();

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
              <Input type="mail" placeholder="etc frieren@mail.com" size={30} />
            </div>
            <div className="">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="input your password"
                size={30}
              />
            </div>
            <Button className="text-center">Login</Button>
          </section>
        </main>
      </Suspense>
    </>
  );
};

export default Home;
