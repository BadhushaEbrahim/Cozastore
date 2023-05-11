const mongoClient = require('mongodb').MongoClient
const state = {
    db: null
}

module.exports.connect = (done) => {
    const url = 'mongodb://localhost:27017'
    // const url='mongodb+srv://dbeshop:MfM0gFNZj2oZEVzv@cluster0.g1vtced.mongodb.net/test'
    const dbname = 'eshop'

    mongoClient.connect(url, (err, data) => {
        if (err) return done(err)
        state.db = data.db(dbname)
        done()
    })

}


module.exports.get = () => {
    return state.db
}