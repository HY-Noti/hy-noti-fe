import { Button, Fieldset } from '@geist-ui/core'
import { Mail } from '@geist-ui/icons'
import classNames from 'classnames'
import React from 'react'

function PostSide() {
  return (
    <div className={classNames(
        'flex',
        'flex-col',

        'justify-center',
        'items-center',

        'rounded-md',

        'p-4',

        'bg-blue-50'
    )}>
            <div><Mail/></div>
            <div className={classNames(
                'flex',
                'flex-col',
            )}>
                <i className={classNames(
                    'font-extrabold',

                    'mt-4',
                )}>Send mail for HY:NOTI feedback!</i>
                <span className={classNames(
                    'text-xs',
                    'text-gray-500',

                    'mt-1',
                    'mb-4'
                )}>더 나은 서비스를 위한 여러분의 의견을 전달해 주세요!</span>
            </div>

            <Button type='success' width={'100%'} onClick={() => {
                window.open('mailto:sorlti6952@gmail.com')
            }}>
                메일 보내기
            </Button>
    </div>
  )
}

export default PostSide