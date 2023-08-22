import classNames from 'classnames'
import TagSelectList from './tag-list'
import { Fragment } from 'react'

const TagContainerHeader = classNames(
    'text-lg',
    'text-center',
    'font-bold',
    'bg-gray-100',
    'border-b',
    'border-gray-300',
)

export type TagContainerProps = {
    handleTags: (t: string) => void
}

function TagContainer(props: TagContainerProps) {
    return (
        <div className={classNames(
            'w-full',
            'h-64',

            // flex
            'flex',
            'flex-row',
            'justify-between',
        )}>
            <div className={classNames(
                'w-1/2',
                'h-full',

                'overflow-y-scroll'

            )} >
                <div className={
                    TagContainerHeader
                }>포탈</div>
                <TagSelectList menu={1} handleTags={props.handleTags} />
            </div>

            <div className={classNames(
                'w-1/2',
                'h-full',

                'overflow-y-scroll'
            )} >
                <div className={
                    TagContainerHeader
                }>학과</div>
                <TagSelectList menu={2} handleTags={props.handleTags} />
            </div>
        </div>
    )
}

export default TagContainer