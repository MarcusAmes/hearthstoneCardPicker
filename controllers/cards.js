const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    if(!req.session.cardlist) {
      req.session.cardlist = []
    }
    knex('cards').then((cards) => {
      res.render("cards", {cards: cards, cardlist: req.session.cardlist});
    })
  },
  create: (req, res) => {
    knex('cards').insert(req.body).then(() => {
      res.redirect('/');
    })
  },
  add: (req, res) => {
    knex('cards').where('id', req.params.id)
    .then((results) => {
      req.session.cardlist.push(results[0]);
      req.session.save(()=>{
        res.redirect('/')
      })
    })
  },
  remove: (req, res) => {
    let deck = req.session.cardlist;
    for(let i = 0; i < deck.length; i++) {
      if (deck[i].id === Number(req.params.id)) {
        deck.splice(i, 1);
        break;
      }
    }
    req.session.save(()=>{
      res.redirect('/')
    })
  },

}
