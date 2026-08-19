import Header from './components/Header'
import Hero from './components/Hero'
import Credencial from './components/Credencial'
import Repertorio from './components/Repertorio'
import Depoimentos from './components/Depoimentos'
import Servicos from './components/Servicos'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FadeSection from './components/FadeSection'

export default function App() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Hero />
          <FadeSection><Credencial /></FadeSection>
          <FadeSection><Repertorio /></FadeSection>
          <FadeSection><Depoimentos /></FadeSection>
          <FadeSection><Servicos /></FadeSection>
          <FadeSection><CTA /></FadeSection>
        </main>
        <Footer />
      </div>
    </>
  )
}
