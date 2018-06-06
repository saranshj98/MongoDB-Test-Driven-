const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {

    let joe ;

    beforeEach((done) => {
        joe = new User({'name' : 'Saransh'});
        joe.save()
        .then(() => done());

    });

    it('finds all users with a name of joe' , (done) => {
        User.find({'name' : 'Saransh'})
        .then((users) => {
            assert(users[0]._id.toString() === joe._id.toString());
            done();
        })
    })

    it('find a user with a particular id', (done) => {
        User.findById({ '_id' : joe._id})
        .then((user) => {
            assert(joe.name === 'Saransh');
            done();
        })
    })
})
