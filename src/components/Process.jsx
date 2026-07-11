export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico gratuito',
      description: 'Você conta o que precisa. Eu avalio, proponho soluções e defino escopo — sem compromisso e sem custo.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Contrato de prestação de serviço',
      description: 'Tudo formalizado por escrito. Escopo, prazo, valor e forma de pagamento definidos em contrato — segurança para você e para mim.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Desenvolvimento',
      description: 'Executo o projeto com acompanhamento contínuo. Você acompanha o progresso e aprova cada etapa antes de avançar.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Revisão e aprovação',
      description: 'Você testa, avalia e pede ajustes. O projeto só é finalizado quando você está 100% satisfeito com o resultado.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Entrega e pagamento',
      description: 'Projeto entregue, funcionando e aprovado. Pagamento conforme o contratado — você só paga pelo serviço concluído.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="processo" className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <span className="tag bg-accent-500/10 text-accent-400 border border-accent-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
            Como funciona
          </span>
          <h2 className="section-title mt-4 text-white">
            Transparência do <span className="gradient-text">início ao fim</span>
          </h2>
          <p className="section-subtitle">
            Contrato formal, processo claro e pagamento só após aprovação. Você no controle o tempo todo.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card-hover p-6 flex items-start gap-5"
            >
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400">
                  {step.icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-accent-400/30 to-transparent" />
                )}
              </div>

              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent-400/60">{step.number}</span>
                  <h3 className="text-white font-semibold">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-card p-6 border-accent-500/20 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h4 className="font-semibold text-white">Satisfação garantida</h4>
          </div>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Meu compromisso é simples: eu trabalho para servir você. O projeto só termina
            quando você está satisfeito. O pagamento é pelo serviço entregue e aprovado —
            sem surpresas, sem custos escondidos.
          </p>
          <a
            href="/Contrato_Landing_Page.docx"
            download
            className="btn-outline mt-6 inline-flex"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Baixar modelo de contrato
          </a>
        </div>
      </div>
    </section>
  )
}
