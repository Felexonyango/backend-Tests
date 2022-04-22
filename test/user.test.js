const app =require('../app')
const chai = require ('chai');
const chaiHttp = require ('chai-http');
const expect = chai.expect
chai.use(chaiHttp);
chai.should();
describe ("Users", () => {
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