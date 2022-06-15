module.exports = {
  apps: [
    {
      name: 'next-project',
      script: './dist-server/server/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '4G',
      env: {
        NODE_ENV: 'production',
        CODE_ENV: 'test',
      },
      env_production: {
        NODE_ENV: 'production',
        CODE_ENV: 'production',
      },
    },
  ],
};
