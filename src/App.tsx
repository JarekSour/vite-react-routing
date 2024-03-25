import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Producto from './components/Producto'

function App() {

    return (
        <BrowserRouter>

            <nav className='navbar navbar-expand navbar-light bg-light'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link' > HOME </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link' > ABOUT </NavLink>
                    </li>
                </ul>
            </nav>

            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/producto/:nombreParam' element={<Producto />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default App