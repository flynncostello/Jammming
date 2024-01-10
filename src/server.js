const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Import the axios module
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  console.log('Authorization Code:', code);

  res.redirect(`http://localhost:3001/?code=${code}`);
});

app.get('/exchange-token', (req, res) => {
  const code = req.query.code;
  const clientId = '721db2f866844a2fafa3b59982d10845';
  const clientSecret = 'd8680d0bf8ee4c5eaf989716b4a7c01b';
  const redirectUri = 'http://localhost:3000/callback';

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      code: code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    },
    headers: {
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
    },
  };

  axios(authOptions)
    .then((response) => {
      const access_token = response.data.access_token;
      res.json({ access_token });
    })
    .catch((error) => {
      res.status(error.response.status).json({ error: 'Token exchange failed' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
