import { getDummyDataByTitle } from "@/data/dummy_data"
import classNames from "classnames"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

function NotiDetailPage({ post } : { post: string }) {
    const router = useRouter()

    return (
        <div className={classNames(
            'w-3/4',
            'h-full',

            'flex',
            'flex-col',
            'items-center',
            'justify-center',

            'm-auto',
            'py-10',
        )}>
            <div className={classNames(
                'w-full',

                'border-y-2',

                'py-4',

                'flex',
                'flex-row',
                'justify-between',
                'items-center',

                'bg-gray-50',

                'font-bold',
            )}>
                <div>이벤트</div>
                <div className={classNames(
                    'hover:cursor-pointer',
                )} onClick={() => {
                    router.push('/noti')
                }}>목록으로</div>
            </div>

            {/* container */}
            <div className={classNames(
                'w-full',

                'border-b',

                'py-6',

                'flex',
                'justify-between',
                'items-center',
            )}>
                <div>제목</div>
                <div className={classNames(
                    'flex',
                )}>
                    <div className={classNames(
                        'mr-4',
                    )}>날짜</div>
                    <div>원본</div>
                </div>
            </div>

            {/* content */}
            <div className={classNames(
                'w-full',

                'py-6',
            )} dangerouslySetInnerHTML={{ __html: post }} />
        </div>
    )
}

export default NotiDetailPage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {params} = context
    const postId = params?.postId
    
    const testData = await getDummyDataByTitle(postId as string)


    if(!testData) {
        return {
            notFound: true
        }
    }
    return (
        {
            props: {
                post: testData
            }
        }
    )
}
