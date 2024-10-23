"use client";

import DashboardComponents from "@/component/DashboardComponents";
import { redirect } from "next/navigation";
import React, { FC, Fragment, Suspense, useEffect } from "react";
import { FaTshirt } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { TbIroning3 } from "react-icons/tb";
import { RiShirtFill } from "react-icons/ri";
import Link from "next/link";

const DashboardPage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardComponents>
        <article className="">
          <section className="rounded-lg mx-3 my-5">
            <div className="flex flex-col text-black">
              <span className="text-2xl">Welcome Back!</span>
              <span className="text-lg font-semibold">Layanan CuciYuk!</span>
            </div>
            <div className=" grid grid-cols-4 gap-3 mt-10">
              <Link
                href={"/cuci-kering"}
                className="bg-cyan-800 p-2 card flex flex-col items-center justify-center"
              >
                <GiWashingMachine
                  size={50}
                  className="w-50 h-50 justify-self-center"
                />
                <span className="text-xs">Cuci Bersih </span>
              </Link>
              <div className="bg-cyan-800 p-2 card flex flex-col items-center justify-center">
                <FaTshirt size={50} className="w-50 h-50 justify-self-center" />
                <span className="text-xs">Cuci Kering </span>
              </div>
              <div className="bg-cyan-800 p-2 card flex flex-col items-center justify-center">
                <RiShirtFill
                  size={50}
                  className="w-50 h-50 justify-self-center"
                />
                <span className="text-xs">Cuci+Setrika </span>
              </div>
              <div className="bg-cyan-800 p-2 card flex flex-col items-center justify-center">
                <TbIroning3
                  size={50}
                  className="w-50 h-50 justify-self-center"
                />
                <span className="text-xs">Setrika </span>
              </div>
            </div>
          </section>
        </article>
      </DashboardComponents>
    </Suspense>
  );
};

export default DashboardPage;
