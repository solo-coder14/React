import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    }, 
    {
      path: "/user/:username",
      element: <User />
    }])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<><Navbar /><Home /></>} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
    
//   );
// }



export default App
