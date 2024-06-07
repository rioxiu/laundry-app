
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { FC, Fragment, Suspense, useCallback, useEffect, useState } from "react";



const Home: React.FC = () => {
  return (<Fragment >
    <header className="p-4 text-black sticky bg-[#f5f4f3] w-full top-0 border-b-2 z-50 ">
      <nav className="flex flex-row justify-between">
        <div>
          <span>Wash Rio</span>
        </div>
        <ul className="flex flex-row text-xl  space-x-4">
          <Link className="hover:font-bold" href={'/about-us'}>About Us</Link>
          <Link className="hover:font-bold" href={'/contact'}>Contact</Link>
          <Link className="hover:font-bold" href={'/location'}>Location</Link>
        </ul>
      </nav>
    </header>
    <main className="my-10 text-black grid gap-2">
      <section className="m-auto mx-10 flex justify-between flex-row">
        <div className="flex flex-col  gap-8">
          <span className="text-5xl font-bold">Cuci Bersih dan Cuci Kering, <br /> dalam beberapa Menit! </span>
          <span className="text-xl font-semibold">Kami hadir memberikan jasa laundry kepada anda dengan sepenuh hati</span>
          <Link href="/login" className="p-2 bg-cyan-300 hover:bg-cyan-600 max-w-xs text-center rounded-lg">Daftar disini!</Link>
        </div>
        <div>
          <Image src={'/wash-machine.jpg'} width={500} height={500} className="rounded-sm" alt="wash-machine" />
        </div>
      </section>
      <section className="grid justify-center bg-cyan-200">
        <span className=" text-3xl font-semibold">Cara Kerja Kami</span>
      </section>

    </main>
    <footer>
    </footer>
  </Fragment>)
}


export default Home;