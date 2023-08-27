
import PostList from "@/components/post/post-list"
import TagContainer from "@/components/tag/tag-container"
import { Button, Pagination } from "@geist-ui/core"
import { X } from "@geist-ui/icons"
import classNames from "classnames"
import { Fragment, useState } from "react"


function NotiPage() {
    const [tag, setTag] = useState<string[]>([])
    const [page, setPage] = useState<number>(1)

    const handleTags = (t: string) => {
        if (tag.includes(t)) {
            setTag(tag.filter((v) => v !== t))
        } else {
            setTag([...tag, t])
        }
    }

    const handleChecked = (t: string) => {
        return tag.includes(t)
    }

    return (
        <Fragment>
            <div className={classNames(
                'pt-10',
                // flex
                'flex',
                'flex-col',
                'items-center',
                'justify-center',

                'bg-gradient-to-t',
                'from-gradient-l',
                'to-gradient-r',

            )}>
                <h3>필터 목록</h3>

                {/* 체크박스 선택 */}
                <div className={classNames(
                    'w-3/4',

                    // border
                    'border',
                    'border-gray-300',
                    'bg-gray-50',
                    'rounded-md',
                )}>
                    {/* body */}
                    <TagContainer handleChecked={handleChecked} handleTags={handleTags} />
                </div>

                <div className={classNames(
                    'w-3/4',
                    'py-4',

                    'grid',
                    'max-sm:grid-cols-3',
                    'grid-cols-8',
                    'gap-4',
                )}>
                    {tag.map((v) => (
                        <Button iconRight={<X />} auto //marin auto
                            width={0.5}
                            type="success"
                            key={v + "_selected_btn"}
                            onClick={() => {
                                setTag(tag.filter((t) => t !== v))
                            }}>
                            {v}
                        </Button>
                    ))}
                </div>
            </div>

            {/* posts */}
            <div className={classNames(
                'flex',
                'flex-col',
                'items-center',
                'justify-center',
            )}>
                <PostList page={page} tag={tag}/>
            </div>

            <div className={classNames(
                'flex',
                'items-center',
                'justify-center',
            )}> 
            {/* count : 최대 페이지 수
            initialPage : 초기 페이지 */}
                <Pagination count={10} initialPage={page} onChange={(e) => {
                    setPage(e)
                }} />
            </div>
        </Fragment>

    )
}

export default NotiPage