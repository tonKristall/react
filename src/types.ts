export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export interface IResultSearch {
  error: boolean;
  articles: IArticle[];
}

export type THeaderItem = 'home' | 'about';

export type TUrlParams = {
  title: string;
};
