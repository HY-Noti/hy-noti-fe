import { Button, Fieldset } from '@geist-ui/core'
import classNames from 'classnames'
import React from 'react'

export type PostItemProps = {
  post: {
    id: string
    major: string
    date: string
    title: string
    main: string
    tag: string
  }
}

function PostItem(props: PostItemProps) {
  return (
    // <div className={classNames(
    //   'w-3/4',
    //   'h-12',

    //   'flex',
    //   'flex-col',

    //   'justify-between',
    //   'items-center',

    //   'border',
    //   'border-gray-300',
    //   'rounded-md',
    // )}>
    <Fieldset
      width={'100%'}

      style={{
        boxShadow: '5px 5px 10px 3px rgba(0,0,0,0.1)',
        marginBottom: '1rem',
      }}
    >
      <Fieldset.Title>
        {props.post.title}
      </Fieldset.Title>

      <Fieldset.Subtitle>
        {props.post.date}
      </Fieldset.Subtitle>

      <Fieldset.Footer>
        <div className={classNames(
          'w-full',

          'flex',
          'flex-row',

          'justify-between',
          'items-center',
        )}>
          <div className={classNames(
            'w-fit',

            'text-xs',
            'text-center',

            'rounded-xl',
            'border',
            'border-gray-300',

            'bg-gray-100',

            'p-2',
          )}>
          {props.post.tag}
          </div>

          <div className={classNames(
            'text-xs',
            'text-center',
            
            'text-gray-400',
          )}>
            {props.post.date}
          </div>
        </div>
      </Fieldset.Footer>
    </Fieldset>
    // </div>
  )
}

export default PostItem