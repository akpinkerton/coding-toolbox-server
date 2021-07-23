
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
        },
        { tag: 'Javascript',
          url: 'https://img.icons8.com/color/48/000000/javascript--v1.png'
        },
        {
          tag: 'Bootstrap',
          url: 'https://img.icons8.com/color/50/000000/bootstrap.png'
        },
        { tag: 'HTML',
          url: 'https://img.icons8.com/color/50/000000/html-5--v1.png'
        },
        {
          tag: 'Styling',
          url: 'https://img.icons8.com/fluent/48/000000/font-style-formatting.png'
        },
        { tag: 'Github',
          url: 'https://icons8.com/icon/12598/github'
        },
        {
          tag: 'SQL',
          url: 'https://icons8.com/icon/10429/sql'
        },
        {
          tag: 'Other',
          url: 'https://icons8.com/icon/YLc2ppDp21C7/tools'
        }
      ])
    )});
};
