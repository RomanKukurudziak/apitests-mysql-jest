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

app.get('/heroes/:id', async (req, res) => {
  await Heroes.sync();

  const hero = await Hero.findOne({ where: {id: req.params.id } });

  res.send({ data: hero })
});

app.put('/heroes/:id', async (req, res) => {
  await Hero.sync();

  const updatedHero = await Hero.update(
    {
      name: req.body.name,
      ownerId: req.body.ownerId,
    },
    { where: { id: req.params.id } },
  );

  res.send({ data: updatedHero });
});

app.delete('/heroes/:id', async (req, res) => {
  await Hero.sync();

  const deleted = await Hero.destroy({ where: { id: req.params.id } })

  res.send({ success: Boolean(deleted) });
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
});
