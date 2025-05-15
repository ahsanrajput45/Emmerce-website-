import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Bags from './routes/Bags.jsx'
import Home from './routes/Home.jsx'
import { Provider } from 'react-redux';
import { myntrastore } from './store/index.js'


       const router=createBrowserRouter([

        {path:'/',element:<App/>, children:[
          {path:'/',element:<Home/>},
        {path:'/Bags',element:<Bags/>},
        ]}
        
       ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={myntrastore}>
<RouterProvider router={router} />
   </Provider>
  </StrictMode>,
)
