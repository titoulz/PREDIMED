import React from 'react';
import { Guitar as Hospital, ClipboardList, Tablet as DeviceTablet, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: ClipboardList,
    title: 'Protocole personnalisé',
    description: 'Élaboration de protocoles de télésuivi adaptés à chaque pathologie',
  },
  {
    icon: DeviceTablet,
    title: 'Dispositifs connectés',
    description: 'Déploiement de kits IoT certifiés pour une surveillance renforcée',
  },
  {
    icon: Users,
    title: 'Équipe pluridisciplinaire',
    description: 'Mobilisation d\'une équipe médicale qualifiée pour le suivi',
  },
  {
    icon: Clock,
    title: 'Surveillance 24/7',
    description: 'Suivi continu et analyse en temps réel des données de santé',
  },
];

const pathologies = [
  'Gériatrie',
  'Suivi post-opératoire',
  'Insuffisance cardiaque',
  'Insuffisance rénale',
  'Insuffisance respiratoire',
  'Diabète',
];

export function HospitalOffer() {
  return (
    <div className="bg-white">
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Hospital className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Hôpitaux et Cliniques
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Une solution complète de télésurveillance pour le maintien à domicile
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-8">
            Dans le cadre du développement du maintien à domicile, PREDIMED TECHNOLOGY déploie MyPrédi, 
            une solution de télésurveillance médicale conçue pour assurer un suivi à distance des patients, 
            en parfaite concertation avec les professionnels de santé.
          </p>
        </div>

        {/* Pathologies */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pathologies prises en charge</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pathologies.map((pathology) => (
              <div key={pathology} className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{pathology}</span>
              </div>
            ))}
          </div>
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

        {/* Platform Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            MyPrédi : Plateforme intelligente de télésurveillance
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
              Solution interopérable avec les outils numériques de santé
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
              Détection précoce des anomalies et envoi d'alertes en temps réel
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
              Coordination optimisée avec les équipes soignantes
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-blue-600 mr-2">✓</span>
              Adaptation continue de la prise en charge selon les besoins
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}