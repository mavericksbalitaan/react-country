module.exports = {
  apps: [
    {
      name: 'react-country',
      script: 'npx',
      args: 'serve -s build -p 5007',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
