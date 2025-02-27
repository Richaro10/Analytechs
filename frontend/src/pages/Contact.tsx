import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const Contact = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="Contactez-nous"
        subtitle="Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets"
        badge="Parlons de votre projet"
        backgroundImage="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-accent/5 p-3 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral">Email</h3>
                    <p className="text-gray-600">contact@analytechs.tech</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent/5 p-3 rounded-xl mr-4">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent/5 p-3 rounded-xl mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral">Adresse</h3>
                    <p className="text-gray-600">123 Avenue des Champs-Élysées, 75008 Paris</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="font-semibold text-neutral mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-accent/5 p-3 rounded-xl text-accent hover:bg-accent hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="bg-accent/5 p-3 rounded-xl text-accent hover:bg-accent hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="font-semibold text-neutral mb-4">Notre localisation</h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2159982219557!2d2.2986800156744547!3d48.87241997928882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f8eec9cf%3A0x70a8b9095c7e4f3f!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1645541548693!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-primary mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-primary text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center group"
              >
                Envoyer le message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;