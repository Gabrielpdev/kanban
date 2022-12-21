import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { MyThemeProvider } from '../src/context/theme';

import { GlobalStyles } from '../src/styles/global';
import { light } from '../src/styles/themes/light';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <MyThemeProvider>
      <ThemeProvider theme={light}>
        <ToastContainer />
        <Story />
        <GlobalStyles />
      </ThemeProvider>
    </MyThemeProvider>
  ),
];
