import { useEffect, useState } from "react";
import getSearchResults from "./getSearchResults";
import { v4 as uuidv4 } from 'uuid';
import SearchResultTrack from "./SearchResultTrack";

export default function SearchResults({ searchInput }) {
    const [keyword, setKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    /*
    useState([
      {
        song: 'Never Be Like You',
        artists: ['Flume'],
        id: 0,
      },
      {
        song: 'Fair Trade',
        artists: ['Drake', 'Travis Scott'],
        id: 1,
      },
    ]);
    */
  
    useEffect(() => {
      setKeyword(searchInput);
      const fetchData = async () => {
        if (searchInput.trim().length > 0) {
          try {
            const results = await getSearchResults(keyword);
            setSearchResults(results);
          } catch (error) {
            console.error('Error:', error);
          }
        }
      };
      fetchData();
    }, [searchInput, setSearchResults, keyword]);
  
    return (
      <div>
        <h2>Results:</h2>
        <br />
        <ul className='Search-Results'>
          {searchResults.map(({ name, artists }) => (
            <SearchResultTrack key={uuidv4()} name={name} artists={artists} />
          ))}
        </ul>
      </div>
    );
}
  