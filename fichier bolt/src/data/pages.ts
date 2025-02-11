import { Shield } from 'lucide-react';

export interface Section {
  id: string;
  type: 'text' | 'image' | 'html';
  content: string;
}

export interface Page {
  id: string;
  title: string;
  path: string;
  sections: Section[];
  isDefault?: boolean;
  icon?: typeof Shield;
}

export const pages: Page[] = [
  {
    id: 'certifications',
    title: 'Certifications',
    path: '/certifications',
    icon: Shield,
    sections: [
      {
        id: 'cert-intro',
        type: 'text',
        content: 'MyPrédi répond aux plus hautes exigences réglementaires et normatives. Notre solution est certifiée dispositif médical C.E. et intègre les meilleures pratiques en matière de gestion des dispositifs médicaux, sécurité des données et interopérabilité.'
      },
      {
        id: 'cert-grid',
        type: 'html',
        content: `<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">ISO 13485</h3>
            <p class="text-gray-600">Système de Management de la Qualité pour les Dispositifs Médicaux</p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-center text-gray-600">
                <span class="mr-2">✓</span>
                Contrôle strict de la traçabilité
              </li>
              <li class="flex items-center text-gray-600">
                <span class="mr-2">✓</span>
                Conformité réglementaire
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">ISO 27001</h3>
            <p class="text-gray-600">Système de Gestion de la Sécurité de l'Information</p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-center text-gray-600">
                <span class="mr-2">✓</span>
                Protection des données sensibles
              </li>
              <li class="flex items-center text-gray-600">
                <span class="mr-2">✓</span>
                Gestion stricte des accès
              </li>
            </ul>
          </div>
        </div>`
      }
    ],
    isDefault: true
  }
];