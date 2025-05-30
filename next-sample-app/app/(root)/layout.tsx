import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <h1>This is layout for root file.</h1>
        {children}
    </div>
  )
}

export default layout