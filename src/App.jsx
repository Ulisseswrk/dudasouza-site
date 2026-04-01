import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Credencial from './components/Credencial'
import Sobre from './components/Sobre'
import Repertorio from './components/Repertorio'
import Depoimentos from './components/Depoimentos'
import Eventos from './components/Eventos'
import Galeria from './components/Galeria'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Credencial />
        <Sobre />
        <Repertorio />
        <Depoimentos />
        <Eventos />
        <Galeria />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
