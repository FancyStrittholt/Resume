import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Account from './components/Account.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Projects from './components/Projects.jsx';
import Register from './components/Register.jsx';
import Resume from './components/Resume.jsx';
import Skills from './components/Skills.jsx';

export default function App() {
    return (
        <>
            <div id='container'>
                <Nav />
                <div className='bg-gray-950' id='main-section'>
                    {
                        <Routes>
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/experience' element={<Experience />}></Route>
                            <Route path='/projects' element={<Projects />}></Route>
                            <Route path='/skills' element={<Skills />}></Route>
                            <Route path='/resume' element={<Resume />}></Route>
                            <Route path='/contact' element={<Contact />}></Route>
                            <Route path='/login' element={<Login />}></Route>
                            <Route path='/register' element={<Register />}></Route>
                            <Route path='/account' element={<Account />}></Route>
                        </Routes>
                    }
                </div>
                <Footer />
            </div>
        </>
    );
}
