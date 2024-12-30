export interface ArticleFiltersType {
    keyword: string;
    date: string;
    category: string;
    source: string;
}
  
export interface Article {
    title: string;
    description: string;
    author: string | null;
    url: string;
}

export interface ArticlePreferenceType {
    sources: string[];
    categories: string[];
    authors: string[];
}