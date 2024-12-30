import React from "react";
import { Box, TextField, MenuItem, Grid } from "@mui/material";
import { ArticleFiltersType } from "@/services/types";
import { ARTICLE_API_CONFIGS } from "@/constants/apiConstants";

interface FilterProps {
    filters: ArticleFiltersType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filters = ({ filters, onChange }: FilterProps) => {
    return (
        <Box component="form" sx={{ mb: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Search by keyword"
                        name="keyword"
                        value={filters.keyword}
                        onChange={onChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Date"
                        name="date"
                        value={filters.date}
                        onChange={onChange}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        label="Category"
                        name="category"
                        value={filters.category}
                        onChange={onChange}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        select
                        label="Source"
                        name="source"
                        value={filters?.source || "All"}
                        onChange={onChange}
                        variant="outlined"
                    >
                        <MenuItem value="All">All Sources</MenuItem>
                        {Object.values(ARTICLE_API_CONFIGS).map((config) => (
                            <MenuItem key={config.name} value={config.name}>
                                {config.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Filters;