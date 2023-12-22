import {Outlet} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import LoginModal from './LoginModal.jsx'
import axios from 'axios'

const Root=()=>{
    const dispatch = useDispatch()
let loggedIn = useSelector(state => state.loggedIn)

const openModal=()=>{
    dispatch({type: 'modal-on'})
}

const logoutUser = async ()=>{
    const {data}=await axios.post('/api/auth/logout')
    if(data.success){
        dispatch({type:'logout'})
    }
}

return(
    <>
    <LoginModal/>
    <header>
        <h1>This is a website</h1>
        <nav>
            {loggedIn ? <button onClick = {logoutUser}>
                Logout
            </button> : <button onClick={openModal}>
                Login/Register
            </button>
            }
        </nav>
    </header>
    <Outlet/>
    </>
)
}

export default Root