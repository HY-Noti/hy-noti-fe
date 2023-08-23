import { DUMMY_DATA } from '@/data/dummy_data'
import React from 'react'
import PostItem from './post-item'
import Link from 'next/link'
import classNames from 'classnames'
import PostSide from './post-sidebar'

export type PostListProps = {
    tag: string[]
}

function PostList(props: PostListProps) {
    if (props.tag.length == 0) {
        return (
            <div className={classNames(
                'w-3/4',
                'py-4',

                'flex',
                'max-sm:flex-col',
                'justify-between',
            )}>
                <div className={classNames(
                    'w-3/4',
                    'max-sm:w-full',
                )}>
                    {DUMMY_DATA.map(v => (
                        <Link
                            key={"post_link" + v.id}
                            href={`/noti/${v.title}`}
                        >
                            <PostItem key={"post_item" + v.id} post={v} />
                        </Link>
                    ))}
                </div>

                <div className={classNames(
                    'w-1/4',
                    'max-sm:w-full',

                    'pl-4',
                    'max-sm:pl-0',
                )}>
                    <PostSide />
                </div>

            </div>
        )
    }
    return (
        <div className={classNames(
            'w-3/4',
            'py-4',

            'flex',
            'justify-between',
        )}>
            <div className={classNames(
                'w-3/4',
            )}>
                {DUMMY_DATA.map(v =>
                    props.tag.includes(v.tag) && (
                        <Link
                            key={"post_link_s" + v.id}
                            href={`/noti/${v.title}`}
                        >
                            <PostItem key={"post_item_s" + v.id} post={v} />
                        </Link>)
                )}
            </div>
            <div>
                <PostSide />
            </div>
        </div>
    )
}

export default PostList