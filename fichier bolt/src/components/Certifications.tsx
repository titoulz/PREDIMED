import React from 'react';
import { Shield } from 'lucide-react';

export function Certifications() {
  // Charger les données de la page depuis le localStorage
  const pages = JSON.parse(localStorage.getItem('adminPages') || '[]');
  const certPage = pages.find((p: any) => p.id === 'certifications');

  if (!certPage) {
    return <div>Page non trouvée</div>;
  }

  return (
    <div className="bg-white">
      <div className="relative bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {certPage.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {certPage.sections.map((section: any) => (
          <div key={section.id} className="mb-8">
            {section.type === 'text' && (
              <div className="prose prose-lg mx-auto">
                {section.content.split('\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-600">{paragraph}</p>
                ))}
              </div>
            )}
            {section.type === 'html' && (
              <div 
                className="certification-content"
                dangerouslySetInnerHTML={{ __html: section.content }} 
              />
            )}
            {section.type === 'image' && (
              <img
                src={section.content}
                alt=""
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x300?text=Image+non+trouvée';
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}