if(typeof window === 'undefined') {
  var extend = require('../src/basic');
  var expect = require('chai').expect;
}

describe('basic', function() {  
  it('should extend the first object with unrepresented properties from the second object.', function() {
    let obj1 = {
      a: 1,
      d: 2
    };
    let obj2 = {
      a: 3,
      b: 4,
      c: 3
    };
    extend(obj1, obj2);
    expect(obj1).to.deep.equal({
      a: 1,
      d: 2,
      b: 4,
      c: 3
    });
  });

  it('Do not modify the 2nd object at all.', function() {
    let obj1 = {
      a: 1,
      d: 2
    };
    let obj2 = {
      a: 3,
      b: 4,
      c: 3
    };
    extend(obj1, obj2);
    expect(obj2).to.deep.equal({
      a: 3,
      b: 4,
      c: 3
    });
  });
});
