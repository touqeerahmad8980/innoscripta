"use client"

import { Box, Button, Container, CssBaseline, ThemeProvider } from "@mui/material";
import Filters from "@/components/Filters";
import { useState } from "react";
import { ArticleFiltersType, ArticlePreferenceType } from "@/services/types";
import ArticleList from "@/components/ArticleList";
import { theme } from "@/styles/theme";
import PreferencesDialog from "@/components/PreferencesDialog";

export default function Home() {
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [filters, setFilters] = useState<ArticleFiltersType>({
    keyword: "",
    date: "",
    category: "",
    source: "All"
  });

  const [preferences, setPreferences] = useState<ArticlePreferenceType>({
    sources: [],
    categories: [],
    authors: [],
  });

  const handleFiltersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({...prevState, [e.target.name]: e.target.value}));
  }

  const handlePreferencesSave = (prefs: ArticlePreferenceType) => {
    setPreferences(prefs);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box pt={3}>
          <Button
            variant="outlined"
            onClick={() => setPreferencesOpen(true)}
            sx={{ mb: 2 }}
          >
            Customize Feed
          </Button>
          <Filters filters={filters} onChange={handleFiltersChange} />
          <ArticleList filters={filters} preferences={preferences} />
          <PreferencesDialog
            open={preferencesOpen}
            onClose={() => setPreferencesOpen(false)}
            onSave={handlePreferencesSave}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
