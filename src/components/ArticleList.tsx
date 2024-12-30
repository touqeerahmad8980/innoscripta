import { ArticleFiltersType, ArticlePreferenceType } from "@/services/types";
import fetcher from "@/utils/fetcher";
import { Alert, Box, CircularProgress, List, ListItem, ListItemText, Typography } from "@mui/material";
import useSWR from "swr";

interface ArticleListProps {
    filters: ArticleFiltersType;
    preferences: ArticlePreferenceType;
}

const ArticleList = ({ filters }: ArticleListProps) => {
    const { data, error } = useSWR(
        `/api/articles?keyword=${filters.keyword}&date=${filters.date}&category=${filters.category}&source=${filters.source}`,
        fetcher
    );

    if (!data) return <CircularProgress />;

    if(error) return <Alert severity="error">Failed to fetch articles.</Alert>;

    return (
        <Box>
            {data?.articles?.length ? (
                <List>
                    {data?.articles?.map((article: any, index: number) => (
                        <ListItem key={index} component="a" href={article.url} target="_blank" rel="noopener">
                            <ListItemText
                                primary={article.title}
                                secondary={
                                    <>
                                        <Typography component="span" variant="body2" color="text.primary">
                                            {article.author || 'Unknown Author'}
                                        </Typography>{article.description ? ` - ${article.description}`: ""}
                                    </>
                                }
                            />
                      </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="h6" color="text.secondary">
                    No articles found.
                </Typography>
            )}
        </Box>
    )
}

export default ArticleList;