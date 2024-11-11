import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    function hadnleLogin() {
        login()
        navigate('/');
    };

    return (
        <div className='h-[100vh] overflow-y-auto flex justify-center items-center flex-col'>
            <h2 className='mt-[60px] text-[60px] font-bold mb-10'>Login Page</h2>
            <button onClick={hadnleLogin} className='text-[26px] font-medium text-white w-[130px] bg-slate-400 rounded-lg'>Login</button>
        </div>
    )
}

export default Login
