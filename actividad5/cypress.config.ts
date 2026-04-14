import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: './',
          sourceRoot: 'src',
          buildOptions: {
            tsConfig: 'cypress/tsconfig.json',
            outputPath: 'dist/browser',
          }
        }
      }
    },
    specPattern: 'src/**/*.cy.ts',
    supportFile: 'cypress/support/component.ts'
  },

  e2e: {
    baseUrl: 'http://localhost:8100',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts'
  }
});
