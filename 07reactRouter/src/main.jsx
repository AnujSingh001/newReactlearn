import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"AboutUs",
//         element: <AboutUs />
//       },
//       {
//         path:"Contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

//Another way to create routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='aboutUs' element={<AboutUs />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='user/:Id' element={<User/>}/>
      <Route
       loader={githubInfoLoader}
       path='Github'
       element={<Github/>}/>
      

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
