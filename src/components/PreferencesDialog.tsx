import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { SOURCES } from '../constants/apiConstants';

interface PreferencesDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (preferences: Preferences) => void;
}

export interface Preferences {
  sources: string[];
  categories: string[];
  authors: string[];
}

const PreferencesDialog: React.FC<PreferencesDialogProps> = ({ open, onClose, onSave }) => {
  const [sources, setSources] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('preferences') || '{}');
    setSources(savedPreferences.sources || []);
    setCategories(savedPreferences.categories || []);
    setAuthors(savedPreferences.authors || []);
  }, [open]);

  const handleSave = () => {
    const preferences = { sources, categories, authors };
    localStorage.setItem('preferences', JSON.stringify(preferences));
    onSave(preferences);
    onClose();
  };

  const toggleSelection = (item: string, list: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle>Preferences</DialogTitle>
      <DialogContent>
        <FormGroup>
          <h3>Sources</h3>
          {Object.values(SOURCES).map((source) => (
            <FormControlLabel
              key={source}
              control={
                <Checkbox
                  checked={sources.includes(source)}
                  onChange={() => toggleSelection(source, sources, setSources)}
                />
              }
              label={source}
            />
          ))}
        </FormGroup>
        <FormGroup>
          <h3>Categories</h3>
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.includes('Technology')}
                onChange={() => toggleSelection('Technology', categories, setCategories)}
              />
            }
            label="Technology"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={categories.includes('Business')}
                onChange={() => toggleSelection('Business', categories, setCategories)}
              />
            }
            label="Business"
          />
        </FormGroup>
        <FormGroup>
          <h3>Authors</h3>
          <FormControlLabel
            control={
              <Checkbox
                checked={authors.includes('Author 1')}
                onChange={() => toggleSelection('Author 1', authors, setAuthors)}
              />
            }
            label="Author 1"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PreferencesDialog;