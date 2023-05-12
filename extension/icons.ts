import { languagesIcons } from '../data/languages.js'
import { filesIcons } from '../data/files.js'
import { baseIcons } from '../data/base.js'
import { merge } from '../utils/merge.js'

interface IconSchema {
  iconDefinitions: {
    [key: string]: {
      iconPath: string
    }
  }
  folderNames?: {
    [key: string]: string
  }
  folderNamesExpanded?: {
    [key: string]: string
  }
  fileExtensions?: {
    [key: string]: string
  }
  fileNames?: {
    [key: string]: string
  }
  languageIds?: {
    [key: string]: string
  }
  light?: {
    folderNames?: {
      [key: string]: string
    }
    folderNamesExpanded?: {
      [key: string]: string
    }
    fileExtensions?: {
      [key: string]: string
    }
    fileNames?: {
      [key: string]: string
    }
    languageIds?: {
      [key: string]: string
    }
    file: string
  }
  file: 'file'
  folder: 'folder'
  folderExpanded: 'folder-open'
}

let getIcons = (): IconSchema => {
  let iconDefinitions = {}
  let fileExtensions = {}
  let fileNames = {}

  let light = {
    file: 'file_light',
  }

  let addIconDefinition =
    (type: string) =>
    ({ id, light: lightValue }: { id: string; light?: boolean }): void => {
      Object.assign(iconDefinitions, {
        [id]: {
          iconPath: `../icons/${type}/${id}.svg`,
        },
      })

      if (lightValue) {
        Object.assign(iconDefinitions, {
          [`${id}_light`]: {
            iconPath: `../icons/${type}/${id}-light.svg`,
          },
        })
      }
    }

  baseIcons.forEach(addIconDefinition('base'))

  languagesIcons.forEach(addIconDefinition('files'))

  filesIcons.forEach(addIconDefinition('files'))

  languagesIcons.forEach(({ id, extensions, light: lightValue }) => {
    Object.assign(
      fileExtensions,
      extensions.reduce(
        (accumulator, extension) => ({
          ...accumulator,
          [extension]: id,
        }),
        {},
      ),
    )

    if (lightValue) {
      light = merge(light, {
        fileExtensions: extensions.reduce(
          (accumulator, extension) => ({
            ...accumulator,
            [extension]: `${id}_light`,
          }),
          {},
        ),
      })
    }
  })

  filesIcons.forEach(({ id, files, light: lightValue }) => {
    Object.assign(
      fileNames,
      files.reduce(
        (accumulator, file) => ({
          ...accumulator,
          [file]: id,
        }),
        {},
      ),
    )

    if (lightValue) {
      light = merge(light, {
        fileNames: files.reduce(
          (accumulator, file) => ({
            ...accumulator,
            [file]: `${id}_light`,
          }),
          {},
        ),
      })
    }
  })

  return {
    iconDefinitions,
    fileExtensions,
    fileNames,
    light,
    file: 'file',
    folder: 'folder',
    folderExpanded: 'folder-open',
  }
}

export let icons = getIcons()
