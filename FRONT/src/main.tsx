/* istanbul ignore file */
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyThemeProvider } from './context/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>,
);
