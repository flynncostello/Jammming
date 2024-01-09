import React from "react"

export default function SearchResultTrack({ name, artists }) {
    return (
        <div>
            <h3>{name}</h3>
            <div>
                {artists.map((artist, index) => (
                    <React.Fragment key={index}>
                    {index > 0 && <span> | </span>}
                    {artist}
                    </React.Fragment>
                ))}
            </div>
            <hr/>
        </div>
    )
}
