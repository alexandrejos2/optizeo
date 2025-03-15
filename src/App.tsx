import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X, MessageSquare, Globe, Megaphone, Bot, Mic, ArrowRight, Check, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import Contact from './pages/Contact';
import WebsiteService from './pages/WebsiteService';
import { useScrollToSection } from './hooks/useScrollToSection';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')", 
          backgroundPosition: "center" 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mais Crescimento. Mais Clientes.
            </h1>
            <p className="text-xl md:text-2xl mb-10">
              Fazemos o seu negócio crescer com sites modernos, anúncios eficazes e agentes IA.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors duration-300 text-lg"
            >
              Quero mais clientes <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O Seu Negócio Está a Perder Clientes Online?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Se os seus clientes não o encontram no Google, nas redes sociais ou se não obtêm respostas rápidas, eles escolhem a concorrência. Com um site profissional, estratégias digitais eficazes e atendimento automatizado com IA, garantimos que o seu negócio nunca perde oportunidades.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
            >
              Descubra como <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções Inteligentes para o Seu Negócio Crescer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Websites Profissionais
              </h3>
              <p className="text-gray-700">
                Criamos sites modernos, rápidos e otimizados para converter visitas em clientes.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Megaphone className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anúncios Online</h3>
              <p className="text-gray-700">
                Facebook & Google Ads que atraem os clientes certos para o seu negócio.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Bot className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agentes IA</h3>
              <p className="text-gray-700">
                Chatbots inteligentes que respondem automaticamente a clientes no WhatsApp, Messenger, Instagram e no seu site.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mic className="text-blue-900" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assistentes de Voz com IA</h3>
              <p className="text-gray-700">
                Melhore a experiência do seu cliente com assistentes de voz inteligentes, disponíveis 24/7 para atender chamadas e fornecer suporte.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
            >
              Fale connosco <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja Como Já Ajudámos Outros Negócios
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Melhore a experiência do seu cliente com assistentes de voz inteligentes, disponíveis 24/7 para atender chamadas e fornecer suporte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Adorei o site e a automação da Optizeo! Agora recebo clientes novos todas as semanas sem precisar responder manualmente!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Ana Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">Ana Silva</h4>
                  <p className="text-sm text-gray-600">Clínica Estética Bella</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Desde que a Optizeo desenvolveu nosso site e configurou os anúncios online, nosso restaurante tem estado sempre cheio. O retorno do investimento foi surpreendente!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="João Oliveira"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">João Oliveira</h4>
                  <p className="text-sm text-gray-600">Restaurante Sabor do Mar</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "O chatbot de IA que a Optizeo implementou transformou nosso atendimento. Recebemos elogios diários dos clientes e nosso tempo de resposta diminuiu drasticamente."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Marta Santos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">Marta Santos</h4>
                  <p className="text-sm text-gray-600">Clínica Dental Sorriso</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
            >
              Quero mais clientes <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Business Growth"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Porquê Escolher a Optizeo?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Mais Clientes, Mais Lucro</h3>
                    <p className="text-gray-700">Aplicamos estratégias testadas para negócios locais crescerem sem complicação.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Tecnologia Que Trabalha Por Si</h3>
                    <p className="text-gray-700">Websites rápidos, chatbots inteligentes e automação para atrair clientes 24/7.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Conversões Garantidas</h3>
                    <p className="text-gray-700">Cada solução é pensada para converter visitantes em clientes sem esforço extra.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Suporte Sempre Que Precisar</h3>
                    <p className="text-gray-700">Disponíveis para ajustes e otimizações sempre que o seu negócio precisar.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mt-1 mr-3" size={20} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">O Seu Sucesso é o Nosso Sucesso</h3>
                    <p className="text-gray-700">Criamos parcerias reais, onde só ganhamos se você ganhar.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
                  state={{ scrollToTop: true }}
                >
                  Comece Agora <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    toggleMenu();
    scrollToSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button onClick={() => scrollToSection('#')} className="text-2xl font-bold text-blue-900 hover:text-blue-800 transition-colors duration-300">
                Optizeo
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10">
              <button onClick={() => scrollToSection('#')} className="text-gray-600 hover:text-blue-900">Início</button>
              <Link to="/websites" className="text-gray-600 hover:text-blue-900" state={{ scrollToTop: true }}>Websites</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-900" state={{ scrollToTop: true }}>Contacto</Link>
            </nav>
            
            <div className="hidden md:flex">
              <Link 
                to="/contact" 
                className="px-5 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
                state={{ scrollToTop: true }}
              >
                Falar com um Especialista
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-blue-900 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <div className="container mx-auto px-4 space-y-2">
              <button onClick={() => handleNavClick('#')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-900">Início</button>
              <Link to="/websites" className="block py-2 text-gray-600 hover:text-blue-900" onClick={toggleMenu} state={{ scrollToTop: true }}>Websites</Link>
              <Link to="/contact" className="block py-2 text-gray-600 hover:text-blue-900" onClick={toggleMenu} state={{ scrollToTop: true }}>Contacto</Link>
              <Link 
                to="/contact" 
                className="block w-full text-center px-5 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors duration-300"
                onClick={toggleMenu}
                state={{ scrollToTop: true }}
              >
                Falar com um Especialista
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<WebsiteService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Optizeo</h3>
              <p className="text-gray-400 mb-4">
                Melhorámos negócios com soluções digitais e IA.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li><Link to="/websites" state={{ scrollToTop: true }} className="text-gray-400 hover:text-white transition-colors duration-300">Websites Profissionais</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Anúncios Online</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Chatbots de IA</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Assistentes de Voz</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Mail className="text-gray-400 mt-1 mr-3" size={18} />
                  <a href="mailto:geral@optizeo.pt" className="text-gray-400 hover:text-white transition-colors duration-300">geral@optizeo.pt</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-gray-400 mt-1 mr-3" size={18} />
                  <span className="text-gray-400">Portugal</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Optizeo – Melhorámos negócios com soluções digitais e IA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;