import type { BaseIcon } from '../typings/index.d.js'

import puppeteer from 'puppeteer'
import fs from 'fs'

import { languagesIcons } from '../data/languages.js'
import { getDirname } from '../utils/get-dirname.js'
import { filesIcons } from '../data/files.js'

let __dirname = getDirname(import.meta.url)

let createScreenshot = async (
  iconType: string,
  icons: BaseIcon[],
): Promise<void> => {
  try {
    let browser = await puppeteer.launch()
    let page = await browser.newPage()
    let numOfItemsPerLine = 12
    let itemSize = 64
    let paddingSize = 16
    let gapSize = 16
    await page.setViewport({
      height: 10,
      width:
        paddingSize * 2 +
        itemSize * numOfItemsPerLine +
        gapSize * (numOfItemsPerLine - 1),
      deviceScaleFactor: 3,
    })

    /* eslint-disable @typescript-eslint/indent */
    /* eslint-disable no-template-curly-in-string */
    // prettier-ignore
    let html = [
      '<style>',
        'html,',
        'body {',
          'margin: 0;',
          'font-family: Helvetica, sans-serif;',
          'font-size: 12px;',
          'background: #1d2021;',
          'color: #928374;',
        '}',
        '.container {',
          'display: grid;',
          `grid-template-columns: repeat(auto-fill, ${itemSize}px);`,
          `gap: ${gapSize}px;`,
          `padding: ${paddingSize}px;`,
        '}',
        '.item {',
          'display: flex;',
          'flex-direction: column;',
          'align-items: center;',
        '}',
        '.name {',
          'text-align: center;',
        '}',
      '</style>',
      '<div class="container">',
        icons
          .reduce((accumulator: string[], { id, name }) => [
            ...accumulator,
            '<div class="item">',
              '<img src="data:image/svg+xml;base64,',
                fs.readFileSync(
                  `${__dirname}/../icons/${iconType}/${id}.svg`,
                ).toString('base64'),
              '" alt="${name}" />',
              '<p class="name">',
                name,
              '</p>',
            '</div>',
          ], []).join('\n'),
      '</div>',
    ].join('\n')
    /* eslint-enable @typescript-eslint/indent */
    /* eslint-enable no-template-curly-in-string */

    await page.setContent(html, {
      waitUntil: 'networkidle0',
    })

    await page.screenshot({
      path: `assets/${iconType}.webp`,
      omitBackground: true,
      fullPage: true,
      type: 'webp',
    })

    await browser.close()
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error', error)
  }
}

let formatIconList = (icons: BaseIcon[]): BaseIcon[] =>
  icons
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(
      (value, index, self) =>
        self.findIndex(v => v.id === value.id && v.name === value.name) ===
        index,
    )

await createScreenshot(
  'files',
  formatIconList([...filesIcons, ...languagesIcons]),
)
