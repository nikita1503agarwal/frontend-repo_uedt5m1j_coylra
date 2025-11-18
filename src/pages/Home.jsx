import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { IntroSections, CTA } from '../components/Sections'
import Footer from '../components/Footer'

function Home(){
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <IntroSections />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
