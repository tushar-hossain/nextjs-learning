"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex gap-3 mt-5 mb-5">
      <button className="cursor-pointer" onClick={() => signIn()}>
        Login
      </button>
      <Link href="/register">Register</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
