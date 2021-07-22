
exports.seed = function(knex) {
  return knex('test_inputs').del()
    .then(function () {
      // Inserts seed entries
      return knex('test_inputs').insert([
        {type: 'resource', title: 'Create a new react app', url: "https://mherman.org/blog/test-driven-development-with-node/", description: 'npx create-react-app <fileName>', tags: 'react'},
      ]);
    });
};