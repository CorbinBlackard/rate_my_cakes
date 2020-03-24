const cake = require('../controllers/cakes.js')
module.exports = function(app) {
    app.get('/cakes', (req, res) =>{
        cake.index(req, res);
    });
    app.post('/createCake', (req, res) => {
        cake.create(req, res);
    })
    app.delete('/cakes/:id', (req, res) => {
        cake.destroy(req, res);
    });
    app.get('/cakes/:id', (req, res) => {
        cake.show(req, res);
    });
    app.put('/createRating/:id', (req, res) =>{
        cake.createRating(req, res);
    });

} 