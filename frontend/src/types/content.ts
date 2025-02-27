export interface Hero {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image: {
    url: string;
  };
}

export interface AboutSection {
  vision: string;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  expertise: Array<{
    title: string;
    description: string;
  }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
}