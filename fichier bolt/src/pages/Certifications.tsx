import React from 'react';
import { Shield, Lock, CheckCircle, Link } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    name: 'ISO 13485',
    description: 'Système de Management de la Qualité pour les Dispositifs Médicaux',
    benefits: [
      'Contrôle strict de la traçabilité',
      'Conformité réglementaire',
      'Engagement qualité supérieur',
    ],
  },
  {
    icon: Lock,
    name: 'ISO 27001',
    description: 'Système de Gestion de la Sécurité de l\'Information',
    benefits: [
      'Protection des données sensibles',
      'Gestion stricte des accès',
      'Sécurisation contre les cybermenaces',
    ],
  },
  {
    icon: Shield,
    name: 'HDS',
    description: 'Hébergement des Données de Santé',
    benefits: [
      'Stockage sécurisé des données patients',
      'Protection contre les accès non autorisés',
      'Conformité RGPD',
    ],
  },
  {
    icon: Link,
    name: 'Interopérabilité ANS',
    description: 'Certification de l\'Agence du Numérique en Santé',
    benefits: [
      'Communication avec les DMP',
      'Intégration aux systèmes hospitaliers',
      'Transmission sécurisée des données',
    ],
  },
];

export function Certifications() {
  return (
    <div className="bg-white">
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Nos Certifications
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Une solution certifiée et sécurisée pour la télésurveillance médicale
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-8">
            MyPrédi répond aux plus hautes exigences réglementaires et normatives. Notre solution 
            est certifiée dispositif médical C.E. et intègre les meilleures pratiques en matière 
            de gestion des dispositifs médicaux, sécurité des données et interopérabilité.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <cert.icon className="h-10 w-10 text-blue-600" />
                <h2 className="ml-4 text-2xl font-bold text-gray-900">{cert.name}</h2>
              </div>
              <p className="text-gray-600 mb-6">{cert.description}</p>
              <ul className="space-y-3">
                {cert.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Competitive Advantage */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Notre avantage concurrentiel
          </h2>
          <div className="prose prose-lg">
            <p>
              Contrairement à de nombreuses solutions concurrentes, MyPrédi offre un niveau de 
              conformité inégalé, garantissant ainsi :
            </p>
            <ul>
              <li>Une sécurité maximale des données de santé</li>
              <li>Une fiabilité clinique certifiée</li>
              <li>Une interopérabilité totale avec l'écosystème de santé</li>
              <li>Une conformité complète aux réglementations en vigueur</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}