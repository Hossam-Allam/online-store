import './App.css'
import { Link } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <h1>Hello im app</h1>
      <Link to="cart">cart page</Link>
    </>
  )
}

export default App
