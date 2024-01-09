const token = 'BQAQn0urDvI2ES_Dgg4ryCw_Vmf013iBAHVjDcWVS2e9tJAtuspd1JCgCk-rMRqVAsbigFqFnuFhUVPtgVPn4MZLs7WjbpZsJXWG-_BT8NdaQjbf-CI';

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

    return await result.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

export default async function getSearchResults(searchKeyword) {
  try {
    return (await fetchWebApi(
      `v1/search?q=${searchKeyword}&type=track&limit=10`
    )).items;
  } catch (error) {
    console.error('Error in getSearchResults:', error.message);
    throw error;
  }
}
