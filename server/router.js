const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');


const InterestController = require('./controllers/interest');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});





module.exports = function(app) {

    app.post('/auth/signin', requireSignIn, Authentication.signin);

    app.post('/auth/signup', Authentication.signup);

    app.post('/user/changepassword', requireAuth, Authentication.changePassword);

    app.post('/user/editinfo', requireAuth, Authentication.editInfo);

    app.get('/interests', InterestController.getInterests);

    app.post('/interests/add', requireAuth, InterestController.addInterest);

    app.delete('/interests/:id', requireAuth, InterestController.deleteInterest);

    app.put('/interests/:id/like', requireAuth, InterestController.likeInterest);
}