import Image from 'next/image'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'
import Hero from './Components/HeroPage'
import Second from './Components/SecondHero'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar/>
      <div className='min-h-[18.9rem]'>
        <div id='home' className='min-h-screen'><Hero/></div>
        <div id='about' className='min-h-screen'><Second/></div>
        <div id='price' className='transition-all border h-screen text-4xl flex justify-center items-center'>Pricing</div>
      </div>
      <Footer/>
    </main>
  )
}
 