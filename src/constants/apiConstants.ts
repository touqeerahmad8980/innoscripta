import { ApiConfig } from "./types";

export enum SOURCES {
    NEWS_API = 'NewsAPI',
    THE_GUARDIAN = 'The Guardian',
    NYT = 'New York Times',
}

export const ARTICLE_API_CONFIGS: ApiConfig[] = [
    {
        name: SOURCES.NEWS_API,
        url: 'https://newsapi.org/v2/everything',
        apiKey: process.env.NEWSAPI_KEY || process.env.NEXT_PUBLIC_NEWSAPI_KEY || '',
    },
    {
        name: SOURCES.THE_GUARDIAN,
        url: 'https://content.guardianapis.com/search',
        apiKey: process.env.GUARDIAN_API_KEY || process.env.NEXT_PUBLIC_GUARDIAN_API_KEY || '',
    },
    {
        name: SOURCES.NYT,
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        apiKey: process.env.NYT_API_KEY || process.env.NEXT_PUBLIC_NYT_API_KEY || '',
    }
];