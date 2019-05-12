const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('arrived 🏠. To be deployed to glitch.com'));

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});