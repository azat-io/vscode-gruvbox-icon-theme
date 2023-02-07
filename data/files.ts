import type { FileIcon } from '../typings/index.d.js'

export let filesIcons: FileIcon[] = [
  {
    id: 'browserslist',
    name: 'Browserslist',
    files: ['browserslist', '.browserslistrc'],
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
    id: 'pnpm',
    name: 'pnpm',
    files: ['pnpm-lock.yaml', 'pnpm-workspace.yaml', '.pnpmfile.cjs'],
    light: true,
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
