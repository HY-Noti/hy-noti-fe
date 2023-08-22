import { DUMMY_DATA } from '@/data/dummy_data'
import React from 'react'
import PostItem from './post-item'
import Link from 'next/link'

export type PostListProps = {
    tag: string[]
}

function PostList(props: PostListProps) {
    if (props.tag.length == 0) {
        return (
            <div>
                {DUMMY_DATA.map(v => (
                    <Link
                        href={`/noti/${v.title}`}
                    >
                        <PostItem post={v} />
                    </Link>
                ))}
            </div>
        )
    }
    return (
        <div>
            {DUMMY_DATA.map(v =>
                props.tag.includes(v.tag) && (
                    <Link
                        href={`/noti/${v.title}`}
                    >
                        <PostItem post={v} />
                    </Link>)
            )}
        </div>
    )
}

export default PostList