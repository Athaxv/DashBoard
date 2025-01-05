import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";
import Dashboard from "./dashboard/Dashboard";
import { useSession } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { data: session } = useSession()
  return (
    <div
      className={`${geistSans.variable} w-full ${geistMono.variable}   justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <Header/>
       {
        session && (
          <>
          <SideMenu/>
          <Dashboard/>
          </>
        )
       }
       <Login/>
      </main>
    </div>
  );
}
