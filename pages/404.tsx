import { Button } from '@geist-ui/core'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import React from 'react'

function ErrorPage() {
  const router = useRouter()
  return (
    <div className={classNames(
      'w-full',
      'h-full',

      'flex',
      'flex-col',
      'items-center',
      'justify-center',
    )}>
      <h3>존재하지 않는 페이지입니다.</h3>
      <Button onClick={() => {
        router.push('/')
      }}>
        홈으로 돌아가기
      </Button>
    </div>
  )
}

export default ErrorPage