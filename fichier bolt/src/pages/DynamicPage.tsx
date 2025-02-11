import React from 'react';

interface Section {
  id: string;
  type: 'text' | 'image' | 'html';
  content: string;
}

interface Page {
  id: string;
  title: string;
  path: string;
  sections: Section[];
}

interface DynamicPageProps {
  page: Page;
}

export function DynamicPage({ page }: DynamicPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{page.title}</h1>
      <div className="space-y-8">
        {page.sections.map((section) => (
          <div key={section.id}>
            {section.type === 'text' && (
              <div className="prose prose-lg max-w-none">
                {section.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
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
            {section.type === 'html' && (
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}