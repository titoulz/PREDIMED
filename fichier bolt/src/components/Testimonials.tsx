import React from 'react';
import { ExternalLink, Heart, Users, Activity, Shield } from 'lucide-react';
import type { Testimonial } from '../types';

// Fonction utilitaire pour extraire l'ID de la vidéo YouTube
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    title: 'De la télésurveillance pour les insuffisants cardiaques, une première mondiale',
    description: 'Dans le cadre de la semaine du coeur, une grande journée d\'information sur l\'insuffisance cardiaque est organisée au NHC à Strasbourg. L\'insuffisance cardiaque concerne 1,2 millions de Français, chaque année 120.000 nouveaux cas sont détectés. À Strasbourg, une 1ère française est testée: de la télésurveillance médicale, nous sommes en plein dans ce que l\'on appelle l\'intelligence artificielle.',
    videoUrl: 'https://youtu.be/amwpZ3ywUWM',
    icon: Heart,
    category: 'Innovation Médicale',
  },
  {
    id: '2',
    title: 'La télésurveillance médicale pour les diabétiques',
    description: 'Le diabète est une hyperglycémie chronique dont la gravité repose sur des complications, aigus ou chroniques, qui sont liées aux difficultés de suivi des patients. DIABETe est un projet initié par Predimed Technology en collaboration avec le Centich et les HUS pour évaluer un nouveau modèle de parcours de soin pour le patient diabétique à haut risque cardiovasculaire.',
    videoUrl: 'https://youtu.be/Cw4isMJrgao',
    icon: Activity,
    category: 'Suivi Diabétique',
  },
  {
    id: '3',
    title: 'Télésurveillance médicale à domicile de patients post-covid',
    description: 'Reportage de France 3 Alsace sur le projet CovidRAD en collaboration avec les Hôpitaux Universitaires de Strasbourg. Découvrez l\'expérience d\'un patient covid post-hospitalisation de retour à son domicile grâce au dispositif médical de télésurveillance PREDIMED.',
    videoUrl: 'https://youtu.be/1WkjxcVXmbQ',
    icon: Shield,
    category: 'Post-COVID',
  },
  {
    id: '4',
    title: 'Insuffisance cardiaque et télémédecine',
    description: 'L\'âge moyen de l\'insuffisance cardiaque est de 75 ans et tue plus que l\'infarctus du myocarde. Cette maladie chronique est la première cause de consultation dans les pays occidentaux. Découvrez comment la télémédecine révolutionne le suivi des patients.',
    videoUrl: 'https://youtu.be/_wBNhHp5I70',
    icon: Heart,
    category: 'Cardiologie',
  },
  {
    id: '5',
    title: 'La télémédecine par Predimed Technology',
    description: 'PREDIMED est la nouvelle plateforme intelligente de télésurveillance médicale. Son principe est simple : grâce à l\'intelligence artificielle issue d\'une collaboration entre médecins et ingénieurs, la plateforme détecte les premiers symptômes de décompensation cardiaque du patient.',
    videoUrl: 'https://youtu.be/trsF9mxTt14',
    icon: Users,
    category: 'Innovation',
  },
];

export function Testimonials() {
  return (
    <div className="bg-white">
      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Témoignages
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Découvrez les expériences de nos utilisateurs avec PREDIMED
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } md:flex`}
            >
              {/* Video Preview Section */}
              <div className="md:w-1/2 relative group">
                <a
                  href={testimonial.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeVideoId(testimonial.videoUrl)}/maxresdefault.jpg`}
                      alt={testimonial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                        <ExternalLink className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <testimonial.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-blue-600">
                    {testimonial.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {testimonial.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.description}
                </p>
                <div className="mt-6">
                  <a
                    href={testimonial.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Voir sur YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}