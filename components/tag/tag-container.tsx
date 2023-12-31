import classNames from 'classnames'
import TagSelectList from './tag-list'

const TagContainerHeader = classNames(
    'h-12',
    'flex',
    'items-center',
    'justify-center',

    'text-lg',
    'text-center',
    'font-bold',
    'bg-gray-100',
    
    'border-b',
    'border-gray-300',
)

export type TagContainerProps = {
    handleTags: (t: string) => void
    handleChecked: (t: string) => boolean
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
            )} >
                <div className={classNames(
                    TagContainerHeader,
                    'border-r',
                )}>포탈</div>
                <div className={classNames(
                    'h-52',
                    'overflow-y-scroll',

                    'border-r',
                )}>
                    <TagSelectList handleChecked={props.handleChecked} menu={1} handleTags={props.handleTags} />
                </div>
            </div>

            <div className={classNames(
                'w-1/2',
            )} >
                <div className={
                    TagContainerHeader
                }>학과</div>
                <div className={classNames(
                    'h-52',
                    'overflow-y-scroll',
                )}>
                    <TagSelectList handleChecked={props.handleChecked} menu={2} handleTags={props.handleTags} />
                </div>
            </div>
        </div>
    )
}

export default TagContainer