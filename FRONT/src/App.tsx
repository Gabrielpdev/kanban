/* istanbul ignore file */

import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './context/theme';
import { queryClient } from './helpers/queries/querieClient';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/global';
import { light } from './styles/themes/light';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme || light}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Home />
        <GlobalStyles />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
