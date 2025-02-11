export interface NavItem {
  title: string;
  href: string;
  subItems?: NavItem[];
}

export interface Testimonial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface Certification {
  name: string;
  logo: string;
  description: string;
}