import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/LayoutComponents/NavigationBar";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>        
        <div className = "bg-slate-200 mx-16">
          <div className="pt-10">
            <div className="flex justify-center font-bold text-7xl">
              넷제로 달성을 위해 필요한
            </div>
            <div className="flex justify-center pt-2 font-bold text-7xl">
              Actionable Plan의 모든 것
            </div>
            <div className="flex justify-center pt-4 font-semibold text-xl">
              넷제로 달성을 위해 필요한 Actionable Plan의 모든 것
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-full mx-4 w-[15%] h-12">
              체험하기
            </button>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded-full mx-4 w-[15%] h-12">
              데모신청
            </button>
          </div>
          <div className = "flex justify-center">
          <img src = "https://watershed.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.f2c8f15e.png&w=1920&q=75" className = "w-[63%] mt-4 "/>

          </div>
        </div>

        <section className="sticky inset-x-0 top-[110px] left-0 flex justify-center border-2 w-[100%] bg-white">
          <div className = "p-4 px-12 cursor-pointer">
            Measure
          </div>
          <div className = "p-4 px-12 cursor-pointer">
            Reduce
          </div>
          <div className = "p-4 px-12 cursor-pointer">
            Remove
          </div>
          <div className = "p-4 px-12 cursor-pointer">
            Report
          </div>
        
        </section>

        <div className="h-[100vh] mx-16 bg-slate-200">
         <div className = "grid grid-cols-2 gap-4 border-4">
           <div className = "h-[100vh] border-4 bg-black ml-12"></div>
           <div className = "h-[100vh] border-4 bg-black mr-12"></div>

         </div>
        </div>

        <div className="h-[100vh] mx-16">Reduce</div>

        <div className="h-[100vh] mx-16">Remove</div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
