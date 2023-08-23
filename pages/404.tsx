import { Button } from '@geist-ui/core'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'

function ErrorPage() {
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
      <h3 className={classNames(
        'text-4xl',
        'font-bold',
        'mb-4',

      )}>한양노티</h3>
      <span>존재하지 않는 페이지입니다.</span>
      <Button onClick={() => {
        router.push('/')
      }}>
        홈으로 돌아가기
      </Button>
    </div>
  )
}

export default ErrorPage