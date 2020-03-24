const Cake = require('../models/cake.js').Cake
const Rate = require('../models/cake.js').Rate
module.exports = {
    index: function(req, res) {
        console.log("made it to index")
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: function(req, res) {
        const cake = new Cake();
        cake.name = req.body.name;
        cake.image = req.body.image;
        cake.save()
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },
    destroy: function(req, res) {
        Cake.findOne({_id: req.params.id})
            .then(b => {
                b.remove()
                    .then(b => res.json(b))
                    .catch(err => res.json(err));
            })
            .catch(err => res.json(err));
    },
    show: function(req, res) {
        Cake.findOne({_id: req.params.id})
            .then(data => res.json({cake: data}))
            .catch(err => res.json(err));
    },
    createRating: function(req, res) {
        console.log(req.body)
        Cake.findById({_id: req.params.id})
            .then(cake => {
            cake.ratings.push({comment: req.body.comment, rating: req.body.rating});
            cake.save()
                .then(data => res.json(data))
                .catch(err => res.json(err));
        })          
        .catch(err => res.json(err));
    }
}
