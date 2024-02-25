import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Register from './components/Register/Register.jsx';
import Account from './components/Account/Account';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
    return (
        <>
            <div id='container'>
                    <Nav />
                <div className='bg-gray-950' id='main-section'>
                    {
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/experience' element={< Experience/>}></Route>
                            <Route path='/projects' element={< Projects/>}></Route>
                            <Route path='/skills' element={< Skills/>}></Route>
                            <Route path='/resume' element={< Resume/>}></Route>
                            <Route path='/contact' element={< Contact/>}></Route>
                            <Route path='/login' element={<Login />}></Route>
                            <Route path='/register' element={<Register />}></Route>
                            <Route path='/account' element={<Account />}></Route>
                        </Routes>
                    }
                </div>
                <Footer/>
            </div>
        </>
    );
}
