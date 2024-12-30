import { ARTICLE_API_CONFIGS } from "@/constants/apiConstants";
import { ArticleFiltersType } from "./types";
import axios from "axios";


const fetchFromSource = async (apiConfig: any, filter: ArticleFiltersType) => {
    if(!filter?.keyword && (apiConfig?.name === "NewsAPI")) return [];

    const articlesResponse = await axios.get(apiConfig.url, {
        params: {
            q: filter?.keyword || "",
            from: filter?.date,
            category: filter?.category || undefined,
            apiKey: apiConfig?.apiKey,
            'api-key': apiConfig?.apiKey,
        }
    });

    if(articlesResponse.data?.articles) {
        const articlesList: any = [];

        articlesResponse.data?.articles?.forEach((article: any) => {
            if(article?.title !== "[Removed]") {
                articlesList.push(article);
            }
        });

        return articlesList?.map((article: any) => {
            return {
                title: article?.title,
                description: article?.description,
                author: article?.author,
                url: article?.url
            }
        });
    };

    if(articlesResponse.data?.response?.results) {
        return articlesResponse.data?.response?.results?.map((article: any) => ({
            title: article?.webTitle,
            description: article?.description || article?.webPublicationDate,
            author: article?.pillarName,
            url: article?.webUrl
        }));
    };

    if(articlesResponse.data?.response?.docs) {
        return articlesResponse.data?.response?.docs?.map((article: any) => ({
            title: article?.headline.main,
            description: article?.abstract,
            author: article?.byline?.original || null,
            url: article?.web_url,
        }));
    };

    return [];
}

export const getArticlesBySource = async (params: ArticleFiltersType) => {
    const sourcesToFetch = params?.source && params?.source !== 'All'
    ? ARTICLE_API_CONFIGS.filter((config) => config.name === params?.source)
    : ARTICLE_API_CONFIGS;

    const allArticles = await Promise.all(sourcesToFetch.map((source) => fetchFromSource(source, params)));

    return allArticles.flat();
};