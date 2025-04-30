import React from 'react'
import Link from 'next/link'

interface Props {
    params: { id: number }
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <>
        <div>UserDetailPage { id }</div>
    </>
  )
}

export default UserDetailPage