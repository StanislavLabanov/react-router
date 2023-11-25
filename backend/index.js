const characters = require('./data/characters.json')
const episode = require('./data/episode.json')
const location = require('./data/location.json')
const express = require('express');

const PORT = process.env.PORT || 3010;
const app = express();

const typeJson = {
   characters: characters,
   episode: episode,
   location: location
}

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
});

app.get(`/api/categories`, (req, res) => {
   const jsonElement = typeJson[req.query.name]

   if (req.query.id) {
      res.json(jsonElement.find(el => el.id === +req.query.id))
   } else {
      res.json(jsonElement)
   }
});

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
})