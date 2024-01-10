import { useState } from "react";
import '../css_files/SearchBar.css'

export default function SearchBar({updateSearchInput}) {
    const [ searchKeyword, setSearchKeyword ] = useState('');

    const makeSearch = event => {
        event.preventDefault();
        updateSearchInput(searchKeyword); // Updates value in App.js
        setSearchKeyword('');
    }

    return (
        <form onSubmit={makeSearch}>
            <input type="text" placeholder="Enter Keyword" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
            <button type="submit">SEARCH SONGS</button>
        </form>
    );
};

