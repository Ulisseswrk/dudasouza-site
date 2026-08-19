import './ShinyText.css'

export default function ShinyText({
  text,
  speed = 2,
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  className = '',
}) {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        '--shiny-color': color,
        '--shiny-shine': shineColor,
        '--shiny-spread': `${spread}deg`,
        '--shiny-duration': `${speed}s`,
      }}
    >
      {text}
    </span>
  )
}
