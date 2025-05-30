import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>  
        {/* Layouts can be used for different sections in routes. */}
        <div>Dashboard</div>
        {children}
    </div>
  )
}

export default layout