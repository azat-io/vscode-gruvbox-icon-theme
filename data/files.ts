import type { FileIcon } from '../typings/index.d.js'

export let filesIcons: FileIcon[] = [
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
]
