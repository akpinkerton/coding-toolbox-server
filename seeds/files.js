exports.seed = function(knex) {
  return knex('files').del()
    .then(function () {
      return (
      knex('files').insert([
        {
          file_name: 'test file name',
          file: 'test file',
        }
      ])
    )});
};
