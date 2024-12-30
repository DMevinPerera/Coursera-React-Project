import { defineConfig } from 'vite';

export default defineConfig({
  // Set base to '/' to ensure paths are correct for production
  base: '/',

  // Configure build settings
  build: {
    outDir: 'dist', // Directory for production build output
    assetsDir: 'assets', // Directory for assets (CSS, JS, images)
    manifest: true, // Generate a manifest file to ensure proper asset linking
    rollupOptions: {
      input: '/index.html', // Ensure the entry file is correctly set
    },
  },

  // Configure public directory for static assets
  publicDir: 'public', // Adjust if your static files are stored elsewhere

  // Enable sourcemaps for easier debugging
  define: {
    'process.env': {}
  },

  // Server settings for development


  // Optionally enable CSS Preprocessing if you're using SASS or LESS
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables";' // Adjust to your file paths
      }
    }
  },
});
