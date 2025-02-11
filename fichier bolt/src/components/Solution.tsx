import React from 'react';
import { Activity, Heart, Settings as Lungs, LucideKey as Kidney, Droplet, Shield, Stethoscope, Users, ArrowRight, CheckCircle, Tablet as DeviceTablet, Laptop, Lock, Database } from 'lucide-react';

const pathologies = [
  { icon: Activity, name: 'Pathologies des personnes âgées', description: 'Désordres gérontologiques' },
  { icon: Stethoscope, name: 'Télésurveillance post-opératoire', description: 'Suivi après intervention' },
  { icon: Heart, name: 'Insuffisance cardiaque', description: 'Suivi cardiaque continu' },
  { icon: Lungs, name: 'Insuffisance respiratoire', description: 'Surveillance respiratoire' },
  { icon: Kidney, name: 'Insuffisance rénale', description: 'Monitoring rénal' },
  { icon: Droplet, name: 'Diabète', description: 'Contrôle glycémique' },
];

const devices = [
  'Capteurs physiologiques',
  'Montres et bracelets intelligents',
  'Tensiomètres',
  'Électrocardiographes',
  'Oxymètres de pouls',
  'Balances médicales',
  'Thermomètres',
  'Glucomètres',
  'Stéthoscopes numériques',
  'Dispositifs de mesure respiratoire',
];

const certifications = [
  {
    icon: Shield,
    title: 'Dispositif médical',
    description: 'Classé C.E., dispositif médical de classe 1',
  },
  {
    icon: Lock,
    title: 'Sécurité des données',
    description: 'Certifications ISO 13485, ISO 27001 et HDS',
  },
  {
    icon: Database,
    title: 'Protection des données',
    description: 'Conformité RGPD et confidentialité garantie',
  },
];

const objectives = [
  {
    icon: CheckCircle,
    title: 'Détection précoce',
    description: 'Détecter précocement les signes de détérioration de l\'état de santé des patients afin d\'anticiper toute aggravation.',
  },
  {
    icon: Activity,
    title: 'Réduction des urgences',
    description: 'Réduire le recours aux urgences et les hospitalisations évitables, en permettant une prise en charge proactive.',
  },
  {
    icon: Users,
    title: 'Optimisation du travail',
    description: 'Faciliter et optimiser le travail des professionnels de santé en leur fournissant un suivi à distance fiable, en temps réel.',
  },
  {
    icon: Heart,
    title: 'Qualité de vie',
    description: 'Renforcer la sécurité et la qualité de vie des patients en favorisant leur maintien à domicile dans des conditions optimales.',
  },
  {
    icon: DeviceTablet,
    title: 'Flexibilité de gestion',
    description: 'Offrir une gestion flexible de la télésurveillance, externalisée (24/7) ou interne, selon les besoins.',
  },
];

export function Solution() {
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
              Notre Solution
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-blue-100">
              Une approche innovante de la télésurveillance médicale pour les pathologies chroniques
            </p>
          </div>
        </div>
      </div>

      {/* Introduction with Visual Elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 leading-8">
            MyPrédi est une solution innovante de télésurveillance médicale dédiée à la prise en charge 
            des patients atteints de pathologies chroniques et polypathologiques. Elle permet un suivi 
            médical à distance efficace et personnalisé, intégrant des dispositifs médicaux connectés 
            installés au domicile des patients. Ces équipements assurent une transmission continue des 
            données vers une plateforme numérique avancée, permettant une analyse en temps réel et une 
            détection proactive des situations nécessitant une intervention médicale.
          </p>
        </div>
      </div>

      {/* Pathologies Grid with Hover Effects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pathologies Prises en Charge
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pathologies.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{item.name}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Connected Devices Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Dispositifs Médicaux Connectés
              </h2>
              <p className="text-gray-600 mb-8">
                Notre système s'appuie sur une large gamme d'objets connectés certifiés C.E. pour 
                assurer un suivi médical optimal :
              </p>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-2 gap-4">
                  {devices.map((device) => (
                    <div key={device} className="flex items-center space-x-2">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{device}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 pl-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-10 rounded-xl"></div>
                </div>
                <Laptop className="h-64 w-full text-blue-600 relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section with Advanced Graphics */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications et Sécurité
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Certification Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-10"></div>
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-8 md:mb-0 md:mr-8">
                    <Shield className="h-20 w-20 text-blue-600 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Dispositif Médical Certifié
                    </h3>
                    <p className="text-lg text-gray-600">
                      MyPrédi, classé C.E., est un dispositif médical de classe 1 conçu en conformité 
                      avec les normes les plus strictes.
                    </p>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold text-blue-600 mb-2">CE</div>
                      <div className="text-sm text-gray-600">Dispositif Médical</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                      <div className="text-sm text-gray-600">Classe Médicale</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-6"></div>
                <div className="relative">
                  <Lock className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ISO 13485</h3>
              <p className="text-gray-600">
                Certification garantissant la qualité et la sécurité de nos dispositifs médicaux
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-6"></div>
                <div className="relative">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ISO 27001</h3>
              <p className="text-gray-600">
                Norme internationale pour la sécurité des systèmes d'information
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-3"></div>
                <div className="relative">
                  <Database className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">HDS</h3>
              <p className="text-gray-600">
                Hébergement des Données de Santé certifié pour une protection maximale
              </p>
            </div>
          </div>

          {/* RGPD and Interoperability Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 relative">
              <div className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3">
                <div className="text-white opacity-5">
                  <Lock className="h-64 w-64" />
                </div>
              </div>
              <div className="relative z-10 grid md:grid-cols-2 gap-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Protection des Données</h3>
                  <p className="text-blue-100">
                    MyPrédi respecte scrupuleusement les exigences du RGPD en matière de protection 
                    des données personnelles et de confidentialité, garantissant ainsi la sécurité 
                    absolue des informations de santé.
                  </p>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Interopérabilité</h3>
                  <p className="text-blue-100">
                    Notre solution assure une interopérabilité optimale avec les systèmes numériques 
                    de santé nationaux et régionaux, permettant une intégration fluide dans 
                    l'écosystème de la e-santé et un suivi optimisé des patients à domicile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives with Interactive Cards */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Objectifs de la Télésurveillance
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {objectives.map((objective) => (
              <div
                key={objective.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:bg-blue-50 transition-colors duration-300"
              >
                <objective.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coordinated Care Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-8 py-12 relative">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Une prise en charge coordonnée
                </h2>
                <div className="prose prose-lg text-blue-100">
                  <p>
                    Pour garantir une télésurveillance médicale continue et efficace, PREDIMED TECHNOLOGY 
                    collabore étroitement avec les SSIAD (Services de Soins Infirmiers à Domicile) et 
                    d'autres acteurs du secteur médico-social. Cette coopération permet d'assurer un 
                    suivi 24h/24 et 7j/7.
                  </p>
                  <p className="mt-4">
                    Les données issues des dispositifs connectés sont analysées en continu par des 
                    professionnels qualifiés. En cas d'alerte, les équipes médicales et paramédicales 
                    des SSIAD sont mobilisées pour confirmer la situation et coordonner les interventions 
                    requises.
                  </p>
                  <p className="mt-4">
                    Un acteur désigné contribue à la coordination entre les différents professionnels 
                    médicaux, sociaux et médico-sociaux intervenant au domicile du patient, assurant 
                    une continuité des soins et une adaptation du plan de prise en charge personnalisé.
                  </p>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4 opacity-10">
                <Users className="h-64 w-64 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}