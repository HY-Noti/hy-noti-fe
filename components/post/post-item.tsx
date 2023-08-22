import React from 'react'

export type PostItemProps = {
    post: {
        id: string
        major : string
        date: string
        title: string
        main: string
        tag: string
    }
}

function PostItem(props: PostItemProps) {
  return (
    <div>
        <div>{props.post.title}</div>
        <div>{props.post.main}</div>
        <div>{props.post.tag}</div>
    </div>
  )
}

export default PostItem