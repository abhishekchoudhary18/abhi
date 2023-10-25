import Cursor from './components/Cursor'
import Layout from './layout/Layout'
import { CursorProvider } from './context/CursorProvider'
import { router } from './layout/Router'
import { RouterProvider } from "react-router-dom";


function App() {

  return (
  <CursorProvider>
    <Cursor />
    <RouterProvider router={router} />
  </CursorProvider>
   )
}

export default App
