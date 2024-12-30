import { ArticleFiltersType } from "@/services/types";

const fetcher = (url: string, filters: ArticleFiltersType) =>
    fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters),
    }).then((res) => res.json());
  
  export default fetcher;