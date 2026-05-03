export interface Project {
  slug: string;
  title: string;
  year: number;
  status?: 'active' | 'completed';
  featured?: boolean;
  period?: string;
  title_color?: string;
  shortDescription: string | Record<'en' | 'es', string>;
  fullDescription: string | Record<'en' | 'es', string>;
  technologies: string[];
  images: string[]; // Idealmente exactamente 3 fotos
  selectedImageIndex: number;
  liveDemo?: string;
  repository?: string;
}
