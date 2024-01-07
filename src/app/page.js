import Image from 'next/image'
import Navbar from './Components/Navbar'
import Footer from './Components/footer'
import Hero from './Components/HeroPage'
import Second from './Components/SecondHero'
import Skill from './Components/SkillsPage'
import Service from './Components/Service'
import FormContact from './Components/FormContact'
import Project from './Components/Project'
// import './Components/style/hero.css'


export default function Home() { 
  
  return (
    <main className='min-h-screen '>
      <Navbar/>
      {/* <div className='min-h-[18.9rem]'> */}
      <div className=''>
        <div id='home'><Hero/></div> 
        <div id='about' ><Second/></div>
        <div><Skill/></div>  
        <div id='project' className='min-h-screen'><Project/></div>
        <div id='service' ><Service/></div>
        <div id='' className=''><FormContact/></div>
      </div> 
      <Footer/>
    </main>
  )
}
 
// mongodb+srv://faizanalam:<password>@nextjsdb.ona9pmx.mongodb.net/?retryWrites=true&w=majority