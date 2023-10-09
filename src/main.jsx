import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Component/Root/Root'
import Home from './Component/Home/Home'

import Jobs from './Component/Jobs/Jobs'
import Blogs from './Component/Blogs/Blogs'
import Statistics from './Component/Statistics/Statistics'
import ErrorPage from './Component/ErrorPage/ErrorPage'
import JobDetail from './Component/Home/FeaturedJob/Job/JobDetails/JobDetail'
import AppliedJob from './Component/AppliedJob/AppliedJob'


const router =createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
    },
    {
      path:'/Job',
      element:<Jobs/>,
    },
    {
      path:'/Applied',
      element:<AppliedJob/>,
      loader:()=>fetch('../public/data/jobs.json')
    },
    {
      path:'/jobs/:id',
      element:<JobDetail/>,
      loader:()=>fetch('../public/data/jobs.json')
    },
    {
      path:'/statistics',
      element:<Statistics/>

    },
    {
      path:'/Blogs',
      element:<Blogs/>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
