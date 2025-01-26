import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './components/Navbar1'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import LoginPage from './pages/LoginPage'
import PizzaDetalle from './pages/PizzaDetalle'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import CarritoProvider from './context/CarritoContext'
import PizzasProvider from './context/PizzasContext'
import { useContext } from 'react'
import { TokenContext } from './context/TokenContext'
import UserProvider from './context/UserContext'

function App() {
  const { tokenPresente } = useContext(TokenContext)

  return (
    <>
      <PizzasProvider>
        <CarritoProvider>
          <UserProvider>
            <Navbar1></Navbar1>
            <Routes>
              <Route 
                path="/"
                element={<Home></Home> }
              />
                <Route
                  path="/register"
                  element = { tokenPresente ? <Navigate to="/"></Navigate> : <RegisterPage></RegisterPage> }
              />
              <Route
                  path="/login"
                  element = { tokenPresente ? <Navigate to="/"></Navigate> : <LoginPage></LoginPage> }
              />
              <Route
                  path="/cart"
                  element = { <Cart></Cart> }
              />
              <Route
                path="/pizza/:id"
                element = { <PizzaDetalle></PizzaDetalle>}
              />
              <Route
                path="/profile"
                element = { tokenPresente ? <Profile></Profile> : <Navigate to="/login"></Navigate> }
              />
              <Route
                  path="/*"
                  element = { <NotFound></NotFound> }
              />
            </Routes>
          </UserProvider>
        </CarritoProvider>
      </PizzasProvider>
      
      <Footer></Footer>
      
    </>
  )
}

export default App
