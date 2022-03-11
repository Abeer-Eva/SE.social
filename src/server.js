const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const data =require()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( '/', express.static(__dirname + '/../public') )
app.use((req, res, next) => {
	console.log(`  ${req.method}  ${req.url} `, req.body)
	next()
})


use('/', data)
app.get('*', (req, res) => {
	var path = require('path');
res.sendFile(path.resolve(__dirname +'/../public/index.html'))

})



app.listen(PORT, () => {
	console.log(`Server is working on ${PORT}`)
}) 