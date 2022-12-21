import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173, // exposed docker image port
    host: true,
    // hmr: {
    //   port: 5173, // exposed docker image port
    //   clientPort: 5000, // mapped docker container port
    // },
  },
  plugins: [react(), EnvironmentPlugin('all')],
});
