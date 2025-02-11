import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type Page = {
  id: string;
  title: string;
  path: string;
  content: {
    sections: Array<{
      id: string;
      type: 'text' | 'image' | 'html';
      content: string;
    }>;
  };
  is_default: boolean;
  created_at: string;
  updated_at: string;
};