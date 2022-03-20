const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 567fbabb93eb8a3590c8f6bb2c9e618e5ce78b05
