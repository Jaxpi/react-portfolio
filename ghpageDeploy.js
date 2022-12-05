const ghPages = require('gh-pages');

ghPages.publish(
  'build', // the first argument is the local folder to publish
  {
    branch: 'gh-pages', // <== this is explicitly telling the library to publish the folder stated above to this branch
    repo: 'https://github.com/jaxpi/react-portfolio.git',
  },
  (err) => {
    if (err) console.error(err);
    else console.log('Deploy completed!');
  }
);