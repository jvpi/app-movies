const express = require('express')
const app = express()
const port = 3001
var path = require('path');
app.use(express.static(path.join(__dirname)))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
   // res.sendFile(path.join(__dirname,'index.html'))
   res.render('index')
})

//app.set('views', path.join(__dirname, 'views/admin'));

app.listen(port, () => {
  console.log('__dirname')
})