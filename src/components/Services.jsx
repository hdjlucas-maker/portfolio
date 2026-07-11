export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      title: 'Landing Pages de Conversão',
      description: 'Páginas focadas em transformar visitantes em clientes. Design otimizado, copy persuasiva e CTAs estratégicos.',
      features: ['Design responsivo', 'Otimização mobile', 'Velocidade de carregamento', 'SEO técnico'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Sites Institucionais',
      description: 'Presença digital profissional para sua empresa. Mostre autoridade e conquiste a confiança dos seus clientes.',
      features: ['Identidade visual', 'Múltiplas páginas', 'Blog integrado', 'Gestão de conteúdo'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Agentes de IA',
      description: 'Automação inteligente com IA para atendimento, geração de conteúdo e processos que economizam seu tempo.',
      features: ['Chatbots inteligentes', 'Automação de tarefas', 'Integração com APIs', 'Análise de dados'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2m0 0V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18M3 7l4-4m14 4l-4-4" />
        </svg>
      ),
      title: 'Manutenção & Suporte',
      description: 'Suporte técnico de informática, manutenção de computadores e infraestrutura de TI para manter tudo funcionando.',
      features: ['Manutenção preventiva', 'Suporte remoto', 'Configuração de redes', 'Recuperação de dados'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Otimização & SEO',
      description: 'Seu site no topo do Google. Otimização técnica, palavras-chave locais e estratégia para aparecer nas buscas do Rio.',
      features: ['SEO local', 'Google My Business', 'Performance Core Web Vitals', 'Analytics'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: 'Consultoria Digital',
      description: 'Não sabe por onde começar? Eu analiso seu negócio, identifico gargalos e crio um plano digital sob medida.',
      features: ['Diagnóstico gratuito', 'Estratégia digital', 'Identificação de oportunidades', 'Plano de ação'],
    },
  ]

  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="tag bg-accent-500/10 text-accent-400 border border-accent-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            Serviços
          </span>
          <h2 className="section-title mt-4 text-white">
            Tudo que sua empresa precisa para <span className="gradient-text">vender mais online</span>
          </h2>
          <p className="section-subtitle">
            Do primeiro clique até a venda. Soluções completas para você parar de perder clientes para a concorrência.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card-hover p-7 group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-accent-500/20 flex items-center justify-center text-accent-400 group-hover:scale-110 group-hover:text-accent-300 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
