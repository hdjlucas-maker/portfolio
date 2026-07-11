import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Services from './components/Services'
import Differentiators from './components/Differentiators'
import Portfolio from './components/Portfolio'
import Models from './components/Models'
import About from './components/About'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Differentiators />
        <Portfolio />
        <Models />
        <About />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
