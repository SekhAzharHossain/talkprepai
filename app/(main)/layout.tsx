import NavBar from '@/components/NavBar'
import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    
    <div>
      <NavBar/>
      {children}
    </div>
  )
}

export default MainLayout