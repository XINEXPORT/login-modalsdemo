import { useSelector } from "react-redux"

const Home = ()=>{
    let user = useSelector(state=>state.user)
    return(
        <h1>Welcome {user? ',' + user.email + '!' : '!'}</h1>
    )
}

export default Home