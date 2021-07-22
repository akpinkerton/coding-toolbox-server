
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return (
      knex('resources').insert([
        { 
          title: 'This is an example Title',
          url: 'https://mherman.org/blog/test-driven-development-with-node/',
          description: 'This would be a brief description of the resource that is linked above. It could have some length so I am simulating that here',
          tags: 'Knex, Servers, Testing, SQL'
        }
      ])
    )});
};
