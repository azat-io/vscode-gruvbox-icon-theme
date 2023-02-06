import path from 'path'
import fs from 'fs'

import { getDirname } from '../utils/get-dirname.js'
import { icons } from './icons.js'

let __dirname = getDirname(import.meta.url)

let destination = path.join(__dirname, '/../dist')

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination)
}

fs.writeFile(
  path.join(destination, '/extension.json'),
  JSON.stringify({
    ...icons,
    hidesExplorerArrows: true,
  }),
  error => {
    if (error) {
      // eslint-disable-next-line no-console
      console.error('error', error)
    }
  },
)
