export type TagListType = {
    menu: number
    handleTags: (t: string) => void
    handleChecked: (t: string) => boolean
  }
  
export type TagItemType = {
  content: string
  handleTags: (t: string) => void
  handleChecked: (t: string) => boolean
}