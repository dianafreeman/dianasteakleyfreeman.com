/** TODO: Test each file config
 *
 * eg: mock-stdin for process stdin: @https://glebbahmutov.com/blog/unit-testing-cli-programs/#standa
 *eg: start-storybook --smoke-test --quiet
 */
describe('Dev Configuration', () => {
  beforeEach(function() {
    stdin = require('mock-stdin').stdin();
  });

  it('does not explode', function() {
    process.nextTick(function mockResponse() {
      stdin.send('response');
    });
    return ask('question: test').then(function(response) {
      console.assert(response === 'response');
    });
  });
});
