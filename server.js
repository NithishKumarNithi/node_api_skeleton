const express = require('express');
const app = express();
const PORT = 9999;

app.use(require('./routes'));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));