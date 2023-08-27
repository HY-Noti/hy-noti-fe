import { LogIn, Settings } from '@geist-ui/icons'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'

function GlobalNav() {
    const router = useRouter()
  return (
    <div className={classNames(
        'w-full',
        'p-4',
        'box-border',
        'fixed',

        'shadow-lg',
        'bg-white',

        'flex',
        'items-center',
        'justify-between',
    )}>
        <div className={classNames(
            'font-bold',
            'hover:cursor-pointer'
        )} onClick={() => {
            router.push('/')
        }}>
            HY:NOTI
        </div>

        <div className={classNames(
            'flex',
            'items-center',
            'justify-between',
        )}>
            {/* <div className={classNames(
                'mr-4',

                'flex',
            )}>로그인 <LogIn/></div> */}
            <div className={classNames(
                'flex',
            )}></div>
        </div>
    </div>
  )
}

export default GlobalNav