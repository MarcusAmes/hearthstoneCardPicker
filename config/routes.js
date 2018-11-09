//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js");
const cards = require("../controllers/cards.js");
module.exports = function(app){

  app.get('/', cards.index);
  app.post('/cards', cards.create);
  app.get('/cards/:id', cards.add);
  app.get('/cardlist/:id', cards.remove);

}
