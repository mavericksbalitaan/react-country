module.exports = {
  apps: [
    {
      name: 'react-country',
      script: 'npx',
      args: 'serve -s build -p 5005',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
