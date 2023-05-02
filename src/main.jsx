import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './routes/App.jsx'
import './styles/main.css'
import ErrorPage from './errorPage.jsx';
import { DarkModeProvider } from './hooks/darkmodo.jsx';
import Proyectos from './proyectos/proyecto.jsx';
import { IM } from './im/quiensoy.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/me",
    element: <IM/>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/proyectos",
    element: <Proyectos/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>,
)
