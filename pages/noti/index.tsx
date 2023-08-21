
import TagContainer from "@/components/tag/tag-container"
import classNames from "classnames"


function NotiPage() {
    return (
        <div className={classNames(
            // flex
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
        )}>
            <h3>필터 목록</h3>

            {/* 체크박스 선택 */}
            <div className={classNames(
                'w-3/4',
                'h-1/2',

                // border
                'border',
                'border-gray-300',
                'rounded-md',
            )}>
                {/* body */}
                <TagContainer />
            </div>
        </div>
    )
}

export default NotiPage