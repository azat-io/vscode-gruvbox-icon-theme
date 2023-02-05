import { languagesIcons } from '../data/languages.js'
import { baseIcons } from '../data/base.js'

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
  languagesIcons.forEach(addIconDefinition('languages'))
  languagesIcons.forEach(({ id, extensions }) => {
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
  })
  return {
    iconDefinitions,
    fileExtensions,
    light,
    file: 'file',
    folder: 'folder',
    folderExpanded: 'folder-open',
  }
}

export let icons = getIcons()
