
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('icons').del()
    .then(function () {
      // Inserts seed entries
      return (
      knex('icons').insert([
        { tag: 'Git',
          url: 'https://img.icons8.com/color/50/000000/git.png'
        },
        {
          tag: 'React',
          url: 'https://img.icons8.com/offices/40/000000/react.png'
        }
      ])
    )});
};
