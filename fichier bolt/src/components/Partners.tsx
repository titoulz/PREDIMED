import React from 'react';
import { Building, Users } from 'lucide-react';

const partners = [
  { name: 'ARS', category: 'Institution' },
  { name: 'CENTICH', category: 'Institution' },
  { name: 'Région Grand Est', category: 'Institution' },
  { name: 'Hôpitaux Universitaires de Strasbourg', category: 'Santé' },
  { name: 'Santé & Compagnie', category: 'Santé' },
  { name: 'ASDIA', category: 'Santé' },
  { name: 'CHRU Besançon', category: 'Santé' },
  { name: 'Mutualité Française', category: 'Institution' },
  { name: 'Les Opalines', category: 'Santé' }
];

export function Partners() {
  return (
    <div className="bg-white">
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Nos Partenaires
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Un réseau d'excellence au service de la santé
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-8">
            PREDIMED s'appuie sur un réseau de partenaires de confiance pour offrir une solution 
            complète et efficace de télésurveillance médicale. Nos collaborations avec des 
            institutions de premier plan garantissent la qualité et la fiabilité de notre service.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-blue-600" />
                <div className="ml-3">
                  <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                  <p className="text-sm text-gray-500">{partner.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Nos accréditations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow p-4">
                <p className="font-semibold text-gray-900">ISO 13485</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow p-4">
                <p className="font-semibold text-gray-900">ISO 27001</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow p-4">
                <p className="font-semibold text-gray-900">HDS</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow p-4">
                <p className="font-semibold text-gray-900">ANS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}