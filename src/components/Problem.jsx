export default function Problem() {
  const problems = [
    {
      title: 'Sem site, sem credibilidade',
      description: 'Hoje, 87% dos consumidores pesquisam online antes de comprar. Se você não aparece, você não existe.',
      stat: '87%',
      statLabel: 'pesquisam antes de comprar',
    },
    {
      title: 'Perdendo vendas todos os dias',
      description: 'Cada dia sem presença digital é dinheiro indo para o concorrente que já está online.',
      stat: 'R$ 2.4k',
      statLabel: 'perda média mensal',
    },
    {
      title: 'Invisível no Google',
      description: 'Seu concorrente aparece na primeira página e você não. Clientes escolhem quem encontram primeiro.',
      stat: '75%',
      statLabel: 'só clicam no 1º resultado',
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <span className="tag bg-red-500/10 text-red-400 border border-red-500/20">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            O Problema
          </span>
          <h2 className="section-title mt-4 text-white">
            Você está <span className="text-red-400">perdendo clientes</span> agora mesmo
          </h2>
          <p className="section-subtitle">
            Negócios sem presença digital perdem vendas todos os dias — e nem percebem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <div
              key={i}
              className="glass-card p-7 border-red-500/10 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-400/80">{item.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{item.statLabel}</div>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Solution bridge */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="text-sm text-gray-500 uppercase tracking-widest">A solução é simples</div>
            <svg className="w-10 h-10 text-accent-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
