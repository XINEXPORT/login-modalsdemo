import { useSelector, useDispatch } from "react-redux"
import {useState} from 'react'
import axios from "axios"
import './LoginModal.css'

const LoginModal = () => {
    const dispatch = useDispatch()
    const modal = useSelector(state =>state.modal)

    const [logEmail, setLogEmail] = useState('')
    const [logPassword, setLogPassword] = useState('')

    const [regEmail, setRegEmail] = useState('')
    const [regPassword, setRegPassword] = useState('')

    const loginUser = async () =>{
        if(logEmail && logPassword){
            const {data} = await axios.post('/api/auth/login',{
                email: logEmail,
                password: logPassword
            })
            if(data.success){
                dispatch({type:'login', payload: data.user})
                dispatch({type:'modal-off'})
    } else{
        alert('invalid data')
    }
    } else {
        alert('need both emial and password')
    }
    }

    const registerUser = async() =>{
        if(regEmail && regPassword){
            const {data} = await axios.post('/api/auth/register', {
                email: regEmail,
                password: regPassword
            })
            if(data.success){
                dispatch({type:'login', payload: data.user})
                dispatch({type:'modal-off'})
    } else{
        alert('invalid data')
        }
    } else{
        alert('need both emial and password')
    }
}

    return(
        <div style={{display:modal}} id="modal">
            <main id="forms">
            <section className = "form">
                <h1>Login</h1>
                <label htmlFor = "log-email">Email: </label>
                <input type="text"
                        name = "log-email"
                        placeholder = "enter your email"
                        onChange = {(e)=> setLogEmail(e.target.value)}
                ></input>

                <label htmlFor = "log-password">Password: </label>
                <input type="text"
                        name = "log-password"
                        placeholder = "enter your password"
                        onChange = {(e)=> setLogPassword(e.target.value)}
                ></input>
                <button
                onClick={loginUser}
                >Login</button>
            </section>

            <section className = "form">
            <h1>Register</h1>
                <label htmlFor = "reg-email">Email: </label>
                <input type="text"
                        name = "reg-email"
                        placeholder = "enter your email"
                        onChange = {(e)=> setRegEmail(e.target.value)}
                ></input>
                <label htmlFor = "reg-password">Password: </label>
                <input type="text"
                        name = "reg-password"
                        placeholder = "enter your password"
                        onChange = {(e)=> setRegPassword(e.target.value)}
                ></input>
                <button
                onClick={registerUser}
                >Register</button>
            </section>
            </main>
        </div>
    )
}

export default LoginModal