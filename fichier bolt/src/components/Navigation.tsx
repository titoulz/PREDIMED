import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';

const staticNavItems: NavItem[] = [
  { title: 'Notre solution', href: '/solution' },
  { title: 'Témoignages', href: '/temoignages' },
  {
    title: 'Nos offres',
    href: '/offres',
    subItems: [
      { title: 'Hôpitaux et Cliniques', href: '/offres/hopitaux' },
      { title: 'Centres de ressources territoriaux', href: '/offres/crt' },
      { title: 'Médecins de ville', href: '/offres/medecins' },
      { title: 'Particuliers', href: '/offres/particuliers' },
    ],
  },
  { title: 'Certifications', href: '/certifications' },
  { title: 'Nos partenaires', href: '/partenaires' },
  { title: 'Contactez-nous', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">PREDIMED</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {staticNavItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.subItems ? (
                  <button
                    className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 ${
                      isActive(item.href)
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.href}
                        className={`block px-4 py-2 text-sm ${
                          isActive(subItem.href)
                            ? 'text-blue-600 bg-gray-50 font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/login"
              className={`ml-4 px-4 py-2 text-white ${
                isActive('/login') ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
              } rounded-md`}
            >
              Se connecter
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {staticNavItems.map((item) => (
              <div key={item.title}>
                {item.subItems ? (
                  <>
                    <button
                      className="w-full flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className={`block px-3 py-2 text-sm ${
                              isActive(subItem.href)
                                ? 'text-blue-600 font-semibold'
                                : 'text-gray-700 hover:text-blue-600'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 ${
                      isActive(item.href)
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/login"
              className={`block px-3 py-2 text-center text-white ${
                isActive('/login') ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
              } rounded-md`}
              onClick={() => setIsOpen(false)}
            >
              Se connecter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}