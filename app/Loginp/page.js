import React from 'react'
import Login from '../components/Login'
import Link from 'next/link'
import Signingup from '../signs/page'
import Nav from '../components/nav'
   

const Loga = () => {
  return (
    <main className="flex w-screen h-screen  flex-col items-center   text-black">
    <Nav/>
    <Login/>
    
    </main>
  )
}

export default Loga
