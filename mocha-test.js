const assert = require('chai').assert;
const myResult = require('src/app.js');

describe('markdownLinks()', () => {
  it('app should return true', () => {
    assert.equal(myPlugin(), true);
  });
  // it('debería devolver false para index.js', () => {
  //   assert.equal(markdownLinks('index.js'), false);
  // });
});