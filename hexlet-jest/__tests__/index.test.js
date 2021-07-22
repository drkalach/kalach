import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

/*
/
/nikolay@nikolay:~/hexlet-js/hexlet-jest$ node --experimental-vm-modules "node_modules/.bin/jest"
(node:7876) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  __tests__/index.test.js
  ✓ reverse (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.242 s, estimated 1 s
Ran all test suites.
/
/
/
/
/
/
/
/
*/
