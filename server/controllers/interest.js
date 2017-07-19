const Interest = require('../models/Interest');


// getting all interests from the database
exports.getInterests = function(req, res, next) {
    Interest.find({})
        .then((interests) => {
            res.send(interests);
        })
}

// adding an interest to the db
exports.addInterest = function(req, res, next) {
    const {title, img, link} = req.body;
    const author = req.user.username;

    const interest = new Interest({
        title,
        img,
        link,
        author,
        liked: []
    });

    interest.save()
        .then((interest) => {
            res.send(interest);
        })
}

// removing specific interest from the db
exports.deleteInterest = function(req, res, next) {
    const {id} = req.params;
    const user = req.user.username;

    Interest.findById(id)
        .then((interest) => {
            if(interest.author === user) {
                interest.remove()
                    .then(() => res.send('Removed!'));
            } else {
                res.status(422).send('Unauthorized attempt to delete!');
            }
        })
}

// handling like/dislike option:
exports.likeInterest = function(req, res, next) {
    const {id} = req.params;
    const user = req.user.username;

    Interest.findById(id)
        .then((interest) => {
            // if the user has not already liked it, then add like
            if(interest.liked.indexOf(user) === -1) {
                Interest.findOneAndUpdate({_id: id}, {$push: {liked: user}}, {new: true})
                    .then((interest) => res.send(interest))
            } else { // otherwise dislike it
                Interest.findOneAndUpdate({_id: id}, {$pull: {liked: user}}, {new: true})
                    .then((interest) => res.send(interest))
            }
        })
        .catch(() => res.send('something went wrong'))
}