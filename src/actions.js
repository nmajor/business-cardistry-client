import fetch from 'isomorphic-fetch';

const baseUrl = 'https://kdp087esgi.execute-api.us-east-1.amazonaws.com/dev'

export function submitHtml(html, cb) {
  fetch(`${baseUrl}/hello`, {
    method: 'post',
    body: html,
  })
  .then((res) => {
    if (res.status >= 400) {
      throw new Error(`Bad response from server ${res.status} ${res.statusText}`);
    }

    return res.json();
  })
  .then((res) => {
    cb(res);
  })
  .catch((err) => { console.log('An error happened when submitting the html', err); });
}
