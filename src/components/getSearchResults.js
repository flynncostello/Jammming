const token = 'BQB_TRbwFGpCn6Uzhr9jg8ayJiNUHoTEzuqOILridziNM6JjnUnoBtRqDMLSF3wibqyilI_7Ngu6x1deHOCxrAjXvVVYHLRzznujGIhrSAf2JRYwgk4';

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
    return trackItems;
  } catch (error) {
    console.error('Error in getSearchResults:', error.message);
    throw error;
  }
}
