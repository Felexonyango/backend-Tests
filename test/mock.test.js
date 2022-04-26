const app =require('../app')
const chai = require ('chai');
const chaiHttp = require ('chai-http');
const expect = chai.expect
chai.use(chaiHttp);
chai.should();
 describe("Test",()=>{
   describe("GET",()=>{
       it("should return Testing",(done)=>{
           request(app)
           .get('/test')
           .end((err,res)=>{
               res.should.have.status(200);
               done()
           })
       })
   })

 })


describe ("Mock", () => {
    describe("GET /users", () => {
        it("should get all users", (done) => {
            chai.request(app)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.should.be.an('array')
                    res.body.length.should.be.eql(5)
                    done();
                 });
        });
    })
})

