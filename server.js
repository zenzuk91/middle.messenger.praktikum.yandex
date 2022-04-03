const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);

});
<<<<<<< HEAD

=======
>>>>>>> 4c84c73e82371cfc4989c06f35afb88d265de301
