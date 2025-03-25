import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  "stories": [
    "../packages/components/stories/**/*.mdx",
    "../packages/components/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    "@storybook/dark-mode",
    "@storybook/addon-dark-mode-toggle",
    "@storybook/auto-config",
  ],
  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true, // 直观的效果就是打开Storybook后，切换路由的时候能看到loading效果，说明它在编译，只有路由命中才编译。
      }
    }
  }
};
export default config;