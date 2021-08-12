import {useState} from 'react';
///[name,address
export const useForm=()=>{
    const[state,setState]=useState({
        name:'',
        phone:'',
        email:'',
        password:'',
        district:'',
        blood:'',
        message:'',
        hospitalName:'',
        travel:false

    })
    const handleChange=e=>{
        setState((state)=>({...state,[e.target.name]:e.target.value}))
    }
    const handleChangeManual=(name,value)=>{
        setState((state)=>({...state,[name]:value}))
    }

    return [state,handleChange,handleChangeManual]
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}