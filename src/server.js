const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use( '/', express.static(__dirname + '/../build') )
app.use((req, res, next) => {
	console.log(`  ${req.method}  ${req.url} `, req.body)
	next()
})



app.get('*', (req, res) => {
	var path = require('path');
res.sendFile(path.resolve(__dirname +'/../bulid/index.html'))

})



app.listen(PORT, () => {
	console.log(`Server is working on ${PORT}`)
}) 