import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homescreen from '../Homescreen'
import Singlebooks from '../Books/Singlebooks'
import Uploads from '../Uploadinfo/Uploads'

const Allroutes = () => {
let elements = useRoutes([
    {
        path:"/",
        element:<Homescreen/>
    },

    {
      path:"/books/:id/details",
      element:<Singlebooks/>
    },

    {
      path:"/uploads",
      element:<Uploads/>
    }
]);

  return elements
  
}

export default Allroutes