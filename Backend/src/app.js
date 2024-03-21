import express from 'express'
import cors from 'cors'
const app = express()

app.use(
    cors({
        origin:'*',
        credentials:true
    })
)
// when we use middleware
app.use(
    express.json({
        limit:"16kb",
    })
)

// to take the data from the url
app.use(
    express.urlencoded(
        {
            extended:true,
            limit:"16kb"
        }
    )
)

app.use(express.static("public"))

import userRouter from './Routes/Application.Routes.js'
app.use('/api/v1',userRouter)



export {app} 