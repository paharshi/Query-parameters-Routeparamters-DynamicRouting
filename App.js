import Home from './Home'
import About from './About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact'
import User, { Orders, Profile } from './User'
import './App.css'

function Header() {
    return (
        <ul className='nav'>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/contact">Contact Us</Link> </li>
            <li> <Link to="/user/500?posts=10&category=admin">User-100</Link> </li>


        </ul>
    )
}
function App() {
    return (

        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="user/:id" element={<User />} >
                    </Route>

                </Routes>
            </BrowserRouter>
        </>

    )
}
export default App