import classNames from "classnames";
import Link from "next/link";

export default function Home() {
  return (
    <div className={classNames(
      'text-red-700'
    )}>
      <Link href={'/noti'}>
        <span>
          Go to noti
        </span>
      </Link>
    </div>
  )
}
