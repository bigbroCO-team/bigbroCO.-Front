/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../../../client/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../admin/src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
