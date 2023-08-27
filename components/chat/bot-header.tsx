import { X } from '@geist-ui/icons'
import classNames from 'classnames'
import React, { Fragment } from 'react'

export type BotHeaderProps = {
    handleIsBot: () => void
}

function BotHeader(props: BotHeaderProps) {
    return (
        <Fragment>
            {/* header */}
            <div className={classNames(
                'w-full',
                'h-1/6',

                'px-4',

                'bg-black',
                'text-white',

                'box-border',

                'flex',
                'items-center',
                'justify-between',

                'text-sm',
                'font-bold',
            )}>
                <div> 노티 🤖</div>
                <span className={classNames(
                    'hover:cursor-pointer'
                )} onClick={() => {
                    props.handleIsBot()
                }}><X /></span>
            </div>

            {/* chat hedaer */}
            <div className={classNames(
                'w-full',
                'h-1/6',

                'flex',
                'items-center',
                'justify-between',
            )}>
                noti-header
            </div>
        </Fragment>
    )
}

export default BotHeader