import classNames from 'classnames'
import React from 'react'

function BotFooter() {
  return (
    <div className={classNames(
        'w-full',
        'h-1/6',

        'flex',
        'items-center',
        'justify-between',
      )}>
        <form onSubmit={(e) => {
            e.preventDefault();

        }}>
            <input className={classNames(
                'w-fit',
                'border-2',
            )} type='text'/>
            <button className={classNames(
                'w-10',

                'border',
            )}>전송</button>
        </form>
      </div>
  )
}

export default BotFooter