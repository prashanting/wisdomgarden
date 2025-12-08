export interface Tip {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  fullContent?: string;
}

export interface Category {
  id: string;
  name: string;
}

export enum Page {
  HOME = 'HOME',
  TIPS = 'TIPS',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  ARTICLE = 'ARTICLE',
  DISCLAIMER = 'DISCLAIMER'
}

export interface ArticleData {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
}