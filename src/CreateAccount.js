import React, { useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import './CreateAccount.css';
import { auth } from './firebase';

function CreateAccount() {

    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const accountcreated = e => {

        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(auth => {
            if(auth){
                history.push('/')
            }
        })
            .catch(error => alert(error.message))
    }


    return (
        <div className = "createaccount">
           <img 
           className = "new__logo"
           src = "https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png"/>

            <div className = "new__container">
                <h1>Create Account</h1>
                
                <form>
                    <h5>Your name</h5>
                    <input type = "text" value = {name} onChange = {e => setName(e.target.value)} />
                   
                    <h5>Email</h5>
                    <input type  = "text" value = {email} onChange = {e => setEmail (e.target.value)}/>
                   
                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange = {e => setPassword(e.target.value)}/>
                    <p>ⓘPasswords must be at least 6 characters. </p>

                   
                    <button type = "submit" onClick = {accountcreated} 
                    className = "accountcreated" >Continue</button>

                </form>
            </div>

        </div>
    )
}

export default CreateAccount
