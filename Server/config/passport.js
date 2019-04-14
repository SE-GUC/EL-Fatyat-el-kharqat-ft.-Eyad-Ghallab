 const JwtStrategy = require('passport-jwt').Strategy
 const ExtractJwt = require('passport-jwt').ExtractJwt
 const mongoose = require('mongoose')
 const inv = mongoose.model('investors')
 const tokenKey = require('./keys').secretOrKey

 let opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
 opts.secretOrKey = tokenKey

 module.exports = passport => {
     passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
        const currentUser = await inv.findById(jwtPayload.id)
        if(currentUser) return done(null,currentUser)
        return done(null,false)
     }))
 }