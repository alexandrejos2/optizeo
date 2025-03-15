import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, X, Check, Clock, CreditCard, Globe, MessageSquare } from 'lucide-react';

function WebsiteService() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", 
          backgroundPosition: "center" 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Websites Profissionais Que Fazem o Seu Negócio Crescer 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-10">
              Obtenha um site moderno, rápido e pronto para atrair mais clientes. Sem mensalidades. Sem complicações.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors duration-300 text-lg"
            >
              Peça Já o Seu Site! <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Sem um Website Profissional, Está a Perder Clientes Todos os Dias!
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center">
              80% dos clientes pesquisam online antes de escolher um serviço. Se o seu negócio não tem um site profissional, pode estar a perder oportunidades.
            </p>
            
            <div className="space-y-4">
              {[
                'Depender apenas do Instagram/Facebook para atrair clientes.',
                'Perder credibilidade para a concorrência.',
                'Gastar tempo a responder sempre às mesmas perguntas.',
                'Não aparecer no Google quando os clientes pesquisam.'
              ].map((problem, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <X className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              O Seu Site Trabalha Por Si, 24h Por Dia
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Mais Credibilidade e Profissionalismo',
                  description: 'Transmita confiança e profissionalismo aos seus clientes.'
                },
                {
                  title: 'Apareça no Google',
                  description: 'Seja encontrado quando procuram pelos seus serviços.'
                },
                {
                  title: 'Captação de Clientes 24/7',
                  description: 'Receba contactos mesmo fora do horário de trabalho.'
                },
                {
                  title: 'Poupe Tempo',
                  description: 'Automatize respostas e marcações online.'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <Check className="text-green-500 mx-auto mb-4" size={24} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>

            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-md transition-colors duration-300 text-lg mt-12"
            >
              Fale Connosco Agora! <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Website Completo por Apenas 300€
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Pagamento pode ser feito em 2 ou 3 fases, sem juros!
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Globe size={24} />,
                    title: 'Website Completo',
                    description: 'Não é só uma landing page - é um site completo e profissional'
                  },
                  {
                    icon: <MessageSquare size={24} />,
                    title: 'Integração Com WhatsApp & Redes Sociais',
                    description: 'Conecte-se com seus clientes em todas as plataformas'
                  },
                  {
                    icon: <Clock size={24} />,
                    title: 'Entrega em 5 Dias',
                    description: 'Rápido e profissional, sem comprometer a qualidade'
                  },
                  {
                    icon: <CreditCard size={24} />,
                    title: 'Zero Custos Escondidos',
                    description: 'Preço final sem surpresas ou taxas adicionais'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <div className="text-blue-900">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-lg text-red-600 font-semibold mb-6">
                  Cada dia sem um site é um dia a perder clientes para a concorrência. Vamos tratar disso hoje?
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors duration-300 text-lg"
                >
                  Peça Já o Seu Website! <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Quanto tempo demora a entrega?',
                  answer: 'O seu website estará pronto em apenas 5 dias úteis.'
                },
                {
                  question: 'Posso pagar em prestações?',
                  answer: 'Sim! Oferecemos pagamento em até 3 prestações sem juros para sua conveniência.'
                },
                {
                  question: 'O site é realmente meu?',
                  answer: 'Absolutamente! O site é 100% seu, sem mensalidades ou taxas escondidas.'
                },
                {
                  question: 'O que está incluído no preço?',
                  answer: 'Design profissional, domínio, hospedagem no primeiro ano, otimização para SEO e integração com WhatsApp e redes sociais.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O Seu Novo Site Está a 5 Dias de Distância. Vamos Começar?
            </h2>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 hover:bg-gray-100 font-bold rounded-md transition-colors duration-300 text-lg"
            >
              Peça Já o Seu Website! <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebsiteService;