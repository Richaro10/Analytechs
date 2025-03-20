export interface Hero {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface Service {
  id: number;
  attributes: {
    icon: string;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    order: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface BlogPost {
  id: number;
  attributes: {
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export interface AboutSection {
  data: {
    id: number;
    attributes: {
      vision: string;
      values: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
      expertise: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export interface ApiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}