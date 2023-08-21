import React from 'react'
import TagItem from './tag-item'
import { TagListType } from '@/@types/tag'
import { DUMMY_CATE, DUMMY_MAJOR } from '@/data/dummy_data'

function TagSelectList(props: TagListType) {
  const menu = props.menu

  if(menu == 1) {
    return (
      <ul>
        {DUMMY_CATE.map(v => (
          <TagItem content={v} />
        ))}
      </ul>
    )
  }
  return (
    <ul>
      {DUMMY_MAJOR.map(v => (
        <TagItem content={v} />
      ))}
    </ul>
  )
}


export default TagSelectList