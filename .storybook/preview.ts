import type { Preview } from '@storybook/react'
import '../packages/components/index.css'
// import { withThemeByClassName } from '@storybook/addon-themes';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // withThemeByClassName({
    //   themes: {
    //     light: 'light',
    //     dark: 'dark',
    //   },
    //   defaultTheme: 'light',
    // }),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],
};

export default preview;