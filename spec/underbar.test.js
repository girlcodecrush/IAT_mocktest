if(typeof window === 'undefined') {
  var sinon = require('sinon');
  var _ = require('../src/underbar');
  var expect = require('chai').expect;
}

_.identity = function(val) {
  return val;
};

var checkForNativeMethods = function(runUnderbarFunction) {
  it('should not use the native version of any underbar methods in its implementation', function() {
    var spy = sinon.spy(Array.prototype, 'reduce');
    runUnderbarFunction();
    expect(spy.notCalled).to.be.equal(true);
  });
};

describe('reduce', function() {
  checkForNativeMethods(function() {
    var add = function(tally, item) { return tally + item; };
    _.reduce([1, 2, 3, 4], add);
  });

  it('should be a function', function() {
    expect(_.reduce).to.be.an.instanceOf(Function);
  });

  it('should return a value', function() {
    var result = _.reduce([3, 2, 1], function(memo, item) { return item; });
    expect(result).to.be.defined;
  });

  it('should not mutate the input array', function() {
    var input = [1, 2, 3, 4, 5];
    var result = _.reduce(input, function(memo, item) { return item; });
    
    /*
     * Mutation of inputs should be avoided without good justification otherwise
     * as it can often lead to hard to find bugs and confusing code!
     * Imagine we were reading the code above, and we added the following line:
     *
     * var lastElement = input[input.length - 1];
     *
     * Without knowing that mutation occured inside of _.reduce,
     * we would assume that `lastElement` is 5. But if inside of
     * _.reduce, we use the array method `pop`, we would permanently
     * change `input` and our assumption would not longer be true,
     * `lastElement` would be 4 instead!
     *
     * The tricky part is that we have no way of knowing about the mutation
     * just by looking at the code above. We'd have to dive into the
     * implementation of _.reduce to the exact line that uses `pop`.
     * If we write a lot of code with this assumption, it might be very hard
     * to trace back to the correct line in _.reduce.
     *
     * You can avoid an entire class of bugs by writing functions
     * that don't mutate their inputs!
     */

    expect(input).to.eql([1, 2, 3, 4, 5]);
  });

  it('should invoke the iterator function with arguments (memo, item) in that order', function() {
    var memoInCallback, itemInCallback;

    _.reduce(['item'], function(memo, item) {
      memoInCallback = memo;
      itemInCallback = item;
    }, 'memo');

    expect(memoInCallback).to.equal('memo');
    expect(itemInCallback).to.equal('item');
  });

  it('should pass items of the array into the iterator from left to right', function() {
    var orderTraversed = [];

    _.reduce([1, 2, 3, 4], function(memo, item) {
      orderTraversed.push(item);
      return memo;
    }, 10);

    expect(orderTraversed).to.eql([1, 2, 3, 4]);
  });

  it('should continue to call iterator even if the iterator returns undefined', function() {
    var callCount = 0;
    var returnFalsy = function(total, item) {
      callCount++;
      if (callCount === 1) {
        return undefined;
      } else {
        return item + 1;
      }
    };

    var total = _.reduce([1, 1, 2], returnFalsy);
    expect(total).to.equal(3);
  });

  it('should pass every item of the array into the iterator if a memo is passed in', function() {
    var result = _.reduce([1, 2, 3], function(memo, item) {
      return memo - item;
    }, 10);

    expect(result).to.equal(4);
  });

  it('should accept falsy values as a valid memo', function() {
    // Be careful how you check if a memo has been passed in
    var result = _.reduce([1, 2, 3], function(memo, item) {
      return memo * item;
    }, 0);

    expect(result).to.equal(0);
  });

  it('should set memo to be the first item of the array if no memo is passed in', function() {
    var result = _.reduce([1, 2, 3], function(memo) {
      return memo;
    });

    expect(result).to.equal(1);
  });


  it('should pass the second item of the array into the iterator first if a memo is not passed in', function() {
    var result = _.reduce([3, 2, 1], function(memo, item) {
      return memo - item;
    });

    expect(result).to.equal(0);
  });

});