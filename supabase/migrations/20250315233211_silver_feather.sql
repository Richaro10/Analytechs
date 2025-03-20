/*
  # Blog Schema Setup

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `content` (text)
      - `excerpt` (text)
      - `image_url` (text)
      - `published` (boolean)
      - `published_at` (timestamptz)
      - `author_id` (uuid, foreign key)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `blog_authors`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `avatar_url` (text)
      - `bio` (text)
      - `created_at` (timestamptz)

    - `blog_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `description` (text)
      - `created_at` (timestamptz)

    - `blog_posts_categories` (junction table)
      - `post_id` (uuid, foreign key)
      - `category_id` (uuid, foreign key)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for public read access to published posts
*/

-- Create blog_authors table
CREATE TABLE IF NOT EXISTS blog_authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  avatar_url text,
  bio text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_authors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authors are viewable by everyone"
  ON blog_authors
  FOR SELECT
  USING (true);

CREATE POLICY "Authors can be created by authenticated users"
  ON blog_authors
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (SELECT id FROM blog_authors WHERE email = auth.email()));

CREATE POLICY "Authors can be updated by themselves"
  ON blog_authors
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are viewable by everyone"
  ON blog_categories
  FOR SELECT
  USING (true);

CREATE POLICY "Categories can be managed by authenticated users"
  ON blog_categories
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  image_url text,
  published boolean DEFAULT false,
  published_at timestamptz,
  author_id uuid REFERENCES blog_authors(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published posts are viewable by everyone"
  ON blog_posts
  FOR SELECT
  USING (published = true OR auth.uid() = author_id);

CREATE POLICY "Posts can be created by authenticated authors"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Posts can be updated by their authors"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = author_id)
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Posts can be deleted by their authors"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() = author_id);

-- Create blog_posts_categories junction table
CREATE TABLE IF NOT EXISTS blog_posts_categories (
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id uuid REFERENCES blog_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, category_id)
);

ALTER TABLE blog_posts_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Post categories are viewable by everyone"
  ON blog_posts_categories
  FOR SELECT
  USING (true);

CREATE POLICY "Post categories can be managed by post authors"
  ON blog_posts_categories
  FOR ALL
  TO authenticated
  USING (
    auth.uid() IN (
      SELECT author_id FROM blog_posts WHERE id = post_id
    )
  )
  WITH CHECK (
    auth.uid() IN (
      SELECT author_id FROM blog_posts WHERE id = post_id
    )
  );

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at trigger to blog_posts
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Create function to auto-update published_at
CREATE OR REPLACE FUNCTION update_published_at()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.published = true AND OLD.published = false THEN
    NEW.published_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add published_at trigger to blog_posts
CREATE TRIGGER update_blog_posts_published_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_published_at();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts (slug);
CREATE INDEX IF NOT EXISTS blog_posts_published_idx ON blog_posts (published);
CREATE INDEX IF NOT EXISTS blog_posts_author_id_idx ON blog_posts (author_id);
CREATE INDEX IF NOT EXISTS blog_categories_slug_idx ON blog_categories (slug);