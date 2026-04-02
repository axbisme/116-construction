export interface IMenuItem { text: string; url: string; }

export interface IService {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  imageSrc: string;
  bullets: string[];
}

export interface IProject {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  coverImage: string;
  gallery: string[];
  scope: string[];
  featured?: boolean;
  spotlight?: 'remodeling' | 'outdoor';
}

export interface ITestimonial {
  name: string;
  location: string;
  message: string;
}
