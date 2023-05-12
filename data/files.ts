import type { FileIcon } from '../typings/index.d.js'

export let filesIcons: FileIcon[] = [
  {
    id: 'babel',
    name: 'Babel',
    files: [
      '.babelrc',
      '.babelrc.cjs',
      '.babelrc.js',
      '.babelrc.mjs',
      '.babelrc.json',
      'babel.config.cjs',
      'babel.config.js',
      'babel.config.mjs',
      'babel.config.json',
      'babel-transform.js',
      '.babel-plugin-macrosrc',
      '.babel-plugin-macrosrc.json',
      '.babel-plugin-macrosrc.yaml',
      '.babel-plugin-macrosrc.yml',
      '.babel-plugin-macrosrc.js',
      'babel-plugin-macros.config.js',
    ],
  },
  {
    id: 'browserslist',
    name: 'Browserslist',
    files: ['browserslist', '.browserslistrc'],
  },
  {
    id: 'commitlint',
    name: 'CommitLint',
    files: [
      '.commitlintrc',
      '.commitlintrc.js',
      '.commitlintrc.cjs',
      '.commitlintrc.ts',
      '.commitlintrc.cts',
      '.commitlintrc.json',
      '.commitlintrc.yaml',
      '.commitlintrc.yml',
      '.commitlint.yaml',
      '.commitlint.yml',
      'commitlint.config.js',
      'commitlint.config.cjs',
      'commitlint.config.ts',
      'commitlint.config.cts',
    ],
  },
  {
    id: 'cypress',
    name: 'Cypress',
    files: [
      'cypress.json',
      'cypress.env.json',
      'cypress.config.ts',
      'cypress.config.js',
      'cypress.config.cjs',
      'cypress.config.mjs',
    ],
  },
  {
    id: 'docker',
    name: 'Docker',
    files: [
      'dockerignore',
      'dockerfile',
      'docker-compose.yml',
      'docker-compose.yaml',
    ],
  },
  {
    id: 'editorconfig',
    name: 'EditorConfig',
    files: ['.editorconfig', 'editorconfig'],
  },
  {
    id: 'eslint',
    name: 'ESLint',
    files: [
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.yaml',
      '.eslintrc.json',
      '.eslintrc-md.js',
      '.eslintrc-jsdoc.js',
      '.eslintrc',
      '.eslintignore',
      '.eslintcache',
      '.eslint.config.js',
      'eslint.config.js',
    ],
  },
  {
    id: 'git',
    name: 'Git',
    files: [
      '.gitignore',
      '.git-blame-ignore',
      '.gitignore-global',
      '.gitignore_global',
      '.gitconfig',
      '.gitattributes',
      '.gitmodules',
      '.gitkeep',
      '.gitinclude',
      'git-history',
    ],
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    files: ['gitlab-ci.yml'],
  },
  {
    id: 'grunt',
    name: 'Grunt',
    files: [
      'gruntfile.js',
      'gruntfile.ts',
      'gruntfile.coffee',
      'gruntfile.babel.js',
      'gruntfile.babel.ts',
      'gruntfile.babel.coffee',
    ],
  },
  {
    id: 'gulp',
    name: 'Gulp',
    files: [
      'gulpfile.js',
      'gulpfile.mjs',
      'gulpfile.ts',
      'gulpfile.cts',
      'gulpfile.mts',
      'gulpfile.babel.js',
    ],
  },
  {
    id: 'husky',
    name: 'Husky',
    files: [
      '.huskyrc',
      'husky.config.js',
      '.huskyrc.json',
      '.huskyrc.js',
      '.huskyrc.yaml',
      '.huskyrc.yml',
    ],
  },
  {
    id: 'jest',
    name: 'Jest',
    files: [
      'jest.config.js',
      'jest.config.cjs',
      'jest.config.mjs',
      'jest.config.ts',
      'jest.config.cts',
      'jest.config.mts',
      'jest.config.json',
      'jest.e2e.config.js',
      'jest.e2e.config.cjs',
      'jest.e2e.config.mjs',
      'jest.e2e.config.ts',
      'jest.e2e.config.cts',
      'jest.e2e.config.mts',
      'jest.e2e.config.json',
      'jest.e2e.json',
      'jest-unit.config.js',
      'jest-e2e.config.js',
      'jest-e2e.config.cjs',
      'jest-e2e.config.mjs',
      'jest-e2e.config.ts',
      'jest-e2e.config.cts',
      'jest-e2e.config.mts',
      'jest-e2e.config.json',
      'jest-e2e.json',
      'jest-github-actions-reporter.js',
      'jest.setup.js',
      'jest.setup.ts',
      'jest.json',
      '.jestrc',
      '.jestrc.js',
      '.jestrc.json',
      'jest.teardown.js',
    ],
  },
  {
    id: 'makefile',
    name: 'Makefile',
    files: ['makefile', 'gnumakefile', 'kbuild'],
  },
  {
    id: 'nano-staged',
    name: 'Nano Staged',
    files: [
      '.nano-staged.js',
      'nano-staged.js',
      '.nano-staged.cjs',
      'nano-staged.cjs',
      '.nano-staged.mjs',
      'nano-staged.mjs',
      '.nano-staged.json',
      'nano-staged.json',
      '.nanostagedrc',
    ],
  },
  {
    id: 'nginx',
    name: 'Nginx',
    files: ['nginx.conf'],
  },
  {
    id: 'nodejs',
    name: 'NodeJS',
    files: [
      'package.json',
      'package-lock.json',
      '.nvmrc',
      '.esmrc',
      '.node-version',
    ],
  },
  {
    id: 'npm',
    name: 'npm',
    files: ['.npmignore', '.npmrc'],
  },
  {
    id: 'playwright',
    name: 'Playwright',
    files: [
      'playwright.config.js',
      'playwright.config.mjs',
      'playwright.config.ts',
      'playwright-ct.config.js',
      'playwright-ct.config.mjs',
      'playwright-ct.config.ts',
    ],
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    files: ['pnpm-lock.yaml', 'pnpm-workspace.yaml', '.pnpmfile.cjs'],
    light: true,
  },
  {
    id: 'prettier',
    name: 'Prettier',
    files: [
      '.prettierrc',
      'prettier.config.js',
      'prettier.config.cjs',
      '.prettierrc.js',
      '.prettierrc.cjs',
      '.prettierrc.json',
      '.prettierrc.json5',
      '.prettierrc.yaml',
      '.prettierrc.yml',
      '.prettierignore',
      '.prettierrc.toml',
    ],
  },
  {
    id: 'stylelint',
    name: 'StyleLint',
    files: [
      '.stylelintrc',
      'stylelint.config.js',
      'stylelint.config.cjs',
      '.stylelintrc.json',
      '.stylelintrc.yaml',
      '.stylelintrc.yml',
      '.stylelintrc.js',
      '.stylelintrc.cjs',
      '.stylelintignore',
      '.stylelintcache',
    ],
    light: true,
  },
  {
    id: 'tailwind',
    name: 'Tailwind',
    files: [
      'tailwind.js',
      'tailwind.ts',
      'tailwind.config.js',
      'tailwind.config.cjs',
      'tailwind.config.ts',
      'tailwind.config.cts',
    ],
  },
  {
    id: 'vite',
    name: 'Vite',
    files: [
      'vite.config.js',
      'vite.config.mjs',
      'vite.config.cjs',
      'vite.config.ts',
      'vite.config.cts',
      'vite.config.mts',
    ],
  },
  {
    id: 'vitest',
    name: 'Vitest',
    files: [
      'vitest.config.ts',
      'vitest.config.mts',
      'vitest.config.cts',
      'vitest.config.js',
      'vitest.config.mjs',
      'vitest.config.cjs',
    ],
  },
  {
    id: 'webpack',
    name: 'Webpack',
    files: [
      'webpack.js',
      'webpack.cjs',
      'webpack.mjs',
      'webpack.ts',
      'webpack.cts',
      'webpack.mts',
      'webpack.base.js',
      'webpack.base.cjs',
      'webpack.base.mjs',
      'webpack.base.ts',
      'webpack.base.cts',
      'webpack.base.mts',
      'webpack.config.js',
      'webpack.config.cjs',
      'webpack.config.mjs',
      'webpack.config.ts',
      'webpack.config.cts',
      'webpack.config.mts',
      'webpack.common.js',
      'webpack.common.cjs',
      'webpack.common.mjs',
      'webpack.common.ts',
      'webpack.common.cts',
      'webpack.common.mts',
      'webpack.config.common.js',
      'webpack.config.common.cjs',
      'webpack.config.common.mjs',
      'webpack.config.common.ts',
      'webpack.config.common.cts',
      'webpack.config.common.mts',
      'webpack.config.common.babel.js',
      'webpack.config.common.babel.ts',
      'webpack.dev.js',
      'webpack.dev.cjs',
      'webpack.dev.mjs',
      'webpack.dev.ts',
      'webpack.dev.cts',
      'webpack.dev.mts',
      'webpack.development.js',
      'webpack.development.cjs',
      'webpack.development.mjs',
      'webpack.development.ts',
      'webpack.development.cts',
      'webpack.development.mts',
      'webpack.config.dev.js',
      'webpack.config.dev.cjs',
      'webpack.config.dev.mjs',
      'webpack.config.dev.ts',
      'webpack.config.dev.cts',
      'webpack.config.dev.mts',
      'webpack.config.dev.babel.js',
      'webpack.config.dev.babel.ts',
      'webpack.mix.js',
      'webpack.mix.cjs',
      'webpack.mix.mjs',
      'webpack.mix.ts',
      'webpack.mix.cts',
      'webpack.mix.mts',
      'webpack.prod.js',
      'webpack.prod.cjs',
      'webpack.prod.mjs',
      'webpack.prod.ts',
      'webpack.prod.cts',
      'webpack.prod.mts',
      'webpack.prod.config.js',
      'webpack.prod.config.cjs',
      'webpack.prod.config.mjs',
      'webpack.prod.config.ts',
      'webpack.prod.config.cts',
      'webpack.prod.config.mts',
      'webpack.production.js',
      'webpack.production.cjs',
      'webpack.production.mjs',
      'webpack.production.ts',
      'webpack.production.cts',
      'webpack.production.mts',
      'webpack.server.js',
      'webpack.server.cjs',
      'webpack.server.mjs',
      'webpack.server.ts',
      'webpack.server.cts',
      'webpack.server.mts',
      'webpack.client.js',
      'webpack.client.cjs',
      'webpack.client.mjs',
      'webpack.client.ts',
      'webpack.client.cts',
      'webpack.client.mts',
      'webpack.config.server.js',
      'webpack.config.server.cjs',
      'webpack.config.server.mjs',
      'webpack.config.server.ts',
      'webpack.config.server.cts',
      'webpack.config.server.mts',
      'webpack.config.client.js',
      'webpack.config.client.cjs',
      'webpack.config.client.mjs',
      'webpack.config.client.ts',
      'webpack.config.client.cts',
      'webpack.config.client.mts',
      'webpack.config.production.babel.js',
      'webpack.config.production.babel.ts',
      'webpack.config.prod.babel.js',
      'webpack.config.prod.babel.cjs',
      'webpack.config.prod.babel.mjs',
      'webpack.config.prod.babel.ts',
      'webpack.config.prod.babel.cts',
      'webpack.config.prod.babel.mts',
      'webpack.config.prod.js',
      'webpack.config.prod.cjs',
      'webpack.config.prod.mjs',
      'webpack.config.prod.ts',
      'webpack.config.prod.cts',
      'webpack.config.prod.mts',
      'webpack.config.production.js',
      'webpack.config.production.cjs',
      'webpack.config.production.mjs',
      'webpack.config.production.ts',
      'webpack.config.production.cts',
      'webpack.config.production.mts',
      'webpack.config.staging.js',
      'webpack.config.staging.cjs',
      'webpack.config.staging.mjs',
      'webpack.config.staging.ts',
      'webpack.config.staging.cts',
      'webpack.config.staging.mts',
      'webpack.config.babel.js',
      'webpack.config.babel.ts',
      'webpack.config.base.babel.js',
      'webpack.config.base.babel.ts',
      'webpack.config.base.js',
      'webpack.config.base.cjs',
      'webpack.config.base.mjs',
      'webpack.config.base.ts',
      'webpack.config.base.cts',
      'webpack.config.base.mts',
      'webpack.config.staging.babel.js',
      'webpack.config.staging.babel.ts',
      'webpack.config.coffee',
      'webpack.config.test.js',
      'webpack.config.test.cjs',
      'webpack.config.test.mjs',
      'webpack.config.test.ts',
      'webpack.config.test.cts',
      'webpack.config.test.mts',
      'webpack.config.vendor.js',
      'webpack.config.vendor.cjs',
      'webpack.config.vendor.mjs',
      'webpack.config.vendor.ts',
      'webpack.config.vendor.cts',
      'webpack.config.vendor.mts',
      'webpack.config.vendor.production.js',
      'webpack.config.vendor.production.cjs',
      'webpack.config.vendor.production.mjs',
      'webpack.config.vendor.production.ts',
      'webpack.config.vendor.production.cts',
      'webpack.config.vendor.production.mts',
      'webpack.test.js',
      'webpack.test.cjs',
      'webpack.test.mjs',
      'webpack.test.ts',
      'webpack.test.cts',
      'webpack.test.mts',
      'webpack.dist.js',
      'webpack.dist.cjs',
      'webpack.dist.mjs',
      'webpack.dist.ts',
      'webpack.dist.cts',
      'webpack.dist.mts',
      'webpackfile.js',
      'webpackfile.cjs',
      'webpackfile.mjs',
      'webpackfile.ts',
      'webpackfile.cts',
      'webpackfile.mts',
    ],
  },
  {
    id: 'yarn',
    name: 'Yarn',
    files: [
      '.yarnrc',
      'yarn.lock',
      '.yarnclean',
      '.yarn-integrity',
      'yarn-error.log',
      '.yarnrc.yml',
      '.yarnrc.yaml',
    ],
  },
]
