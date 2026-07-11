import { useState, useMemo } from 'react'

const MODELS = [
  {
    category: 'Landing Page',
    title: 'Landing Page de Conversão',
    pain: 'Tem um produto mas não consegue vender online?',
    solution: 'Página focada em transformar visitantes em clientes desde o primeiro clique.',
    icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
    gradient: 'from-brand-500/20 to-accent-500/20',
    image: '/templates/landing-page.jpg',
  },
  {
    category: 'E-commerce',
    title: 'Loja Virtual Completa',
    pain: 'Perde vendas por não vender na internet?',
    solution: 'Catálogo, carrinho, pagamento online e gestão de pedidos num só lugar.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    gradient: 'from-accent-500/20 to-brand-500/20',
    image: '/templates/ecommerce.jpg',
  },
  {
    category: 'Barbearia',
    title: 'Site para Barbearia',
    pain: 'Clientes não conseguem agendar horário?',
    solution: 'Agendamento online, galeria de cortes e integração com WhatsApp.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h8a4 4 0 004-4v-3a2 2 0 00-2-2h-4a2 2 0 00-2 2v3a4 4 0 01-4 4z',
    gradient: 'from-amber-500/20 to-accent-500/20',
    image: '/templates/barbearia.jpg',
  },
  {
    category: 'Clínica Médica',
    title: 'Site para Clínica Médica',
    pain: 'Pacientes não te encontram no Google?',
    solution: 'Agendamento online, especialidades, convênios e SEO local.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    gradient: 'from-red-500/20 to-brand-500/20',
    image: '/templates/clinica-medica.jpg',
  },
  {
    category: 'Clínica Estética',
    title: 'Site para Clínica Estética',
    pain: 'Procedimentos não aparecem para quem busca?',
    solution: 'Galeria de antes/depois, procedimentos e captação de leads.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'from-pink-500/20 to-accent-500/20',
    image: '/templates/clinica-estetica.jpg',
  },
  {
    category: 'Restaurante',
    title: 'Site para Restaurante',
    pain: 'Cardápio só no papel? Clientes não veem online?',
    solution: 'Cardápio digital, reservas e pedidos via WhatsApp.',
    icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.703 2.703 0 01-3 0 2.703 2.703 0 00-3 0 2.703 2.703 0 01-3 0 2.703 2.703 0 00-3 0 2.703 2.703 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1h12z',
    gradient: 'from-orange-500/20 to-amber-500/20',
    image: '/templates/restaurante.jpg',
  },
  {
    category: 'Imobiliária',
    title: 'Site para Imobiliária',
    pain: 'Imóveis espalhados e sem captação de leads?',
    solution: 'Catálogo de imóveis, filtros e captação automática de interessados.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    gradient: 'from-brand-500/20 to-cyan-500/20',
    image: '/templates/imobiliaria.jpg',
  },
  {
    category: 'Advocacia',
    title: 'Site para Advocacia',
    pain: 'Escritório sem autoridade online?',
    solution: 'Áreas de atuação, depoimentos e captação de clientes.',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9m6-9l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9V5a2 2 0 00-2-2H5a2 2 0 00-2 2v4',
    gradient: 'from-gray-500/20 to-brand-500/20',
    image: '/templates/advocacia.jpg',
  },
  {
    category: 'Salão de Beleza',
    title: 'Site para Salão de Beleza',
    pain: 'Agenda vazia? Clientes não conseguem marcar?',
    solution: 'Agendamento online, galeria de serviços e promoções.',
    icon: 'M7 8l10 10m0-10L7 18m5-13a2 2 0 100 4 2 2 0 000-4zm0 10a2 2 0 100 4 2 2 0 000-4z',
    gradient: 'from-pink-500/20 to-purple-500/20',
    image: '/templates/salao-beleza.jpg',
  },
  {
    category: 'Moda Masculina',
    title: 'Site para Moda Masculina',
    pain: 'Loja de roupa só no físico? Vende pouco?',
    solution: 'Catálogo visual, lookbook e checkout direto.',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    gradient: 'from-slate-500/20 to-accent-500/20',
    image: '/templates/moda-masculina.jpg',
  },
  {
    category: 'Perfumes',
    title: 'Site para Perfumaria',
    pain: 'Produtos não aparecem para quem busca?',
    solution: 'Catálogo com fragrâncias, avaliações e venda online.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    gradient: 'from-purple-500/20 to-pink-500/20',
    image: '/templates/perfumaria.jpg',
  },
  {
    category: 'InfoProduto',
    title: 'Site para InfoProduto',
    pain: 'Curso ou ebook sem vendas?',
    solution: 'Página de vendas com copy persuasiva e checkout integrado.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    gradient: 'from-accent-500/20 to-green-500/20',
    image: '/templates/infoproduto.jpg',
  },
  {
    category: 'Escola de Idiomas',
    title: 'Site para Escola de Idiomas',
    pain: 'Alunos não conhecem seus cursos?',
    solution: 'Cursos, matrícula online e depoimentos de alunos.',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    gradient: 'from-blue-500/20 to-accent-500/20',
    image: '/templates/escola-idiomas.jpg',
  },
  {
    category: 'Academia',
    title: 'Site para Academia',
    pain: 'Alunos não conhecem seus planos?',
    solution: 'Planos, aulas, personal e matrícula direto pelo site.',
    icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
    gradient: 'from-red-500/20 to-orange-500/20',
    image: '/templates/academia.jpg',
  },
]

const CATEGORIES = ['Todos', ...Array.from(new Set(MODELS.map((m) => m.category)))]

export default function Models() {
  const [active, setActive] = useState('Todos')

  const filtered = useMemo(() => {
    if (active === 'Todos') return MODELS
    return MODELS.filter((m) => m.category === active)
  }, [active])

  return (
    <section id="modelos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] radial-glow opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="tag bg-accent-500/10 text-accent-400 border border-accent-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            Modelos disponíveis
          </span>
          <h2 className="section-title mt-4 text-white">
            Escolha seu modelo e <span className="gradient-text">comece a vender hoje</span>
          </h2>
          <p className="section-subtitle">
            Mais de 100 páginas prontas por nicho. Você escolhe, eu personalizo com sua marca e seu site está no ar em dias.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-accent-500/20'
                  : 'bg-white/[0.03] text-gray-400 border border-white/[0.08] hover:border-accent-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((model, i) => (
            <div
              key={`${model.category}-${i}`}
              className="glass-card-hover overflow-hidden group flex flex-col"
            >
              {/* Preview area */}
              <div className={`relative h-40 bg-gradient-to-br ${model.gradient} overflow-hidden border-b border-white/[0.06]`}>
                <div className="absolute inset-3 rounded-lg bg-[#000a12]/70 border border-white/[0.06] flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-300 overflow-hidden">
                  <svg className="w-10 h-10 text-accent-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={model.icon} />
                  </svg>
                  {model.image && (
                    <img
                      src={model.image}
                      alt={model.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  )}
                </div>
                <div className="absolute top-3 right-3 tag bg-black/40 text-accent-300 border border-accent-500/20 backdrop-blur-sm text-[10px]">
                  {model.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-white">{model.title}</h3>
                <p className="mt-2 text-sm text-red-400/80 flex items-start gap-1.5">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                  {model.pain}
                </p>
                <p className="mt-2 text-sm text-gray-400 flex items-start gap-1.5">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {model.solution}
                </p>
                <a
                  href="#contato"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors group/link"
                >
                  Quero esse modelo
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Não encontrou seu nicho?{' '}
            <a href="#contato" className="text-accent-400 hover:text-accent-300 font-medium transition-colors">
              Fale comigo e crio do zero
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}