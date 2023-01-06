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
  let light = {
    file: 'file_light',
  }
  baseIcons.forEach(({ id, light: lightValue }) => {
    Object.assign(iconDefinitions, {
      [id]: {
        iconPath: `../icons/base/${id}.svg`,
      },
    })
    if (lightValue) {
      Object.assign(iconDefinitions, {
        [`${id}_light`]: {
          iconPath: `../icons/base/${id}-light.svg`,
        },
      })
    }
  })
  return {
    iconDefinitions,
    light,
    file: 'file',
    folder: 'folder',
    folderExpanded: 'folder-open',
  }
}

export let icons = getIcons()
