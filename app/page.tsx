import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Sidebar from './components/Sidebar'


export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
    </main>
  )
}
