import React from "react";
import '../css_files/SearchResultTrack.css';

export default function SearchResultTrack({ track, updateCustomPlaylist }) {
    const getTrackArtists = track => {
        const artistsList = track.artists;
        const artists = [];
        artistsList.forEach(curArtist => artists.push(curArtist.name));
        return artists;
    }
    
    const curTrackInfo = {
        id: track.id,
        name: track.name,
        artists: getTrackArtists(track),
        album: track.album.name,
        uri: track.uri
    };

    return (
        <div className="track-main-div">
            <hr/>
            <div className="track-div">
                <div>
                    <h3>{curTrackInfo.name}</h3>
                    <div className="track-artists-and-album">
                        {curTrackInfo.artists.map((artist, index) => (
                            <React.Fragment>
                            {index > 0 && <span> | </span>}
                            {artist}
                            </React.Fragment>
                        ))}
                        <p>-</p>
                        <p>{curTrackInfo.album}</p>
                    </div>
                </div>
                <button onClick={() => {
                    //console.log(curTrackInfo);
                    updateCustomPlaylist(curTrackInfo)
                }}>+</button>
            </div>
        </div>
    )
}
