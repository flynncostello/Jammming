import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import CustomPlaylist from './components/CustomPlaylist';

export default function App() {
  const [ searchInput, setSearchInput ] = useState('');

  const updateSearchInput = (newInput) => setSearchInput(newInput);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <main>
        <SearchBar updateSearchInput={updateSearchInput} />
        <div>
          <SearchResults searchInput={searchInput} />
          <CustomPlaylist />
        </div>

      </main>
    </div>
  );
};
