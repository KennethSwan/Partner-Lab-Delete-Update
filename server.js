const express = require('express');
const app = express();
const incredibles = require('./models/incredibles.js');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//index route
app.get('/incredibles', (req, res) => {
	res.render('index.ejs', {
		incredibles: incredibles
	})
})

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//post route
// app.post('/incredibles', (req, res) => {
// 	console.log(req.body, ' this should be the contents of the form');
// 	if(
// })
//delete route
app.delete('/incredibles/:index', (req, res) => {
	incredibles.splice(req.params.index, 1);
	res.redirect('/incredibles');
})

app.get('/incredibles/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		incredibles: incredibles[req.params.index],
		index: req.params.index
	})
})






app.listen(3000, () => {
	console.log('Server is running on port 3000');
});