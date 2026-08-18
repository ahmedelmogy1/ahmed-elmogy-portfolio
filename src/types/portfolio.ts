export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl: string;
  githubUrl: string;
  tools: string[];
  overview: string;
  deliverables: string[];
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  org: string;
  type: string;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  timeline: string;
  features: string[];
  popular?: boolean;
}
