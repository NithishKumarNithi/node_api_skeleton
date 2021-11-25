const express = require('express');
const config = require('./config');
const app = express();

app.use(express.urlencoded({extended : true}));

app.use(require('./routes'));

app.listen(config.PORT, () => console.log(`App is running on port ${config.PORT}`));