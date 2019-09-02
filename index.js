const express = require('express');

const App = express();

const port = process.env.PORT || 3000;
const options = {
    root: __dirname
}

getHTML = (req, res) => {
    res.sendFile('./index.html', options, (err) => {
        if (err) throw err;
        console.log('Sirviendo index.html');
    });
};

App.get('/', getHTML);

App.listen(port, () => {
    console.log('Aplicacion escuchando en el puerto: ' + port);
})

module.exports = App;