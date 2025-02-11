/*
  # Create pages management system
  
  1. New Tables
    - `pages`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `path` (text, unique, not null)
      - `content` (jsonb, not null)
      - `is_default` (boolean, default false)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `pages` table
    - Add policies for authenticated admin users
*/

CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  path text UNIQUE NOT NULL,
  content jsonb NOT NULL,
  is_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

-- Policy to allow only authenticated admin users to modify pages
CREATE POLICY "Allow admin users full access" ON pages
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'admin@predimed.fr')
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@predimed.fr');

-- Policy to allow public read access
CREATE POLICY "Allow public read access" ON pages
  FOR SELECT
  TO public
  USING (true);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update the updated_at column
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();