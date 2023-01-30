import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const admin = 'rasif';
const pass = 'rasif';

function Auth() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        setLogin(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        if(login === admin && password === pass){
            navigate('/admin/coin-administration');
        }
    }
    return (
        <div className='auth'>
            <h1 className='auth-header'>Admin Panel</h1>
            <div className='auth-wrapper'>
                <div className='credentials'>
                        <p>Login</p>
                        <input type="text" name="login"  value={login} onChange={handleLogin} />
                </div>
                <div className='credentials'>
                    <p>Password</p>
                    <input type="password" name="password" value={password} onChange={handlePassword}/>
                </div>
                <button className='admin-button' onClick={handleSignIn}>Sign in</button>
            </div>
        </div>
        );
}

export default Auth;
