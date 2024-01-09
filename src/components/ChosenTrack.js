import React from "react";
import '../css_files/ChosenTrack.css';

export default function ChosenTrack({ track, removeTrackFromCustomPlaylist }) {
    return (
        <div>
            <div className="chosen-track-div">
                <div>
                    <h3>{track.name}</h3>
                    <div className="track-artists-and-album">
                        {track.artists.map((artist, index) => (
                            <React.Fragment>
                                {index > 0 && <span> | </span>}
                                {artist}
                            </React.Fragment>
                        ))}
                        <p className="remove">-</p>
                        <p>{track.album}</p>
                    </div>
                </div>
                <button onClick={() => removeTrackFromCustomPlaylist(track.id)}>-</button>
            </div>
            <hr />
        </div>
    )
}

