const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('static'));

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
