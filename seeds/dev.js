
exports.seed = function(knex) {
  return knex('dev').del()
    .then(function () {
      return (
      knex('dev').insert([
        {
          type: '1',
        }
      ])
    )});
};

