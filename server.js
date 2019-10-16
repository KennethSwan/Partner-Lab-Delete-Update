const express = require('express')
const app = express();
const incredibles = require('./models/incredibles.js')

app.get('/incredibles', (req, res) => {
	res.render('index.ejs', {
		incredibles: incredibles
	})
})









app.listen(3000, () => {
	console.log('Server is running on port 3000');
});