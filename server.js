const express = require('express');
const config = require('./config');
const app = express();

app.set('json spaces', 2)
app.use(express.urlencoded({extended : true}));

app.use(require('./routes'));

app.listen(config.PORT, () => console.log(`App is running on port ${config.PORT}`));