exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('templates').del()
    .then(function () {
      // Inserts seed entries
      return (
      knex('templates').insert([
        { 
          title: 'This is an example template',
          content: '# Create a react app > npx create-react-app my-new-app # cd into folder and start the app on default localhost:2000 > npm start ',
          tags: 'Knex, Servers, Testing, SQL'
        }
      ])
    )});
};
