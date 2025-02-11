import React from 'react';
import { Stethoscope, BarChart2, ClipboardList, Clock, Share2 } from 'lucide-react';

const features = [
  {
    icon: BarChart2,
    title: 'Analyse prédictive',
    description: 'Analyse avancée des données cliniques pour anticiper les complications',
  },
  {
    icon: ClipboardList,
    title: 'Rapports structurés',
    description: 'Rapports médicaux détaillés quotidiens, hebdomadaires ou mensuels',
  },
  {
    icon: Clock,
    title: 'Suivi continu',
    description: 'Collecte et analyse continue des paramètres médicaux',
  },
  {
    icon: Share2,
    title: 'Coordination',
    description: 'Communication facilitée avec les autres professionnels de santé',
  },
];

export function DoctorOffer() {
  return (
    <div className="bg-white">
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Stethoscope className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Médecins Généralistes et Spécialistes
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Un outil prédictif pour une prise en charge anticipative et efficace
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-8">
            PREDIMED offre aux médecins un outil innovant et prédictif pour le suivi des patients 
            chroniques et polypathologiques. Notre solution n'est pas un simple système d'alerte 
            mais un véritable outil d'aide à la décision médicale.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6">
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Reports Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types de rapports</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rapport journalier
              </h3>
              <p className="text-gray-600">
                Pour un suivi intensif des patients les plus fragiles avec analyse détaillée 
                des variations quotidiennes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rapport hebdomadaire
              </h3>
              <p className="text-gray-600">
                Vue d'ensemble des paramètres pour ajuster le protocole de soins selon les tendances.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rapport mensuel
              </h3>
              <p className="text-gray-600">
                Analyse complète de l'évolution de la santé du patient sur le long terme.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Avantages clés pour les médecins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Amélioration du diagnostic
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Accès à un historique clinique structuré
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Anticipation des complications
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Détection précoce des dégradations
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Coordination renforcée
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Transmission des rapports aux infirmiers
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Adaptation du protocole de soins
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Interopérabilité avec les DMP
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}