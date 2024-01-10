const token = 'BQCELQB8gsoBTGMecraU7tBIRmXC_3DtMbWlgsHjWdix9UsTovpYbWOF7h6joBJo2jC_1BieKq6rfhPDWpJYza2Ykd5Za_0w2QH2gz_P5fhdPj2W9w0';

async function fetchWebApi(endpoint, method = 'GET', body) {
  try {
    const result = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      method,
      body: JSON.stringify(body)
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

export default async function getSearchResults(searchKeyword) {
  try {
    const trackInfo = await fetchWebApi(`v1/search?q=${searchKeyword}&type=track&limit=10`);
    const trackItems = trackInfo.tracks.items;
    console.log(trackItems);
    return trackItems;
  } catch (error) {
    console.error('Error in getSearchResults:', error.message);
    throw error;
  }
}
