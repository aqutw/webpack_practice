var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World Test2222</h1>';
app.appendChild(sub());
document.body.appendChild(app);
