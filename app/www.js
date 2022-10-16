const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Hero = require('./models/hero.model');
 
const jsonParser = bodyParser.json();

app.use(jsonParser);

app.get('/heroes', async (req, res) => {
  await Hero.sync();

  const list = await Hero.findAll();
  res.send({ list });
});

app.post('/heroes', async (req, res) => {
  await Hero.sync();

  const hero = await Hero.create({
    name: req.body.name,
    ownerId: req.body.ownerId,
  });

  res.send({ data: hero });
});

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
})