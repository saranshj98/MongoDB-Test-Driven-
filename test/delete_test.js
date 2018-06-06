const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => { 
    let joe;

    beforeEach((done) => {
        joe = new User({ name : "Joe San" });
        joe.save()
        .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
        .then(() => User.findOne({'name' : 'Joe'}))
        .then((user) => {
            assert(user === null)
            done();
        });
    });

    it('class method remove', (done) => {
        // remove a bunch of record with somecriteria
        User.remove({'name' : 'Saransh'})
        .then(() => User.findOne({'name' : 'Saransh'}))
        .then((user) => {
            assert(user === null)
            done();
        });
    });

    it('class method findOneAndRemove ', (done) => {
        User.findOneAndRemove({'name' : 'Saransh'})
        .then(() => User.findOne({'name' : 'Saransh'}))
        .then((user) => {
            assert(user === null)
            done();
        })

    });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove(joe._id)
        .then(() => User.findOne({'name' : 'Joe'}))
        .then((user) => {
            assert(user === null)
            done();
        })
    });
});