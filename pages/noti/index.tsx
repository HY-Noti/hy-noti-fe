
import TagContainer from "@/components/tag/tag-container"
import { Button } from "@geist-ui/core"
import { X } from "@geist-ui/icons"
import classNames from "classnames"
import { useState } from "react"


function NotiPage() {
    const [tag, setTag] = useState<string[]>([])

    const handleTags = (t: string) => {
        if (tag.includes(t)) {
            setTag(tag.filter((v) => v !== t))
        } else {
            setTag([...tag, t])
        }
    }

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
                <TagContainer handleTags={handleTags} />
            </div>

            <div className={classNames(
                'w-3/4',

                'grid',
                'max-sm:grid-cols-3',
                'grid-cols-5',
                'gap-4',
            )}>
                {tag.map((v) => (
                    <Button iconRight={<X />} auto //marin auto
                    width={'100%'}

                    type="success"
                    key={v+"_selected_btn"}
                    onClick={() => {
                        setTag(tag.filter((t) => t !== v))
                    }}>
                        {v}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default NotiPage