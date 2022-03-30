import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />

      <h1 className="text-2xl font-bold">Opensea Blockchain Clone</h1>
    </div>
  )
}

export default Home
