
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return (
      knex('resources').insert([
        {
          title: 'Editing iTerm2 Terminal',
          url: 'https://stackoverflow.com/questions/36157663/editing-the-zshrc-file',
          description: 'Customize your terminal by accessing the zshrc file',
          tags: 'Git, Mac, Terminal, Customize, Stack-Overflow'
        },
        {
          title: 'Knex Cheatsheet',
          url: 'https://devhints.io/knex',
          description: 'Cheatsheet for working with Knex',
          tags: 'Knex, Servers, SQL, Cheatsheet'
        },
        {
          title: 'Jest Testing ',
          url: 'https://bcostabatista.medium.com/testing-nodejs-applications-with-jest-7ae334daaf55',
          description: 'Quick overview of writing different tests with Jest',
          tags: 'Javascript, React, Testing, Jest'
        },
        {
          title: 'Jest Cheatsheet',
          url: 'https://devhints.io/jest',
          description: 'Cheatsheet for working with',
          tags: 'Jest, Testing, JavaScript, Cheatsheet'
        },
        {
          title: 'Creating a postgres database in with Docker',
          url: 'https://stackoverflow.com/questions/59715622/docker-compose-and-create-db-in-postgres-on-init',
          description: 'Discusses how to create a database with Docker Compose up',
          tags: 'Postgres, Docker'
        },
        {
          title: 'Docker Compose with Node.js, Express, Postgres',
          url: 'https://codewithhugo.com/node-postgres-express-docker-compose/',
          description: 'Setting up a basic full stack app with Docker Compose, Express Server, JS frontend, and postgres DB. ',
          tags: 'Docker, Javascript, Express, Postgres'
        },
        {
          title: 'Dockerizing a Node.js App',
          url: 'https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application',
          description: 'Start to finish explanation of setting up a fullstack app and dockerizing it',
          tags: 'Docker, Javascript, Express, Postgres'
        },
        {
          title: 'Docker-Postgres Documentation',
          url: 'https://hub.docker.com/_/postgres',
          description: 'Helpful for env variables',
          tags: 'Documentation, Docker'
        },
        {
          title: 'SASS/SCSS development environment',
          url: 'https://www.youtube.com/watch?v=yva2bj-lVRA',
          description: '21 min vid explaining how to use live-server to see hot SASS changes in vanilla JS development',
          tags: 'SASS, Styling, Youtube'
        },
        {
          title: 'Markdown Cheatsheet',
          url: 'https://www.markdownguide.org/cheat-sheet/',
          description: 'Quick markdown syntax',
          tags: 'Markdown, Cheatsheet'
        },
        {
          title: 'CRA is a subfolder and won\'t publish to Github',
          url: 'https://stackoverflow.com/questions/57163183/content-of-create-react-app-is-not-pushed-in-github/57163336',
          description: 'When creating small fullstack apps, it is common to have CRA in a sub folder as the client. CRA auto git inits, this explains how to remove that so that you can publish the full project to Github in one repo.',
          tags: 'React, Git, Github, Errors'
        },
        {
          title: 'Pass props through route components',
          url: 'https://learnwithparam.com/blog/how-to-pass-props-in-react-router/',
          description: 'Syntax for passing props down component tree when using router.',
          tags: 'React'
        },
        {
          title: 'Heroku Tool belt Guide',
          url: 'https://bryanguner.medium.com/deploy-react-app-to-heroku-using-postgres-express-70b7ea807986',
          description: 'Quick reference to deployment verbiage. ',
          tags: 'Heroku'
        },
        {
          title: 'Heroku deploys React dev env',
          url: 'https://stackoverflow.com/questions/50058408/create-react-app-does-not-use-build-for-production-on-heroku',
          description: 'Development environment is deployed instead of production. Causes issues with HTTP requests. ',
          tags: 'Heroku, Errors'
        },
        {
          title: 'Conditional Rendering in React',
          url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering',
          description: 'Simple tutorial of a basic todo app that explores conditional rendering',
          tags: 'React'
        },
        {
          title: 'CSS Gradient Backgrounds',
          url: 'https://www.w3schools.com/css/css3_gradients.asp',
          description: 'Cool background options using gradient colors to create dimension',
          tags: 'Styling, CSS'
        }
      ])
    )});
};
