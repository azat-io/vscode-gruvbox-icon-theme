export interface BaseIcon {
  id: string
  name: string
  light?: boolean
}

export interface LanguageIcon extends BaseIcon {
  extensions: string[]
}

export interface FolderIcon extends BaseIcon {
  folders: string[]
}

export interface FileIcon extends BaseIcon {
  files: string[]
}
