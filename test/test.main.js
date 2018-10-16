const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app.js')
const should = chai.should();
//productivityapp99


chai.use(chaiHttp)



describe('/', () => {
it('should rend index pug', (done) => {
    chai.request(app)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        })
});

it('should add new note', (done) => {
    chai.request(app)
        .post('/addtodo')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        })
});

it(' should add note', (done) => {
    chai.request(app)
        .post("/addnote")
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        })
});

it('should remove todo', (done) => {
    chai.request(app)
        .post('/remove')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        })
});

it('should remove note', (done) => {
    chai.request(app)
        .post('/removenote')
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        })
});









});
