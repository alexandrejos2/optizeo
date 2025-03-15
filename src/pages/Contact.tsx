import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-blue-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Quer Mais Clientes para o Seu Negócio?
          </h1>
          <p className="text-xl mb-10">
            Sabemos exatamente o que precisa para vender mais. Seja com um website poderoso, anúncios certeiros ou automação inteligente, criamos a estratégia ideal para atrair clientes e fazer o seu negócio crescer.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-left">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Fale com um Especialista</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">Nome do Negócio</label>
                  <input
                    type="text"
                    id="business"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nome da sua empresa"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telemóvel</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+351 XXX XXX XXX"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  <option value="website">Website Profissional</option>
                  <option value="ads">Anúncios Online</option>
                  <option value="chatbot">Chatbot de IA</option>
                  <option value="voice">Assistente de Voz</option>
                  <option value="all">Solução Completa</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Conte-nos sobre o seu negócio e o que procura..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center"
                >
                  Enviar Mensagem <MessageSquare className="ml-2" size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;