import ViteExpress from 'vite-express'
import morgan from 'morgan'
import session from 'express-session'
import express from 'express'
import{
    login,
    logout,
    checkStatus,
    register
} from './controllers/authControllers.js'

const app = express()
const PORT = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({secret: 'this is a secret', saveUniinitialized: true, resave:false}))
//add this to template, line 11

ViteExpress.config({printCiteDevServerHost:true})

//AUTH ENDPOINTS
app.get('/api/auth/status',checkStatus)
app.post('/api/auth/login',login)
app.post('/api/auth/logout', logout)
app.post('/api/auth/register',register)



ViteExpress.listen(app,PORT,()=>console.log(`server running on http://localhost:${PORT}`))