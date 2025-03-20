/*
  # Schéma initial de la base de données

  1. Tables
    - services
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - icon (text)
      - features (jsonb)
      - benefits (jsonb)
      - order (integer)
      - created_at (timestamp)
      - updated_at (timestamp)

    - projects
      - id (uuid, primary key)
      - company (text)
      - url (text)
      - project (text)
      - role (text)
      - achievements (jsonb)
      - logo (text)
      - order (integer)
      - created_at (timestamp)
      - updated_at (timestamp)

    - testimonials
      - id (uuid, primary key)
      - name (text)
      - role (text)
      - company (text)
      - content (text)
      - image (text)
      - order (integer)
      - created_at (timestamp)
      - updated_at (timestamp)

  2. Security
    - RLS activé sur toutes les tables
    - Politiques de lecture publique
    - Politiques d'écriture pour les utilisateurs authentifiés
*/

-- Services
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  features jsonb NOT NULL DEFAULT '[]',
  benefits jsonb NOT NULL DEFAULT '[]',
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Services are viewable by everyone"
  ON services
  FOR SELECT
  USING (true);

CREATE POLICY "Services can be managed by authenticated users"
  ON services
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Projects
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  url text NOT NULL,
  project text NOT NULL,
  role text NOT NULL,
  achievements jsonb NOT NULL DEFAULT '[]',
  logo text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
  ON projects
  FOR SELECT
  USING (true);

CREATE POLICY "Projects can be managed by authenticated users"
  ON projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  content text NOT NULL,
  image text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Testimonials are viewable by everyone"
  ON testimonials
  FOR SELECT
  USING (true);

CREATE POLICY "Testimonials can be managed by authenticated users"
  ON testimonials
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Trigger function for updating timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_testimonials_updated_at
  BEFORE UPDATE ON testimonials
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS services_order_idx ON services ("order");
CREATE INDEX IF NOT EXISTS projects_order_idx ON projects ("order");
CREATE INDEX IF NOT EXISTS testimonials_order_idx ON testimonials ("order");