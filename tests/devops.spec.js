const chai = require('chai');
const expect = chai.expect;
const rewire = require('rewire');

let devopsController = rewire('../controllers/devops.controller');

describe('Test /devops', () => {
    let result;

    describe('Devops request on /', () => {

      it('devops should return a message with the receiver name', () => {
        const actualResult = devopsController.devopsGetMessage("Jose A.");
        expect(actualResult).to.equal('Hello Jose A. your message will be send');
      });

      it('devops should return null string', () => {
        const actualResult = devopsController.devopsGetMessage();
        expect(actualResult).to.equal(null);
      });    
    });
  });