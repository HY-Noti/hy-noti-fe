import classNames from 'classnames'
import TagSelectList from './tag-list'

const TagContainerHeader = classNames(
    'text-lg',
    'text-center',
    'font-bold',
    'bg-gray-100',
    'border-b',
    'border-gray-300',
)

function TagContainer() {

    return (
        <div className={classNames(
            'w-full',

            // flex
            'flex',
            'flex-row',
            'justify-between',
        )}>
            <div className={classNames(
                'w-1/2',
                'h-full',
                'border-r',
            )} >
                <div className={
                    TagContainerHeader
                }>포탈</div>
                <TagSelectList menu={1} />
            </div>

            <div className={classNames(
                'w-1/2',
                'h-full',
            )} >
                <div className={
                    TagContainerHeader
                }>학과공지</div>
                <TagSelectList menu={2} />
            </div>
        </div>
    )
}

export default TagContainer