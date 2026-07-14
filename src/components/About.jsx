export default function About() {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 65 },
    { name: 'Automação IA', level: 70 },
    { name: 'Manutenção de PCs', level: 95 },
    { name: 'Suporte Técnico', level: 90 },
  ]

  const journey = [
    {
      year: 'Início',
      title: 'Técnico de Campo',
      description: 'Atuação direta com clientes, suporte técnico e manutenção de computadores no Rio de Janeiro.',
    },
    {
      year: 'Evolução',
      title: 'Ajudo Empresas a Conseguirem Mais Clientes | Lucas Corrêa',
      description: 'Mergulhei no desenvolvimento web, criando sites e landing pages que combinam técnica e design.',
    },
    {
      year: 'Atual',
      title: 'Desenvolvimento de landing pages de alta conversão para empresas que desejam gerar mais orçamentos. Hospedagem, domínio, SSL, manutenção e suporte inclusos.',
      description: 'Ajudo empresas a conquistar mais clientes com landing pages de alta conversão, sites profissionais e soluções inteligentes com IA.Hoje crio soluções digitais completas — do site à automação com IA — para negócios que querem crescer.',
    },
  ]

  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Bio */}
          <div>
            {/* Foto de perfil + nome */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/perfil-lucas.jpg"
                alt="Lucas Corrêa - Desenvolvedor e Agente de IA"
                className="w-20 h-20 rounded-full object-cover ring-2 ring-accent-400/40"
              />
              <div>
                <h3 className="text-white font-semibold text-lg">Lucas Corrêa</h3>
                <p className="text-sm text-gray-400">Desenvolvedor & Agente de IA</p>
              </div>
            </div>

            <span className="tag bg-accent-500/10 text-accent-400 border border-accent-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              Sobre mim
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
              De técnico de campo a <span className="gradient-text">desenvolvedor & agente de IA</span>
            </h2>
            <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
              <p>
                Comecei minha carreira como <span className="text-white font-medium">técnico de campo</span>, trabalhando
                diretamente com clientes, resolvendo problemas de informática e manutenção de computadores.
                Aprendi na prática o que significa <span className="text-white font-medium">resolver a dor de um cliente</span>.
              </p>
              <p>
                Hoje atuo no desenvolvimento de landing pages, <span className="text-white font-medium">sites e soluções com IA</span>, que ajudam empresas a conquistar mais clientes e fortalecer sua presença digital. Minha experiência técnica me permite criar soluções rápidas, seguras e orientadas para resultados, unindo estratégia, performance e tecnologia em cada projeto.
              </p>
              <p>
                Estou no <span className="text-white font-medium">Rio de Janeiro</span>, atendendo negócios locais que
                precisam de presença digital para não perder mais vendas. Meu objetivo é simples:
                <span className="text-accent-400 font-medium"> trazer mais clientes para você</span>.
              </p>
            </div>

            {/* Journey timeline */}
            <div className="mt-10 space-y-6">
              {journey.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent-400 ring-4 ring-accent-400/10" />
                    {i < journey.length - 1 && <div className="w-px h-full bg-gradient-to-b from-accent-400/40 to-transparent mt-1 flex-1" />}
                  </div>
                  <div className="pb-2">
                    <div className="text-xs font-mono text-accent-400 uppercase tracking-wider">{item.year}</div>
                    <h4 className="mt-1 text-white font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="lg:sticky lg:top-24">
            <div className="glass-card p-7">
              <h3 className="text-lg font-semibold text-white mb-6">Habilidades & Tecnologias</h3>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <h4 className="text-sm font-semibold text-white mb-4">Ferramentas</h4>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'Git', 'Figma', 'Vite', 'React', 'Tailwind', 'Node.js', 'Supabase', 'OpenAI', 'Linux'].map((tool) => (
                    <span key={tool} className="tag bg-white/5 text-gray-300 border border-white/10 font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="glass-card mt-5 p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Rio de Janeiro, RJ</div>
                <div className="text-xs text-gray-500">Atendimento remoto em toda a região metropolitana</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}