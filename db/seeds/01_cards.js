
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {mana: 3, attack: 2, health: 3, description: "Goblin dude"},
        {mana: 1, attack: 1, health: 1, description: "Grunt"},
        {mana: 5, attack: 5, health: 3, description: "Ogre"}
      ]);
    });
};
