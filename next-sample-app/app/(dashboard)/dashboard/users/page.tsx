import React from 'react'

const page = () => {
  return (
    <>
        <div>Users</div>

        <ul className='mt-10'>
            <li>
                <a href="/dashboard/users/1">User 1</a>
            </li>
            <li>
                <a href="/dashboard/users/2">User 2</a>
            </li>
            <li>
                <a href="/dashboard/users/3">User 3</a>
            </li>
        </ul>
    </>
    
  )
}

export default page