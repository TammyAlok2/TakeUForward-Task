import React from 'react'
import InputCode from './Components/InputCode.jsx'
import ApiCode from './Components/ApiCode.jsx'
import ShowUser from './Components/ShowUser.jsx'
import {Router,Route, createBrowserRouter, RouterProvider} from 'react-router-dom'



const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<InputCode/>
    },
    {
      path:"/show",
      element:<ShowUser/>
    }
  ])
  return (

<>
   <RouterProvider router = {router}/>
  </>
    
  )
}

export default App
