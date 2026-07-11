export default function Portfolio() {
  const projects = [
    {
      title: 'Landing Page — Serviços de Manutenção',
      category: 'Landing Page',
      description: 'Página de conversão para empresa de manutenção residencial. Aumento de 40% em chamadas após o lançamento.',
      tags: ['Conversão', 'Mobile-first', 'WhatsApp'],
      gradient: 'from-brand-600/30 to-accent-500/30',
      mockup: 'service',
    },
    {
      title: 'Site Institucional — Consultoria',
      category: 'Site Institucional',
      description: 'Presença digital completa para consultório. Agendamento online e integração com Google Maps.',
      tags: ['Institucional', 'Agendamento', 'SEO Local'],
      gradient: 'from-accent-500/30 to-brand-600/30',
      mockup: 'business',
    },
    {
      title: 'Agente de IA — Atendimento',
      category: 'Automação IA',
      description: 'Chatbot inteligente para atendimento 24/7. Responde dúvidas, qualifica leads e agenda consultas automaticamente.',
      tags: ['IA', 'Automação', 'Chatbot'],
      gradient: 'from-accent-400/30 to-brand-500/30',
      mockup: 'ai',
    },
  ]

  const renderMockup = (type) => {
    switch (type) {
      case 'service':
        return (
          <div className="w-full h-full flex flex-col">
            <div className="h-8 bg-white/5 flex items-center gap-1.5 px-3">
              <div className="w-2 h-2 rounded-full bg-red-400/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 p-4 flex flex-col gap-3">
              <div className="h-6 w-3/4 bg-accent-400/30 rounded" />
              <div className="h-3 w-full bg-white/10 rounded" />
              <div className="h-3 w-2/3 bg-white/10 rounded" />
              <div className="mt-2 h-8 w-32 bg-accent-400/40 rounded-lg" />
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="h-12 bg-white/5 rounded" />
                <div className="h-12 bg-white/5 rounded" />
                <div className="h-12 bg-white/5 rounded" />
              </div>
            </div>
          </div>
        )
      case 'business':
        return (
          <div className="w-full h-full flex flex-col">
            <div className="h-10 bg-white/5 flex items-center px-4 gap-4">
              <div className="h-3 w-12 bg-accent-400/40 rounded" />
              <div className="h-2 w-16 bg-white/10 rounded ml-auto" />
              <div className="h-2 w-16 bg-white/10 rounded" />
              <div className="h-2 w-16 bg-white/10 rounded" />
            </div>
            <div className="flex-1 p-5 flex flex-col gap-3">
              <div className="h-8 w-1/2 bg-accent-400/30 rounded" />
              <div className="h-3 w-3/4 bg-white/10 rounded" />
              <div className="h-3 w-2/3 bg-white/10 rounded" />
              <div className="mt-3 flex gap-3">
                <div className="flex-1 h-20 bg-white/5 rounded-lg" />
                <div className="flex-1 h-20 bg-white/5 rounded-lg" />
              </div>
              <div className="mt-1 h-8 w-36 bg-accent-400/40 rounded-lg" />
            </div>
          </div>
        )
      case 'portfolio':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
            <div className="w-12 h-12 rounded-full bg-accent-400/30" />
            <div className="h-4 w-32 bg-accent-400/30 rounded" />
            <div className="h-2 w-24 bg-white/10 rounded" />
            <div className="mt-2 grid grid-cols-2 gap-2 w-full">
              <div className="h-10 bg-white/5 rounded" />
              <div className="h-10 bg-white/5 rounded" />
              <div className="h-10 bg-white/5 rounded" />
              <div className="h-10 bg-white/5 rounded" />
            </div>
          </div>
        )
      case 'ai':
        return (
          <div className="w-full h-full flex flex-col p-4 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-accent-400/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent-400/60" />
              </div>
              <div className="h-2 w-20 bg-white/10 rounded" />
            </div>
            <div className="space-y-2 mt-2">
              <div className="h-6 w-3/4 bg-white/5 rounded-lg rounded-bl-none" />
              <div className="h-6 w-2/3 bg-accent-400/20 rounded-lg rounded-br-none ml-auto" />
              <div className="h-6 w-1/2 bg-white/5 rounded-lg rounded-bl-none" />
              <div className="h-6 w-3/5 bg-accent-400/20 rounded-lg rounded-br-none ml-auto" />
            </div>
            <div className="mt-auto h-8 bg-white/5 rounded-lg flex items-center px-3">
              <div className="h-2 w-20 bg-white/10 rounded" />
              <div className="ml-auto w-5 h-5 bg-accent-400/40 rounded" />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <span className="tag bg-accent-500/10 text-accent-400 border border-accent-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            Portfólio
          </span>
          <h2 className="section-title mt-4 text-white">
            Projetos que <span className="gradient-text">geram resultado</span>
          </h2>
          <p className="section-subtitle">
            Veja exemplos de sites e soluções digitais que criei para negócios como o seu.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="glass-card-hover overflow-hidden group">
              {/* Mockup preview */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden border-b border-white/[0.06]`}>
                <div className="absolute inset-3 rounded-lg bg-[#000a12]/80 overflow-hidden border border-white/[0.08] group-hover:scale-[1.02] transition-transform duration-300">
                  {renderMockup(project.mockup)}
                </div>
                <div className="absolute top-3 right-3 tag bg-black/40 text-accent-300 border border-accent-500/20 backdrop-blur-sm">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag bg-white/5 text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contato" className="btn-outline">
            Quero um projeto assim
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
