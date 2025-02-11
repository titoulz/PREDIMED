import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Page } from '../lib/supabase';

export function Admin() {
  const [pages, setPages] = useState<Page[]>([]);
  const [editingPage, setEditingPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPages();
  }, []);

  async function fetchPages() {
    try {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setPages(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }

  async function handleSavePage() {
    if (!editingPage) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('pages')
        .upsert({
          id: editingPage.id,
          title: editingPage.title,
          path: editingPage.path,
          content: { sections: editingPage.content.sections },
          is_default: editingPage.is_default
        })
        .select()
        .single();

      if (error) throw error;

      setPages(pages.map(p => p.id === data.id ? data : p));
      setEditingPage(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de la sauvegarde');
    } finally {
      setLoading(false);
    }
  }

  async function handleDeletePage(pageId: string) {
    const page = pages.find(p => p.id === pageId);
    if (page?.is_default) {
      setError('Les pages par défaut ne peuvent pas être supprimées');
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase
        .from('pages')
        .delete()
        .eq('id', pageId);

      if (error) throw error;

      setPages(pages.filter(p => p.id !== pageId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de la suppression');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-600">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Administration PREDIMED
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div className="px-4 py-8 sm:px-0">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {pages.map((page) => (
                    <li key={page.id}>
                      <div className="px-4 py-4 flex items-center justify-between sm:px-6">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-medium text-gray-900 truncate">
                            {page.title}
                            {page.is_default && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Page par défaut
                              </span>
                            )}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {page.path}
                          </p>
                        </div>
                        <div className="ml-4 flex-shrink-0 space-x-2">
                          <button
                            onClick={() => setEditingPage(page)}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700"
                          >
                            <Edit2 className="h-4 w-4 mr-1" />
                            Modifier
                          </button>
                          {!page.is_default && (
                            <button
                              onClick={() => handleDeletePage(page.id)}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-red-600 hover:bg-red-700"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Supprimer
                            </button>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}