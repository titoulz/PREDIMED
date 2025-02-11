import React from 'react';
import { Building2, Shield, Activity, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Solution certifiée',
    description: 'Dispositif médical C.E. avec certifications ISO 13485, ISO 27001 et HDS',
  },
  {
    icon: Activity,
    title: 'Surveillance continue',
    description: 'Analyse en temps réel des données de santé par une équipe médicale',
  },
  {
    icon: Users,
    title: 'Coordination optimale',
    description: 'Interopérabilité avec les systèmes de santé pour une meilleure coordination',
  },
];

export function TerritorialOffer() {
  return (
    <div className="bg-white">
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Building2 className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Centres de Ressources Territoriaux
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Solution innovante pour le suivi des personnes âgées à domicile
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-8">
            Le Centre de Ressources Territorial (CRT) a choisi PREDIMED pour assurer le suivi des personnes 
            âgées à domicile. Cette solution innovante permet une surveillance continue des patients, notamment 
            pour détecter les fragilités gériatriques et prévenir les complications.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg shadow-lg p-6">
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Avantages pour les CRT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Surveillance optimisée
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Détection précoce des fragilités gériatriques
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Prévention des complications
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Anticipation des passages aux urgences
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Coordination des soins
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Interopérabilité avec les systèmes de santé
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Facilitation de la coordination entre professionnels
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Communication optimisée avec les structures médico-sociales
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}