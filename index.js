const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    live: 'drafter'
  })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})