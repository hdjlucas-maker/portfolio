import { useState } from 'react'
import emailjs from '@emailjs/browser'

// ── Configuração de envio ──────────────────────────────────────────
// Preencha essas variáveis no arquivo .env (veja .env.example)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const CALLMEBOT_PHONE = import.meta.env.VITE_CALLMEBOT_PHONE
const CALLMEBOT_APIKEY = import.meta.env.VITE_CALLMEBOT_APIKEY
// ────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const sendEmail = async () => {
    return emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email || 'Não informado',
        phone: form.phone,
        service: form.service,
        message: form.message || 'Sem mensagem adicional',
      },
      EMAILJS_PUBLIC_KEY
    )
  }

  const sendWhatsApp = async () => {
    const text = encodeURIComponent(
      `🔔 Novo pedido de orçamento!\n\n` +
      `Nome: ${form.name}\n` +
      `WhatsApp: ${form.phone}\n` +
      `E-mail: ${form.email || 'Não informado'}\n` +
      `Serviço: ${form.service}\n` +
      `Mensagem: ${form.message || 'Sem mensagem adicional'}`
    )
    const url = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${text}&apikey=${CALLMEBOT_APIKEY}`
    return fetch(url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const results = await Promise.allSettled([sendEmail(), sendWhatsApp()])
    const emailFailed = results[0].status === 'rejected'
    const whatsappFailed = results[1].status === 'rejected'

    setLoading(false)

    if (emailFailed && whatsappFailed) {
      // Ambos falharam — avisa o usuário mas não perde o lead
      setError(
        'Não conseguimos enviar automaticamente. Por favor, chame no WhatsApp ou tente novamente.'
      )
      return
    }

    setSubmitted(true)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const services = [
    'Landing Page',
    'Site Institucional',
    'Agente de IA',
    'Manutenção & Suporte',
    'SEO & Otimização',
    'Consultoria Digital',
    'Outro',
  ]

  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] radial-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <span className="tag bg-accent-500/10 text-accent-400 border border-accent-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Pronto para começar
          </span>
          <h2 className="section-title mt-4 text-white">
            Vamos parar de <span className="text-red-400">perder vendas</span>?
          </h2>
          <p className="section-subtitle">
            Conta o que você precisa. Eu te respondo em até 24h com um plano de ação — sem compromisso.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white mb-5">Fale comigo</h3>

              <a
                href="https://wa.me/5521976620148?text=Olá%20Lucas,%20vi%20seu%20site%20e%20quero%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-green-500/10 border border-white/[0.06] hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">WhatsApp</div>
                  <div className="text-xs text-gray-500">Resposta rápida</div>
                </div>
                <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-green-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="tel:+5521976620148"
                className="mt-3 flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-brand-500/10 border border-white/[0.06] hover:border-brand-500/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Telefone</div>
                  <div className="text-xs text-gray-500">(21) 97662-0148</div>
                </div>
                <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-brand-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:lucas.correa.tech@gmail.com"
                className="mt-3 flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-accent-500/10 border border-white/[0.06] hover:border-accent-500/30 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">E-mail</div>
                  <div className="text-xs text-gray-500">lucas.correa.tech@gmail.com</div>
                </div>
                <svg className="w-5 h-5 text-gray-600 ml-auto group-hover:text-accent-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div className="mt-3 flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-11 h-11 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Horário</div>
                  <div className="text-xs text-gray-500">Seg–Sáb · 8h às 19h</div>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-11 h-11 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Localização</div>
                  <div className="text-xs text-gray-500">Rio de Janeiro, RJ — Brasil</div>
                </div>
              </div>
            </div>

            {/* Guarantee card */}
            <div className="glass-card p-6 border-accent-500/20">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h4 className="font-semibold text-white">Diagnóstico gratuito</h4>
              </div>
              <p className="text-sm text-gray-400">
                Sem compromisso. Você conta o que precisa e eu te mostro como resolver — antes de qualquer pagamento.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-7 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 mb-5">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mensagem enviada!</h3>
                  <p className="mt-2 text-gray-400 max-w-sm">
                    Obrigado pelo contato. Vou responder em até 24h com um plano para o seu projeto.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', phone: '', service: '', message: '' })
                    }}
                    className="btn-outline mt-6"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-semibold text-white">Solicite seu orçamento grátis</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(21) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Qual serviço você precisa? *</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.05] transition-all"
                    >
                      <option value="" className="bg-[#000a12]">Selecione...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#000a12]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Conte sobre seu projeto</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="O que você precisa? Qual é o seu negócio? Quais problemas quer resolver?"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                      {error}{' '}
                      <a
                        href={`https://wa.me/5521976620148?text=${encodeURIComponent(
                          `Olá Lucas, meu nome é ${form.name || '...'} e quero um orçamento para ${form.service || '...'}. ${form.message || ''}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium hover:text-red-300"
                      >
                        Clique aqui para falar direto no WhatsApp
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar e receber orçamento
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    Seus dados estão seguros. Sem spam, sem compromisso.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}