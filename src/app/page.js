import Image from 'next/image'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'
import Hero from './Components/HeroPage'
import Second from './Components/SecondHero'
import Skill from './Components/SkillsPage'
import Service from './Components/Service'
import FormContact from './services/FormContact'

export default function Home() {
  
  return (
    <main className='min-h-screen'>
      <Navbar/>
      {/* <div className='min-h-[18.9rem]'> */}
      <div className=''>
        <div id='home' className=''><Hero/></div>
        <div id='about' className='min-h-screen'><Second/></div>
        <div className=''><Skill/></div>
        <div id='service' className='min-h-screen '><Service/></div>
        <div id='project' className='transition-all border h-screen text-4xl flex justify-center items-center'>Pricing</div>
        <div id=''><FormContact/></div>
      </div>
      <Footer/>
    </main>
  )
}
 