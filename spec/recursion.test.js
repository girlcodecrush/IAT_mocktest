if(typeof window === 'undefined') {
  var sinon = require('sinon');
  var calculator = require('../src/recursion');
  var expect = require('chai').expect;
}

describe('recursion', function() {
  var spy = sinon.spy(calculator, 'fib');

  beforeEach(function() {
    spy.resetHistory();
  });

  it('fib(50)을 브라우저가 다운시키지 않고 계산 할 수 있어야 합니다. specrunner에서 확인을 하진 않습니다. 개발자 도구에서 테스트 해주세요. 작성하신 코드에서 답이 12586269025이 나와야 합니다. 계산이 되고 답이 일치하면 통과입니다.', function() {
    expect(undefined).to.equal(
      12586269025
    );
    expect(spy.calledOnce).to.be.equal(true);
  });

  it('fib(100)을 브라우저가 다운시키지 않고 계산 할 수 있어야 합니다. specrunner에서 확인을 하진 않습니다. 개발자 도구에서 테스트 해주세요. 작성하신 코드에서 답이 354224848179262000000 나와야 합니다. 계산이 되고 답이 일치하면 통과입니다.', function() {
    expect(undefined).to.equal(
      354224848179262000000
    );
    expect(spy.calledOnce).to.be.equal(true);
  });

});
