const app = require('../app');

const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('/posts API Integration Spec ', () => {
  describe('GET /posts', () => {
    it('it should return 200', (done) => {
      chai
        .request(app)
        .get('/posts')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('GET /post/:id', () => {
    it('it should return 304', (done) => {
      chai
        .request(app)
        .get('/post/:id')
        .end((err, res) => {
          res.should.have.status(304);
          done();
        });
    });
  });
  describe('GET /post/:id', () => {
    it('it should return 304', (done) => {
      chai
        .request(app)
        .get('/post/:id')
        .end((err, res) => {
          res.should.have.status(304);
          done();
        });
    });
  });
});
