import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {GiTrophyCup} from 'react-icons/gi';
import {SlGameController} from 'react-icons/sl';
import {BiSolidUserAccount} from 'react-icons/bi';
import {IoMdLogOut} from 'react-icons/io';
import {GiArchiveRegister} from 'react-icons/gi';
import {IoMdLogIn} from 'react-icons/io';
import {updateUser} from '../app/slice';

export default function Nav() {
    const token = useSelector((it) => it.state.user?.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function logout() {
        navigate('/');
        dispatch(updateUser(''));
    }
    return (
        <>
            <div className='bg-gray-900 flex items-center justify-between text-[#d06ec1] pl-[25px] pr-[25px] pt-1 pb-1 font-medium'>
                <div className='flex justify-center items-center hover:bg-gray-800 rounded'>
                    <Link to='/'></Link>
                    <Link to='/'>Fancys Resume</Link>
                </div>
                <div className='flex gap-[10px] pr-5'>
                    <SlGameController className='text-[#d06ec1] size-6' />
                    <Link className='text-[#d06ec1]' to='/skills'>
                        Skills
                    </Link>
                    <SlGameController className='text-[#d06ec1] size-6' />
                    <Link className='text-[#d06ec1]' to='/projects'>
                        Projects
                    </Link>
                    <GiTrophyCup className='text-[#dd784b] size-6' />
                    <Link className='text-[#dd784b]' to='/experience'>
                        Experience
                    </Link>
                    <GiTrophyCup className='text-[#dd784b] size-6' />
                    <Link className='text-[#dd784b]' to='/resume'>
                        Resume
                    </Link>

                    {!token && (
                        <>
                            <GiArchiveRegister className='text-blue-600 size-6' />
                            <Link className='text-blue-600' to='/register'>
                                Register
                            </Link>
                        </>
                    )}

                    {token && (
                        <>
                            <BiSolidUserAccount className='text-blue-600 size-6' />
                            <Link className='text-blue-600' to='/account'>
                                Account
                            </Link>
                        </>
                    )}

                    {!token && (
                        <>
                            <IoMdLogIn className='size-6' />
                            <Link to='/login'>Login</Link>
                        </>
                    )}

                    {token && (
                        <>
                            <IoMdLogOut className='size-6' />
                            <a onClick={() => logout()} to='/'>
                                Logout
                            </a>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
