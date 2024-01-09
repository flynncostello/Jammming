import { useEffect, useState } from "react";
import getSearchResults from "./getSearchResults";
import SearchResultTrack from "./SearchResultTrack";
import generateId from "./utilities";
import '../css_files/SearchResults.css';

export default function SearchResults({ searchInput, updateCustomPlaylist }) {
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        if (searchInput.trim().length > 0) {
          try {
            //console.log(searchInput);
            const results = await getSearchResults(searchInput);
            console.log(results);
            setSearchResults(results);
          } catch (error) {
            console.error('Error:', error);
          }
        }
      };
      fetchData();
    }, [searchInput, setSearchResults]);

  
    return (
      <div className="Search-results-div">
        <h2>Results:</h2>
        <ul>
            {searchResults.map((curTrack) => (
              <SearchResultTrack key={generateId()} track={curTrack} updateCustomPlaylist={updateCustomPlaylist} />
            ))}
        </ul>
      </div>
    );
}
  