const API_URL = 'http://localhost:3333';

const requestsBeenFetching: string[] = [];

const get = ({ path, page }: { path: string; page: number }): Promise<Response> => {
  const url = new URL(path, API_URL);
  url.searchParams.set('page', page.toString());

  return new Promise((resolve, reject) => {
    if (requestsBeenFetching.includes(url.toString())) {
      reject(new Error('Duplicate Request'));
    } else {
      requestsBeenFetching.push(url.toString());
      return fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => resolve(response))
        .catch(error => reject(error))
        .finally(() =>
          requestsBeenFetching.splice(requestsBeenFetching.indexOf(url.toString()), 1),
        );
    }
  });
};

export { get };
