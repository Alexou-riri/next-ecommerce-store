import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key) {
  Cookies.remove(key);
}

export function stringifyCookieValue(value) {
  return JSON.stringify(value);
}
