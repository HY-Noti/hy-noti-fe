import React from 'react'
import TagItem from './tag-item'
import { TagListType } from '@/@types/tag'
import { DUMMY_CATE, DUMMY_MAJOR } from '@/data/dummy_data'
import classNames from 'classnames'

const listStyles = classNames(
  'grid',
  'max-sm:grid-cols-2',
  'grid-cols-4',
  'gap-4',

  'text-xs',
  'text-center',

  'overflow-y-auto',
)

function TagSelectList(props: TagListType) {
  const menu = props.menu
  const handleTags = props.handleTags

  if(menu == 1) {
    return (
      <ul className={classNames(
        listStyles,
      )}>
        {DUMMY_CATE.map(v => (
          <TagItem content={v} handleTags = {handleTags} />
        ))}
      </ul>
    )
  }
  return (
    <ul className={classNames(
      listStyles,
    )}>
      {DUMMY_MAJOR.map(v => (
        <TagItem content={v} handleTags = {handleTags} />
      ))}
    </ul>
  )
}


export default TagSelectList