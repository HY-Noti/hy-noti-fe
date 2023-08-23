import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <div className={classNames(
      'w-screen',
      'h-screen',

      'flex',
      'flex-col',
      'items-center',
      'justify-center',
    )}>
        <div className={classNames(
          'text-4xl',

          'border',
          'border-gray-300',
          'rounded-md',

          'p-4',

          'hover:cursor-pointer',
        )} onClick={() => {
          router.push('/noti')
        }}>
          Go to noti
        </div>
    </div>
  )
}
