import { useEffect, useState } from 'react'

const WPP = 'https://wa.me/5511999999999'
const IG = 'https://instagram.com/dudasouza'

const linksLeft = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Repertório', href: '#repertorio' },
  { label: 'Eventos', href: '#eventos' },
]

const linksRight = [
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

function InstagramIcon({ size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon({ size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'top-0 bg-black/90 py-3 backdrop-blur-md shadow-lg'
          : 'top-5 bg-transparent py-5'
      }`}
    >
      {/* Aumentado o padding horizontal aqui: px-10 no mobile */}
      <div className="mx-auto flex w-full items-center justify-between px-10 sm:px-12 md:px-12 lg:px-16">
        
        {/* ESQUERDA */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-12">
          {linksLeft.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-['Epilogue'] text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white transition duration-200 hover:text-[#C8264A]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Espaçador para Mobile */}
        <div className="flex flex-1 md:hidden" />

        {/* CENTRO */}
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="relative z-50 flex shrink-0 flex-col items-center justify-center text-center leading-none"
        >
          <span className="font-['Anton'] text-[1.8rem] uppercase tracking-[0.08em] text-[#C8264A] sm:text-[2.3rem]">
            DUDA
          </span>
          <span className="font-['Anton'] text-[1.8rem] uppercase tracking-[0.08em] text-white sm:text-[2.3rem]">
            SOUZA
          </span>
        </a>

        {/* DIREITA */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-12">
          {linksRight.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-['Epilogue'] text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white transition duration-200 hover:text-[#C8264A]"
            >
              {l.label}
            </a>
          ))}

          {/* Ícones sociais sem a divisória */}
          <div className="ml-2 flex items-center gap-4 lg:ml-4">
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white transition-all duration-200 hover:-translate-y-[2px] hover:text-[#C8264A]"
            >
              <InstagramIcon size={26} />
            </a>

            <a
              href={WPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white transition-all duration-200 hover:-translate-y-[2px] hover:text-[#C8264A]"
            >
              <WhatsAppIcon size={26} />
            </a>
          </div>
        </div>

        {/* Toggle do Menu Mobile - Adicionado pr-2 para empurrar um pouco mais para dentro */}
        <div className="relative z-50 flex flex-1 justify-end pr-2 md:hidden">
          <button
            className="group flex h-12 w-12 items-center justify-center transition-all duration-300 focus:outline-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-[2px] w-6 bg-white transition-all duration-300 ease-in-out ${
                  open ? 'translate-y-[9px] rotate-45' : 'translate-y-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-[2px] w-6 bg-white transition-all duration-200 ease-in-out ${
                  open ? 'opacity-0 scale-x-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[18px] h-[2px] w-6 bg-white transition-all duration-300 ease-in-out ${
                  open ? '-translate-y-[9px] -rotate-45' : 'translate-y-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* OVERLAY Menu Mobile - Também atualizado para px-10 para alinhar perfeitamente */}
      <div
        className={`fixed inset-0 -z-10 flex h-[100dvh] w-full flex-col justify-center bg-black/98 px-10 transition-all duration-500 md:hidden ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {[...linksLeft, ...linksRight].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-['Anton'] text-[2.5rem] uppercase leading-none tracking-[0.04em] text-white transition duration-200 hover:scale-105 hover:text-[#C8264A]"
            >
              {l.label}
            </a>
          ))}

          <div className="mt-8 flex items-center gap-8">
            <a
              href={IG}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-all duration-200 hover:scale-110 hover:text-[#C8264A]"
            >
              <InstagramIcon size={38} />
            </a>

            <a
              href={WPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-all duration-200 hover:scale-110 hover:text-[#C8264A]"
            >
              <WhatsAppIcon size={38} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}