import React from 'react';
import { UserCircle, Tablet as DeviceTablet, FileText, Shield } from 'lucide-react';

const devices = [
  'Tensiomètre connecté',
  'Oxymètre de pouls',
  'Balance connectée',
  'Électrocardiographe',
  'Glucomètre connecté',
  'Capteurs de température',
];

const features = [
  {
    icon: DeviceTablet,
    title: 'Dispositifs certifiés',
    description: 'Kit de télésurveillance avec dispositifs médicaux connectés certifiés C.E.',
  },
  {
    icon: FileText,
    title: 'Rapports structurés',
    description: 'Génération de rapports médicaux périodiques pour les professionnels de santé',
  },
  {
    icon: Shield,
    title: 'Sécurité maximale',
    description: 'Protection des données conforme aux normes ISO 27001 et HDS',
  },
];

export function PatientOffer() {
  return (
    <div className="bg-white">
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <UserCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Pour les Particuliers
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Un suivi médical prédictif et structuré à domicile
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-8">
            PREDIMED n'est pas une solution d'urgence mais un dispositif médical prédictif permettant 
            d'anticiper les risques de dégradation de l'état de santé des patients. Notre approche 
            permet une prise en charge anticipative et personnalisée.
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

        {/* Devices */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Dispositifs médicaux connectés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {devices.map((device) => (
              <div key={device} className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{device}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reports */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Suivi médical structuré
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rapport journalier
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Suivi intensif
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Analyse détaillée
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rapport hebdomadaire
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Évaluation intermédiaire
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Ajustement des soins
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Rapport mensuel
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Vision globale
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
                  Suivi long terme
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}