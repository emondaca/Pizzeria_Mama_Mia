import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar1 from './components/Navbar1'
/*import Home from './components/Home'*/
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
      <Navbar1></Navbar1>
      { /*<Home></Home>*/}
      <RegisterPage></RegisterPage>
      <LoginPage></LoginPage>
      <Footer></Footer>
    </>
  )
}

export default App
