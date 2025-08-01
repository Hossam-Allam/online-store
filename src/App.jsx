import './App.css'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
