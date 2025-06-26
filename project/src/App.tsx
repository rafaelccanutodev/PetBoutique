import React from 'react';
import { Heart, Phone, Facebook, Instagram, MessageCircle, MapPin, Star } from 'lucide-react';
import AlfaPet from '../img/marcas/AlfaPet.png'
import BichinhoChique from '../img/marcas/BichinhoChic.png'
import Boehringer from '../img/marcas/Boehringer.png'
import exopets from '../img/marcas/exopets.png'
import Inata from '../img/marcas/Inataa.png'
import bioFresh from '../img/marcas/LogoBiofresh.png'
import bravecto from '../img/marcas/LogoBravecto.png'
import banho from '../img/banho.png'
import veterinario from '../img/veterinario.png'
import dogwalker from '../img/dog-walker.png'
import loja from '../img/loja.png'
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-purple-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Pet Boutique</h1>
                <p className="text-sm text-gray-600">Estilo e Elegância para Cães e Gatos</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#servicos" className="text-gray-700 hover:text-purple-600 transition-colors">Serviços</a>
              <a href="#marcas" className="text-gray-700 hover:text-purple-600 transition-colors">Marcas</a>
              <a href="#contato" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-purple-900 to-purple-700 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Pet care background"
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-lg shadow-2xl flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Tenha o melhor tratamento para o seu parceiro
            </h2>
            <div className="flex justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-black">
          <Phone className="h-5 w-5" />
          <span>Fale conosco</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Alguns dos nossos serviços
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Banho & Tosa:</h4>
                  <p className="text-gray-700">Banho, hidratação, tosa higiênica, tosa de cachorros de diversas raças e com serviços feitos por profissionais parceiros especialistas no assunto.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Veterinário 24h:</h4>
                  <p className="text-gray-700">A saúde do seu melhor amigo em boas mãos, consultas, exames e cuidados com médicos veterinários parceiros.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dog Walker:</h4>
                  <p className="text-gray-700">Seu Pet precisa passear? Aqui você tem profissionais parceiros especializados no assunto. Adoro de caminhadas com passeadores parceiros Pet Anjo ainda corrigem comportamentos e ensinam comandos básicos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Creche Pet:</h4>
                  <p className="text-gray-700">A creche para cachorros é uma solução personalizada para quem não quer deixar seu pet sozinho em casa durante o dia. Brincadeiras, cuidados e muito carinho.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Produtos para seu pet:</h4>
                  <p className="text-gray-700">Explore nossa loja repleta de produtos premium para animais de estimação. De alimentos saudáveis a brinquedos divertidos e acessórios elegantes.</p>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 h-fit">
              <img 
                src={banho}
                alt="Pet grooming"
                className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img 
                src={veterinario}
                alt="Pet care"
                className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img 
                src={dogwalker}
                alt="Happy pets"
                className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <img 
                src={loja}
                alt="Pet services"
                className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Aqui na <span className="italic">Pet Boutique</span> somos apaixonados pelo que fazemos
          </h3>
          <div className="flex justify-center space-x-8 mt-8">
            <a href="#" className="text-white hover:text-purple-200 transition-colors transform hover:scale-110">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors transform hover:scale-110">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors transform hover:scale-110">
              <MessageCircle className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="marcas" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Nossas principais marcas
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
        {/* Card pequeno responsivo para marcas */}
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-[120px] transition-transform hover:scale-105">
          <img
            src={AlfaPet}
            alt="Alfa Pet"
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center">Alfa Pet</span>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-[120px] transition-transform hover:scale-105">
          <img
            src={BichinhoChique}
            alt="Bichinho Chique"
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center">Bichinho Chique</span>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-[120px] transition-transform hover:scale-105">
          <img
            src={Boehringer}
            alt="Boehringer"
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center">Boehringer</span>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-[120px] transition-transform hover:scale-105">
          <img
            src={exopets}
            alt="Exopets"
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center">Exopets</span>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-[120px] transition-transform hover:scale-105">
          <img
            src={Inata}
            alt="Inataa"
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center">Inataa</span>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-[120px] transition-transform hover:scale-105">
          <img
            src={bioFresh}
            alt="BioFresh"
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center">Logo BioFresh</span>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-full max-w-[120px] transition-transform hover:scale-105">
          <img
            src={bravecto}
            alt="Bravecto"
            className="w-16 h-16 object-contain mb-2"
          />
          <span className="text-sm font-semibold text-gray-700 text-center">Logo Bravecto</span>
        </div>
          </div>
        </div>
      </section>

      {/* Style Statement Section */}
      <section className="py-16 bg-gradient-to-r from-purple-800 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Na <span className="italic">Pet Boutique</span> você encontra Estilo e Elegância para Cães e Gatos
          </h3>
          <div className="flex justify-center space-x-8 mt-8">
            <a href="#" className="text-white hover:text-purple-200 transition-colors transform hover:scale-110">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors transform hover:scale-110">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="#" className="text-white hover:text-purple-200 transition-colors transform hover:scale-110">
              <MessageCircle className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Onde estamos
          </h3>
          <p className="text-center text-gray-600 mb-12">
            Se ficou interessado em nossos serviços, venha nos conhecer!
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-700">Rua Vista Costa, 94 - Jacarepó<br />Jacarepaguá - Rio de Janeiro/RJ<br />22755-267</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contato</h4>
                  <p className="text-gray-700">(21) 99999-9999<br />contato@petboutique.com.br</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Horário de Funcionamento</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <iframe
              title="Pet Boutique Localização"
              src="https://www.google.com/maps?q=Rua+Vista+Costa,+94+-+Jacarepaguá,+Rio+de+Janeiro,+RJ,+22755-267&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-purple-200">Desenvolvido por Rafael Canuto</p>
        </div>
      </footer>
    </div>
  );
}

export default App;