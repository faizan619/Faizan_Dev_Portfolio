import Image from 'next/image'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <div className='h-[18.9rem]'>hello</div>
      <Footer/>
    </main>
  )
}
 