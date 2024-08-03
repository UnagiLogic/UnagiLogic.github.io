import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => { 
  const isDev = command   
 === 'serve';

  return {
    plugins: [react()],
    base: isDev ? '/' : '/your-app-name/', // Base path for production
    server: {
      host: true, // or '0.0.0.0' for clarity
      port: 5173, // Explicitly set the port 
    },
    preview: { // Configuration for 'vite preview' command (simulates production)
      host: '192.162.50.175', // Your production server IP
      port: 80,               // Typical production port (adjust if needed)
    },
  };
});