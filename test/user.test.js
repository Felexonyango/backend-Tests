const app =require('../app')
let mongoose = require("mongoose");
const User = require('../model/user');
const chai = require ('chai');
const chaiHttp = require ('chai-http');
const expect = chai.expect
chai.use(chaiHttp);
chai.should();

describe('USERS', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.deleteMany({}, (err) => { 
           done();           
        });        
    });

    describe('/GET user', () => {
        it('it should GET all the users', (done) => {
          chai.request(app)
              .get('/api/user')
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                done();
              });
        });
    });


})

