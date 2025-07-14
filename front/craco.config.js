// craco.config.js - Configuración para Tamagui con Create React App
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Configurar alias para Tamagui
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'react-native$': 'react-native-web',
        'react-native-svg': 'react-native-svg-web',
      };

      // Configurar extensiones de archivo
      webpackConfig.resolve.extensions = [
        '.web.tsx',
        '.web.ts',
        '.web.jsx',
        '.web.js',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.json'
      ];

      return webpackConfig;
    },
  },
  babel: {
    plugins: [
      // Plugin para Tamagui
      [
        '@tamagui/babel-plugin',
        {
          components: ['@tamagui/core'],
          config: './src/tamagui.config.js',
        },
      ],
    ],
  },
};
