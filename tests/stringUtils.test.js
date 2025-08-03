const { capitalize, reverse } = require('../index');

describe('String Utils', () => {
  test('capitalize should capitalize each word', () => {
    expect(capitalize('hello world')).toBe('Hello World');
    expect(capitalize('this is test')).toBe('This Is Test');
  });

  test('reverse should reverse the string', () => {
    expect(reverse('hello')).toBe('olleh');
    expect(reverse('')).toBe('');
  });
});

