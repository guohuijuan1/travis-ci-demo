var hello = require('./hello.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
  it('输出 Hello World', function() {
    expect(hello()).to.be.equal('Hello World');
  });
});