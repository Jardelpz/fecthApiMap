const express= require('express')
const fs= require('fs')

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.listen(3000, ()=> console.log("Rodando na porta 3000"))



app.post('/latlon', (req, res) => {
    let data = {
        "Latitude: ": req.body.myLat,
        "Longitude: ": req.body.myLon 
    }
    console.log(req.body)
    //console.log(mymap.distance([0, 0], [mymap.latitude, mymaplongitude]).toFixed(2))
    fs.appendFile('log.txt', JSON.stringify(data, null, 1) + "\r\n", function (err){
        if(err){
            console.log(err)
        }else{
            console.log("Ok")
        }
    })

    res.json({
        sucess: "Sucesso",
        lat: req.body.myLat,
        long: req.body.myLon
    })
    
})