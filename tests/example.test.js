import { addition } from '../src/example';

describe('unit test for example functions', () => {
  it('test addition', () => {
    expect(addition(1, 1)).toBe(2);
  });
});
