import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'; // Determine if it's a production build
  const isDev = command === 'serve'; // Determine if it's a development server

  return {
    plugins: [react()],
    base: isBuild ? 'Unagilogic.github.io/' : '/', // Set base path conditionally
    server: {
      host: isDev ? '0.0.0.0' : '192.168.50.175', // Use 0.0.0.0 for dev, specific IP for prod
    },
  };
});