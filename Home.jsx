import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Levels from '../components/Levels'
import Pedagogy from '../components/Pedagogy'
import Gallery from '../components/Gallery'
import Leadership from '../components/Leadership'
import Pricing from '../components/Pricing'
import Registration from '../components/Registration'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Levels />
        <Pedagogy />
        <Gallery />
        <Leadership />
        <Pricing />
        <Registration />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
