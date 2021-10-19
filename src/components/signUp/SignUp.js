import React, { useState } from 'react';
import './SignUp.css';
import { auth } from '../../fire';
import { useStateValue } from '../../StateProvider';
import MiniSpinner from '../miniSnipper/MiniSpinner';

const SignUp = ({ handleLogin }) => {

    const [user, dispatch] = useStateValue(null);
    console.log(user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isUserHere, setIsUserHere] = useState('');

    const submitUser = (e) => {
        const errorAlert = document.querySelector('.user_alreadyInuse');
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({
                    type: "REGISTER_USER",
                    user: auth
                })

            })
            .catch((err) => {
                errorAlert.innerHTML = err.message;
                errorAlert.classList.add('showAlert');
                setTimeout(() => {
                    errorAlert.classList.remove('showAlert');
                }, 3000)
            })
            setIsUserHere(<MiniSpinner />)
    }

    return (
        <div className="sign_up">
            <div className="user_alreadyInuse"></div>
            <div className="sign_up_container">
                <h2>Instagram messenger</h2>
                <label>Email</label>
                <input type="email" id="login_email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label>Password</label>
                <input type="password" id="login_password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button disabled={ isUserHere ? true : false} type="button" id="login_submit" onClick={submitUser}>{isUserHere}Get started</button>
                <div className="account">
                    <p>Don't have an account ?</p>
                    <span onClick={handleLogin}>Sign In</span>
                </div>
            </div>
        </div>
    )
}
export default SignUp
