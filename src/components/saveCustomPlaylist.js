import getUserInfo from "./getUserInfo";

const token = 'BQCELQB8gsoBTGMecraU7tBIRmXC_3DtMbWlgsHjWdix9UsTovpYbWOF7h6joBJo2jC_1BieKq6rfhPDWpJYza2Ykd5Za_0w2QH2gz_P5fhdPj2W9w0';

async function createPlaylist(userId, method = 'POST', playlistName) {
  try {
    const result = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        method,
        body: JSON.stringify({
            name: playlistName,
            description: '',
        })
    });

    if (!result.ok) {
      throw new Error('Failed to fetch data');
    }
    const jsonInfo = await result.json();
    return jsonInfo;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}


export default async function saveCustomPlaylist(tracks, inputValue) {
    console.log(tracks);
    console.log(inputValue);
    try {
        const userInfo = await getUserInfo();
        const userId = userInfo.id;
        const newPlaylist = await createPlaylist(userId, 'POST', inputValue);
        console.log(newPlaylist);
        return newPlaylist;
      } catch (error) {
        console.error('Error in saveCustomPlaylist:', error.message);
        throw error;
      }
}


    /* Example newTrack:
    [{id: 123, name: 'A', artists: ['a', 'b'], album: 'abc', uri: 'hello.com'},...]

    const curTrackInfo = {
      id: track.id,
      name: track.name,
      artists: getTrackArtists(track),
      album: track.album.name,
      uri: track.uri
    };*/