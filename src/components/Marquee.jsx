const items = [
  'MPB', 'Reggae', 'Rock Nacional', 'Chico Buarque', 'Gilberto Gil',
  'Titãs', 'Legião Urbana', 'Raul Seixas', 'Caetano Veloso',
  'Charlie Brown Jr.', 'Natiruts', 'Cidade Negra', 'Os Paralamas',
  'Capital Inicial', 'Djavan', 'Marisa Monte',
]

export default function Marquee() {
  const track = [...items, ...items]

  return (
    <div className="bg-[#111] overflow-hidden border-y border-white/5"
      style={{ paddingBlock: '1.1rem' }}>
      <div className="animate-marquee">
        {track.map((item, i) => (
          <span key={i} className="label inline-flex items-center text-white/75"
            style={{ fontSize: '0.72rem', letterSpacing: '0.2em', marginRight: '0' }}>
            <span className="text-[#C8264A] mx-5 text-xs">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}