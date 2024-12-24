import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './components/Navbar1'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import LoginPage from './pages/LoginPage'
import Pizza01 from './pages/Pizza01'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import CarritoProvider from './context/CarritoContext'

function App() {

  return (
    <>
      <CarritoProvider>
        <Navbar1></Navbar1>
        <Routes>
          <Route 
            path="/"
            element={<Home></Home> }
          />
            <Route
              path="/register"
              element = { <RegisterPage></RegisterPage> }
          />
          <Route
              path="/login"
              element = { <LoginPage></LoginPage> }
          />
          <Route
              path="/cart"
              element = { <Cart></Cart> }
          />
          <Route
            path="/pizza/p001"
            element = { <Pizza01></Pizza01>}
          />
          <Route
            path="/profile"
            element = { <Profile></Profile>}
          />
          <Route
              path="/*"
              element = { <NotFound></NotFound> }
          />
        </Routes>
      </CarritoProvider>
      
      <Footer></Footer>
      
    </>
  )
}

export default App
