"use client";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import React, {
  FC,
  Fragment,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AppDispatch, RootState } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { Login, LoginAction } from "../redux/slice/auth";

type loginForm = {
  email: string;
  password: string;
};

const Home: React.FC = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const load = useSelector((state: RootState) => state.auth.isLoading);
  console.log(load);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>();

  const onsubmit = async (data: loginForm) => {
    try {
      const res = await dispatch(LoginAction(data));
      console.log(res);
      if (LoginAction.fulfilled.match(res)) {
        toast.success("Login Success");

        // router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <main className="flex flex-col min-h-screen justify-center items-center">
        <form className="m-auto flex flex-col gap-5">
          <div className="text-center">
            <span className="text-lg font-semibold">Login</span>
          </div>
          <div className="">
            <Label>Email</Label>
            <Input
              {...register("email", { required: true })}
              name="email"
              type="mail"
              placeholder="etc frieren@mail.com"
              size={30}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>
          <div className="">
            <Label>Password</Label>
            <Input
              {...register("password", { required: true })}
              name="password"
              type="password"
              placeholder="input your password"
              size={30}
            />
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <Button onClick={handleSubmit(onsubmit)} className="text-center">
            {load ? "Loading..." : "Login"}
          </Button>
        </form>
      </main>
    </Suspense>
  );
};

export default Home;
