export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src="/logo-icon.svg" alt="Lucas.dev" className="w-9 h-9" />
              <span className="font-semibold text-white text-lg">
                Lucas<span className="text-accent-400">.dev</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500 max-w-sm leading-relaxed">
              Desenvolvedor web e agente de IA no Rio de Janeiro. Crio sites e landing pages que convertem visitantes em clientes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Serviços', href: '#servicos' },
                { label: 'Diferenciais', href: '#diferenciais' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Processo', href: '#processo' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-accent-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Rio de Janeiro, RJ
              </li>
              <li>
                <a href="tel:+5521976620148" className="hover:text-accent-400 transition-colors">
                  (21) 97662-0148
                </a>
              </li>
              <li>
                <a href="mailto:lucas.correa.tech@gmail.com" className="hover:text-accent-400 transition-colors">
                  lucas.correa.tech@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5521976620148" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {year} Lucas.dev — Todos os direitos reservados
          </p>
          <p className="text-xs text-gray-600 font-mono">
            Feito com React + Vite + Tailwind no Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  )
}
