const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;

describe('GET /', function() {
  it('debería responder con "¡Hola Mundo!"', function(done) {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('¡Hola Mundo!');
        done();
      });
  });
});