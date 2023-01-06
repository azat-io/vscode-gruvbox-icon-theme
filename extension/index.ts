import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'

import { icons } from './icons.js'

let __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)

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
