export function urlformat(url, parameters) {
  let qs = '';
  for (let key in parameters) {
    let value = parameters[key];
    qs += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1);
    url = url + '?' + qs;
  }
  return url;
}
