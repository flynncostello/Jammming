import { useState } from "react";

export default function SearchBar({updateSearchInput}) {
    const [ searchKeyword, setSearchKeyword ] = useState('');

    const makeSearch = event => {
        event.preventDefault();
        updateSearchInput(searchKeyword); // Updates value in App.js
        setSearchKeyword('');
    }

    return (
        <form onSubmit={makeSearch}>
            <input type="text" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
            <button type="submit">SEARCH</button>
        </form>
    );
};

