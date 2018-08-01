const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => { 
    let joe;

    beforeEach((done) => {
        joe = new User({ name : "San" });
        joe.save()
        .then(() => done());
    });

    it('Model instance remove', (done)=>{
        //console.log(joe)
        joe.remove()
            .then(()=> User.findOne({name: 'San'}))
            .then((user)=>{
                // console.log("fdfd : ", user)
                assert(user !== null)
                done();
            })
    });

    it('class method remove', (done) => {
        // remove a bunch of record with somecriteria
        User.remove({'name' : 'Joe'})
        .then(() => User.findOne({'name' : 'Joe'}))
        .then((user) => {
            assert(user === null)
            done();
        });
    });

    it('class method findOneAndRemove ', (done) => {
        User.findOneAndRemove({'name' : 'Joe'})
        .then(() => User.findOne({'name' : 'Joe'}))
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