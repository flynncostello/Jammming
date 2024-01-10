const token = 'BQCELQB8gsoBTGMecraU7tBIRmXC_3DtMbWlgsHjWdix9UsTovpYbWOF7h6joBJo2jC_1BieKq6rfhPDWpJYza2Ykd5Za_0w2QH2gz_P5fhdPj2W9w0';

export default async function getUserInfo(method = 'GET', body) {
  try {
    const result = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body)
    });

    if (!result.ok) {
      throw new Error(`Failed to fetch data. Status: ${result.status}`);
    }

    const jsonInfo = await result.json();
    return jsonInfo;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}
