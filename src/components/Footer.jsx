import { useReveal } from '../hooks/useReveal'

const WPP = 'https://wa.me/5511993165681?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Duda%20Souza%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.'
const IG = 'https://instagram.com/dudasouza.voz'

function IgIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
}

function WppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Footer() {
  const ref = useReveal({ threshold: 0.1 })
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div
        ref={ref}
        className="wrap reveal"
        style={{ paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)', paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}
      >
        <span id="contato" className="scroll-anchor" aria-hidden="true" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start order-1">
            <a href="#" className="flex items-baseline gap-0.5 hover:opacity-70 transition-opacity">
              <span className="text-[1.8rem] text-[#FF5E00] tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>DUDA</span>
              <span className="text-[1.8rem] text-white tracking-tighter" style={{ fontFamily: 'Anton, sans-serif' }}>SOUZA</span>
            </a>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mt-[-5px]">
              Músico Profissional
            </span>
          </div>

          <div className="order-3 md:order-2">
            <p className="text-white/30 font-light tracking-wide text-center" style={{ fontSize: '0.8rem' }}>
              © {year} Duda Souza <span className="mx-2 text-white/10">|</span> Todos os direitos reservados
            </p>
          </div>

          <div className="flex items-center gap-6 order-2 md:order-3">
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="text-white/50 hover:text-white transition-colors duration-300">
              <IgIcon />
            </a>
            <a href={WPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="text-white/50 hover:text-white transition-colors duration-300">
              <WppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
