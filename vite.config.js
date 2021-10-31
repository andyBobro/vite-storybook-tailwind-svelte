import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';
import path from 'path'
import { fileURLToPath } from 'url';
import glob from 'glob'
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aliasEntries = glob.sync('/*/', { root: path.resolve(__dirname, "src") }).map((file) => {
  return {
    find: path.basename(file),
    replacement: file
  };
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({ 
      preprocess: sveltePreprocess({
        scss: {
          data: `@import 'src/styles/utils/variables.scss';
                @import 'src/styles/utils/mixins.scss';`,
          includePaths: [
            'src',
            'node_modules'
          ],
        },
        // postcss: {
        //   plugins: [require('autoprefixer')],
        // },
      }) 
    })
  ],
  define: {
    'process.env': process.env
  },
  build: {
    rollupOptions: {
      input: 'src/main.js',
      output: {
        name: 'main',
        file: "dist/scripts/bundle.js",
        format: 'iife',
        dir: undefined
      },
    }
  },
  resolve: {
    alias: aliasEntries
  }
})
