const path = require('path');

module.exports = {
  webpackFinal: async (config) => {
    config.stats = 'errors-only';
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src/'),
    };
    config.resolve.modules.push('src');

    const imageRule = config.module.rules.find((rule) =>
      rule.test?.test('.svg'),
    );
    imageRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    './**/__stories__/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],

  staticDirs: ['../public'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
    '@storybook/addon-mdx-gfm',
  ],

  // https://storybook.js.org/docs/react/configure/images-and-assets#serving-static-files-via-storybook-configuration
  // staticDirs: ['./public'],
  features: {
    storyStoreV7: false,
  },

  docs: {
    autodocs: true,
  },
};
