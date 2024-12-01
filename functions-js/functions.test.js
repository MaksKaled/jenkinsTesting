import { add, multiply } from './functions';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3); // Исправлено
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6); // Исправлено
});
