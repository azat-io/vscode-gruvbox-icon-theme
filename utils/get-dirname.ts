import { fileURLToPath } from 'node:url'
import path from 'path'

export const getDirname = (importMetaUrl: string): string =>
  path.dirname(fileURLToPath(importMetaUrl))
