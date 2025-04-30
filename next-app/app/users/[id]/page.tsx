import React from 'react'
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ id: number; }>;
}

const UserDetailPage = async (props: Props) => {
const { id } = await props.params;
if (id > 10 ) notFound();
  return (
    <>
        <div>UserDetailPage { id }</div>
    </>
  )
}

export default UserDetailPage