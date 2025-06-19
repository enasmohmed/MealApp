import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createHashRouter ,createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Sidebar from './components/Sidebar/Sidebar'
import NotFound from './components/NotFound/NotFound'
import CategoryTabs from './components/CategoryTabs/CategoryTabs'
import MealDetails from './components/MealDetails/MealDetails'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  let router = createHashRouter([
    {path:"", element:<Layout />, children: [
      {path:"", element:<Home />},
      {path:"/categories", element:<CategoryTabs />},
      {path:"/meal/:idMeal", element:<MealDetails />},
      {path:"*", element:<NotFound />}
    ]}
  ])

  return <>
    <RouterProvider router={router} />

  </>
}

export default App
