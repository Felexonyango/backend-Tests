const app =require('../app')
const  mongoose = require("mongoose");
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
    describe('/POST user', () => {
        it('it should  POST user', (done) => {
            let user = {
                name: 'John doe',
                email: "johndoe@gmail.com",
               
            }
            
          chai.request(app)
              .post('/api/user')
              .send(user)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.should.have.a('object')
       
                done();
              });
        });
  
    });
    describe('/GET user by id', () => {
        it('it should  return  user by id', (done) => {
            let user=new User({ name:"john doe",email:"johndoe@gmail.com"})
         user.save((err, user) => {
            chai.request(app)
            .get('/api/user/'+ user.id)
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.should.have.a('object')
                  res.body.should.have.property('name');
                  res.body.should.have.property('email');
                  res.body.should.have.property('_id').eql(user.id);
     
              done();
            });
         })
     
        });
  
    });
  });


