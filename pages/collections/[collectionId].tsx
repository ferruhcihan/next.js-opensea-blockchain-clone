import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Collection = () => {
  const router = useRouter()
  const { collectionId } = router.query

  return (
    <div>
      <Link href="/">
        <h2 className="cursor-pointer">Home</h2>
      </Link>
      <div>Collection ID: {collectionId}</div>
    </div>
  )
}

export default Collection
