import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('chai aur backend server is running');
});

app.listen(PORT, () => {
  console.log(`chai aur backend server is running on ${PORT}`);
});