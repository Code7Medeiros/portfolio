import { Linkedin, Mail } from "lucide-react";

const badge =
  "bg-zinc-800/60 border border-zinc-700 px-4 py-1.5 rounded-full text-sm text-zinc-200";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <header className="mb-32">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="/Medeiros.png"
                alt="Felipe Medeiros"
                className="
                  w-32 h-32 
                  rounded-full 
                  object-cover 
                  border border-zinc-700
                  shadow-lg
                  mb-6
                "
              />

              <h1 className="text-5xl font-bold mb-4">
                Felipe Medeiros
              </h1>

              <p className="text-zinc-300 text-lg mb-6">
                Desenvolvedor Back-end Sênior • .NET (C#) • Node.js • Sistemas Críticos
              </p>

              <ul className="text-zinc-400 list-disc ml-5 space-y-2">
                <li>Foco em código limpo e boas práticas</li>
                <li>Testes automatizados e integração entre sistemas</li>
                <li>Experiência com SQL, NoSQL, Docker e ambientes distribuídos</li>
                <li>Atuação próxima a times maduros e produtos críticos</li>
              </ul>


              <div className="flex items-center gap-4 mt-8 flex-wrap">
              <a
                href="https://www.linkedin.com/in/dev-felipe-medeiros/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 rounded-full 
                          border border-zinc-700 text-zinc-300 
                          hover:text-white hover:border-zinc-500 
                          transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:felip-medeiros@hotmail.com"
                className="flex items-center justify-center w-11 h-11 rounded-full 
                          border border-zinc-700 text-zinc-300 
                          hover:text-white hover:border-zinc-500 
                          transition"
              >
                <Mail size={20} />
              </a>

              <a
                href="/Felipe-Medeiros-CV.pdf"
                download
                className="ml-2 inline-flex items-center gap-2 
                          px-5 py-2 rounded-full 
                          bg-zinc-900 border border-zinc-700 
                          text-zinc-300 hover:text-white 
                          hover:border-zinc-500 transition text-sm"
              >
                📄 Download CV
              </a>
            </div>



            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">
                Stack Principal
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className={badge}>.NET</span>
                <span className={badge}>C#</span>
                <span className={badge}>Node.js</span>
                <span className={badge}>APIs REST</span>
                <span className={badge}>Microsserviços</span>
                <span className={badge}>Docker</span>
              </div>
            </div>

          </div>
        </header>

        <section className="mb-24">

          <h2 className="text-3xl font-semibold mb-10">
            Competências
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Backend */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <span className={badge}>.NET Core / .NET 6+</span>
                <span className={badge}>C#</span>
                <span className={badge}>Node.js</span>
                <span className={badge}>APIs REST</span>
                <span className={badge}>Arquitetura de Microsserviços</span>
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <span className={badge}>React</span>
                <span className={badge}>JavaScript</span>
                <span className={badge}>TypeScript</span>
              </div>
            </div>

            {/* Banco & Infra */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Banco de Dados & Infra</h3>
              <div className="flex flex-wrap gap-3">
                <span className={badge}>SQL Server</span>
                <span className={badge}>MongoDB</span>
                <span className={badge}>Docker</span>
                <span className={badge}>Git & GitHub</span>
              </div>
            </div>

          </div>
        </section>
        
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-10">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Motor FastAGI para URA Telefônica (Lello)
                </h3>

                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Desenvolvimento de serviço backend responsável pela orquestração de
                  chamadas telefônicas em uma <strong>URA corporativa</strong>, integrando
                  plataforma de telefonia (Asterisk/FastAGI) com sistemas internos da
                  <strong>Lello</strong>.
                  <br /><br />
                  Implementação de regras de negócio para roteamento de chamadas, tomada de
                  decisão em tempo real, controle de estado de sessão e integração com APIs e
                  bancos de dados, garantindo <strong>baixa latência</strong>,
                  <strong>alta concorrência</strong> e alta disponibilidade do serviço.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className={badge}>.NET</span>
                <span className={badge}>C#</span>
                <span className={badge}>FastAGI</span>
                <span className={badge}>Asterisk</span>
                <span className={badge}>APIs REST</span>
                <span className={badge}>Alta Concorrência</span>
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Middleware de Comunicação entre Boteria e Aplicações Corporativas (TIM)
                </h3>

                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Desenvolvimento de middleware responsável pela comunicação entre sistemas
                  de <strong>boteria</strong> e aplicações corporativas da <strong>TIM</strong>,
                  garantindo orquestração de mensagens, transformação de dados e
                  confiabilidade na troca de informações entre ambientes distintos.
                  <br /><br />
                  Implementação de APIs para integração síncrona e assíncrona, controle de
                  falhas, logs estruturados e versionamento de contratos, com foco em
                  escalabilidade e resiliência.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className={badge}>Node.js</span>
                <span className={badge}>MongoDB</span>
                <span className={badge}>APIs REST</span>
                <span className={badge}>Middleware</span>
                <span className={badge}>Docker</span>
                <span className={badge}>Git</span>
              </div>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  API AGV – Integração de Sistemas Corporativos (TIM)
                </h3>

                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Desenvolvimento de <strong>API backend em .NET</strong> responsável pela
                  integração entre sistemas corporativos da <strong>TIM</strong>, atuando
                  como camada de orquestração e validação de regras de negócio relacionadas a
                  fluxos operacionais e troca de informações entre aplicações internas.
                  <br /><br />
                  Implementação de endpoints REST, controle de versionamento de contratos,
                  tratamento de erros, logs estruturados e mecanismos de resiliência,
                  garantindo <strong>segurança</strong>, <strong>escalabilidade</strong> e
                  <strong>alta disponibilidade</strong> em ambiente corporativo.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className={badge}>.NET</span>
                <span className={badge}>C#</span>
                <span className={badge}>APIs REST</span>
                <span className={badge}>Integração de Sistemas</span>
                <span className={badge}>Arquitetura Corporativa</span>
                <span className={badge}>SVN</span>
              </div>
            </div>
            
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Serviço de Criptografia de Cartão de Crédito para CRM (Setor Financeiro)
                </h3>

                <p className="text-zinc-400 mb-4 leading-relaxed">
                  Desenvolvimento de aplicação backend em <strong>C# / .NET</strong>
                  responsável pela <strong>criptografia e proteção de dados sensíveis</strong>
                  relacionados a cartões de crédito em um sistema de CRM de grande porte do
                  setor financeiro.
                  <br /><br />
                  Implementação de mecanismos de segurança para proteção de dados em trânsito
                  e em repouso, seguindo boas práticas de <strong>segurança da informação</strong>,
                  controle de acesso, auditoria e conformidade com padrões corporativos e
                  regulatórios, garantindo integridade, confidencialidade e rastreabilidade
                  das informações.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className={badge}>C#</span>
                <span className={badge}>.NET</span>
                <span className={badge}>Criptografia</span>
                <span className={badge}>Proteção de Dados Sensíveis</span>
                <span className={badge}>Segurança da Informação</span>
                <span className={badge}>Ambiente Financeiro</span>
              </div>
            </div>

          </div>
        </section>

        <footer className="text-zinc-500 text-sm text-center mt-24 space-y-1">
          <p>
            English: Reading & Technical Writing • Conversational
          </p>
          <p>
            © {new Date().getFullYear()} Felipe Medeiros. Todos os direitos reservados.
          </p>
        </footer>

      </div>
    </div>
  );
}
