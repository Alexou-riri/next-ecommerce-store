import { getParsedCookie, setParsedCookie, deleteCookie } from '../cookies';

test('check value of cookies', () => {
  const cookieValue = {
    key: 'test',
    value: [{ id: 0, items: 1 }],
  };

  expect(getParsedCookie(cookieValue.key)).toBe(undefined);
  expect(setParsedCookie(cookieValue.key, cookieValue.value)).toBeUndefined();
  expect(getParsedCookie(cookieValue.key)).toStrictEqual(cookieValue.value);

  expect(deleteCookie(cookieValue.key)).toBe(undefined);
});
