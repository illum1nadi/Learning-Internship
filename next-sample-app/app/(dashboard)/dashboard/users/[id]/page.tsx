import React from 'react'

//using dynamic route to get user details.
const page = async({params} : {params : {id : string}}) => {
    //awaited params to get the id from the URL as it can be a Promise.
    const { id } = await(params);
  return (
    <div>USER DETAILS of :  User {id}</div>
  )
}

export default page