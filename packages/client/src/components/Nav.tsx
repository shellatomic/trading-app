'use client';
import {getServerSession} from 'next-auth/next';
// import { authOptions } from "./api/auth/[...nextauth]"
import {useSession, signIn, signOut} from 'next-auth/react';
import Login from '../pages/auth/Login';
import Logged from '../pages/auth/Logged';
import Link from 'next/link';
import { useState } from 'react';
import ButtonLink from "./buttonLink";

const tradingOptions=[
  "NASDAQ",
  "New York Stock Exchange",
  "London Stock Exchange", 
  "The Stock Exchange of Hong Kong", 
  "Shanghai Stock Exchange",
  "Shenzen Stock Exchange", 
  "Toronto Stock Exchange", 
  "Tokyo Stock Exchange", 
  "Bombay Stock Exchange", 
  "National Stock Exhange of India", 
  "Frankfurt Stock Exchange", 
  "Six Swiss Exchange", 
  "Australian Securities Exchange", 
  "Joahnesburg Stock Exchange", 
  "Nasdaq Tallinn", 
  "Warsaw Stock Exchange", 
  "Euronext Lisbon",
  "Moscow Exchange"
]

export default function Nav() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-8 bg-white p-3 shadow-md md:divide-x-2 ">
        <Link href={'/'} className='mr-1'>
          <h1 className="font-bold text-lg">SendIt.</h1>
        </Link>
        <div className="block md:hidden">
          {!isOpen ?
            <button className={`flex items-center px-3 py-2 border rounded text-slate-200 dark:text-white border-white-400 dark:border-slite dark:hover:texte-blue} hover:border-white`}
              onClick={() => { setIsOpen(!isOpen) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </button>
            :
            <button className={`flex items-center px-3 py-2 border rounded text-slate-200 dark:text-white border-white-400 dark:border-slite dark:hover:texte-blue} hover:border-white`}
              onClick={() => { setIsOpen(!isOpen) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>

            </button>
          }
        </div>
        <div className={`${isOpen ? 'md:block' : 'sm:hidden'} ease-linear transition-all duration-150 ease-in ease-out delay-300 block w-full flex-grow md:flex md:items-end md:w-auto md:flex md:justify-end`}>
          <select className='border border-gray-300 py-1 px-1 mx-2 bg-white rounded divide-x- focus:outline-none focus:border-blue-500 '>
            {tradingOptions.map((value,key)=>{
              return <option key={key} className='block p-1'>
                {value} 
              </option>
            })}
          </select>
          <ul className="flex items-center gap-6 sm:m-3 md:m-0">
            {!session?.user && <Login />}
            {session?.user && <Logged image={session.user.image || ''} />}
            <li><ButtonLink label="Create an account" linkref="/register" /></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
 