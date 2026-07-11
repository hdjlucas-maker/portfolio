import { useEffect, useState } from 'react'

export default function Hero() {
  const [typed, setTyped] = useState('')
  const phrases = ['Desenvolvedor Web', 'Agente de IA', 'Técnico de Campo', 'Criador de Sites']
  const phraseIndex = 0

  useEffect(() => {
    let currentPhrase = 0
    let currentChar = 0
    let isDeleting = false

    const type = () => {
      const phrase = phrases[currentPhrase]

      if (isDeleting) {
        setTyped(phrase.substring(0, currentChar - 1))
        currentChar--
      } else {
        setTyped(phrase.substring(0, currentChar + 1))
        currentChar++
      }

      let delay = isDeleting ? 40 : 80

      if (!isDeleting && currentChar === phrase.length) {
        delay = 2000
        isDeleting = true
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false
        currentPhrase = (currentPhrase + 1) % phrases.length
        delay = 300
      }

      setTimeout(type, delay)
    }

    const timer = setTimeout(type, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] radial-glow" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] radial-glow opacity-50" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs text-gray-300 font-medium">Disponível para novos projetos · Rio de Janeiro</span>
        </div>

        {/* Main heading */}
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance animate-fade-in-up animate-delay-100">
          <span className="text-white">Seus clientes estão</span>
          <br />
          <span className="gradient-text">procurando você online.</span>
          <br />
          <span className="text-white">Eles te encontram?</span>
        </h1>

        {/* Typed subtitle */}
        <div className="mt-6 h-8 flex items-center justify-center animate-fade-in-up animate-delay-200">
          <span className="text-lg md:text-xl text-gray-400 font-mono">
            {typed}
            <span className="text-accent-400 animate-blink">|</span>
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-gray-400 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-300">
          Crio <span className="text-white font-medium">sites e landing pages que convertem</span> visitantes em clientes.
          Mais presença digital, mais vendas, menos clientes perdidos para a concorrência.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-500">
          <a href="#contato" className="btn-primary w-full sm:w-auto">
            <span>Quero mais clientes</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#portfolio" className="btn-outline w-full sm:w-auto">
            Ver projetos
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-700">
          {[
            { value: '3+', label: 'Anos de experiência' },
            { value: '100%', label: 'Foco em conversão' },
            { value: 'RJ', label: 'Atendimento local' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-700">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-accent-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
