import classNames from 'classnames'
import React, { Fragment, useState } from 'react'
import BotModal from './bot-modal'
import { Github, X } from '@geist-ui/icons'

function NotiBot() {
    const [isBot, setIsBot] = useState<boolean>(false)
    const handleIsBot = () => {
        setIsBot(!isBot)
    }
    return (
        <Fragment>
            <div className={classNames(
                'p-4',

                'fixed',
                'bottom-5',
                'right-5',

                'bg-white',

                'border',
                'border-gray-300',

                'shadow-lg',
                'rounded-full',

                'hover:cursor-pointer'
            )} onClick={() => {
                setIsBot(!isBot)
            }}>
                {isBot ? <X /> : <Github />}
            </div>
            { <BotModal handleIsBot ={handleIsBot} />}
        </Fragment>

    )
}

export default NotiBot