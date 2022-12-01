var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3877;

mongoose.connect('mongodb://127.0.0.1:27017/ejemplo', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("conexion exitosa");
        app.listen(port, () => {
            console.log("Servidor eschuando en http://localhost:" + port);
        });
    }
})