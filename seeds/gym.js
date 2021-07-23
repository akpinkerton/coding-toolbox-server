
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gym').del()
    .then(function () {
      // Inserts seed entries
      return (
      knex('gym').insert([
        {
          title: 'Screeps',
          url: 'https://screeps.com/',
          description: 'Javascript game',
          tags: 'Javascript, Brain Gym'
        }
      ])
    )});
};
