/**
 *  function: check a line, is there any free space in it?
 *  
 */

// test parameter: 1 dimension array
// 
const assert = require('chai').assert;
const gameAPI = require('../lib/gameAPI');


describe('Line is full?', ()=>{

  describe('input with no free space', ()=>{

    var input = [1,1,1,1,1,1,1]
    //this must return true
    it('must return true', () => {
      assert.equal(gameAPI.lineCheck(input), true);
    })
  })

  describe('iput with at least 1 free space', () => {
    var input = [1,1,1,0,1,1];

    it('must return false', () => {
      assert.equal(gameAPI.lineCheck(input), false);
    })
  })

  describe('Input is not an array', ()=>{
    var input = {array: false};
    it('must throw an error', ()=>{
      assert.throws(()=>{gameAPI.lineCheck(input)}, 'Not Array');
      
    })
  })

})