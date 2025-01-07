// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Login from "@/components/Login";
import Dashboard from "./dashboard/Dashboard";
import { useSession } from "next-auth/react";
import scss from './login/Home.module.scss'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  const { data: session } = useSession()
  return (
    <div
    >
      <main className={scss.main}>
       {/* <Header/> */}
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
