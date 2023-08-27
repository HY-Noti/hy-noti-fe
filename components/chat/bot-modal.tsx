
import classNames from 'classnames'
import React from 'react'
import BotHeader from './bot-header'
import BotFooter from './bot-footer'

export type BotModalProps = {
  handleIsBot: () => void
}

function BotModal(props: BotModalProps) {
  return (
    <div className={classNames(
      'w-1/5',
      'h-1/2',

      'fixed',
      'bottom-24',
      'right-5',

      'rounded-md',
      'border',
      'border-gray-300',

      'bg-white',

      'shadow-lg',
    )}>
      {/* header */}
      <BotHeader handleIsBot={props.handleIsBot} />

      {/* chat log */}
      <div className={classNames(
        'w-full',
        'h-1/2',
      )}>
        content
      </div>

      {/* chat input */}
      <BotFooter />
    </div>
  )
}

export default BotModal