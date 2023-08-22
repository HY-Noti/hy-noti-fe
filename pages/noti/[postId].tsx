import classNames from "classnames"
import { useRouter } from "next/router"


function NotiDetailPage() {
    const router = useRouter()
    const { postId } = router.query

    return (
        <div className={classNames(
            'bg-gray-100',
        )}>
            <div>공지사항 상세페이지</div>
            <div>{postId}</div>
        </div>
    )
}

export default NotiDetailPage