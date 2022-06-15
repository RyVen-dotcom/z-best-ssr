const path = require('path');

// 预览打包文件`
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack5: true,
  distDir: 'dist-client',
  env: {
    customKey: process.env.CODE_ENV,
  },
  pageExtensions: ['tsx'],
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
});
