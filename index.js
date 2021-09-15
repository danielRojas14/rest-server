const express = require('express')


require('./connection');
const app = express();

// Setttings
app.set('port', process.env.PORT || 5000);

// Routes
app.use(require('./routes/notas.routes'));
 
app.listen(app.get('port'), ()=> console.log(`Server on port ${app.get('port')}`))