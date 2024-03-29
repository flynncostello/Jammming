import React, { useState } from "react";
import ChosenTrack from "./ChosenTrack";
import generateId from "./utilities";
import '../css_files/CustomPlaylist.css';


export default function CustomPlaylist({ customPlaylist, saveCustomPlaylistFunc, removeTrackFromCustomPlaylist }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveCustomPlaylistFunc(event, inputValue);
        setInputValue('');
    };
    
    return (
        <div className="custom-playlist-div">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Playlist Name"
                    onChange={handleInputChange}
                />
                <ul>
                    {customPlaylist.map(track => (
                        <ChosenTrack key={generateId()} track={track} removeTrackFromCustomPlaylist={removeTrackFromCustomPlaylist} />
                    ))}
                </ul>
                <button type="submit" className="custom-playlist-submit-button">SAVE TO SPOTIFY</button>
            </form>
        </div>
    );
}
