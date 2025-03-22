import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { sendEmail } from '../lib/emailjs';
import { Toaster, toast } from 'react-hot-toast';
import { Seo } from '../components/Seo'; // ✅ Composant SEO réutilisable
import { defaultMeta } from '../components/Seo'; // ✅ Métadonnées par défaut

const Contact = () => {
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Gestion de l'envoi du formulaire de contact
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      const templateParams = {
        user_name: formData.get('user_name') as string,
        user_email: formData.get('user_email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      const result = await sendEmail(templateParams);

      if (result.status === 200) {
        toast.success('Message envoyé avec succès !');
        formRef.current?.reset();
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ SEO dynamique via composant réutilisable */}
      <Seo
        title={`Contact - ${defaultMeta.siteName}`}
        description="Contactez Analytechs pour vos projets en Business Intelligence, Data Analytics et Conseil au Burkina Faso."
        url={`${defaultMeta.url}${location.pathname}`}
        image={defaultMeta.image}
      />

      <Toaster position="top-right" />

      {/* ✅ Bandeau de présentation */}
      <PageBanner
        title="Contactez-nous"
        subtitle="Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets"
        badge="Parlons de votre projet"
        backgroundImage="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=2070&q=80"
      />

      {/* ✅ Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* ✅ Coordonnées & réseaux sociaux */}
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
                    <p className="text-gray-600">+226 25 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent/5 p-3 rounded-xl mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral">Adresse</h3>
                    <p className="text-gray-600">Avenue Kwame N'Krumah, Ouagadougou</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="font-semibold text-neutral mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/analytechs-burkina" target="_blank" rel="noopener noreferrer" className="bg-accent/5 p-3 rounded-xl text-accent hover:bg-accent hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/analytechsbf" target="_blank" rel="noopener noreferrer" className="bg-accent/5 p-3 rounded-xl text-accent hover:bg-accent hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="font-semibold text-neutral mb-4">Notre localisation</h3>
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?..."
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* ✅ Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-primary mb-6">Envoyez-nous un message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-neutral mb-2">Nom complet</label>
                  <input type="text" id="user_name" name="user_name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-neutral mb-2">Email</label>
                  <input type="email" id="user_email" name="user_email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral mb-2">Sujet</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent" placeholder="Comment pouvons-nous vous aider ?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral mb-2">Message</label>
                <textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent resize-none" placeholder="Décrivez votre projet..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={`w-full bg-accent hover:bg-primary text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
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
