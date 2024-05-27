import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import AboutMe from './Components/Pages/Aboutme.jsx';
import Portfolio from './Components/Pages/Portfolio.jsx';
import ContactMe from './Components/Pages/ContactMe.jsx';

const router = createBrowserRouter(
  // Todo: Define the accessible routes, and which components respond to which URL
  [
    {
      path: '/',
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: < AboutMe />,
        },
        {
          path: "portfolio",
          element: <Portfolio />
        },
        {
          path: "contactme",
          element: <ContactMe />
        },
   
      ],
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  
)
