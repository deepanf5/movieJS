import express from 'express'
const port = process.env.PORT || 3000
const app = express()

app.get('/',(req,res) => {

    res.send('Movie APi app is running..')
})



app.listen(port,() => [

    console.log(`Movie app is running on ${port}...`)
])