import React,{useEffect,useContext} from 'react';
import {useForm} from "./useForm";
import AuthContext from "../../Context/auth/authContext";
import {FaUser} from "react-icons/all";
import {FaLock} from "react-icons/all";

const SignIn = (props) => {
    const authContext=useContext(AuthContext);
    const {login,isAuthenticated}=authContext;
    const [values,handleChangeForLogin]=useForm()
    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
    },[])

    const onLogin=(e)=>{
        e.preventDefault()
        login(values)
    }

    return (
        <form  className="sign-in-form" onSubmit={onLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <i><FaUser/></i>
                <input id="email" name="email" type="text" placeholder="Email" value={values.email} onChange={handleChangeForLogin} required/>
            </div>
            <div className="input-field">
                <i><FaLock/></i>
                <input id="password" name="password" type="password" placeholder="Password" value={values.password} onChange={handleChangeForLogin} required/>
            </div>
            <input type="submit" value="Login" className="btn solid" />

        </form>
    );
};

export default SignIn;