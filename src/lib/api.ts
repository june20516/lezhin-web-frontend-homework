const API_URL = 'http://localhost:3333';

const get = ({ path, page }: { path: string; page: number }) => {
  const url = new URL(path, API_URL);
  url.searchParams.set('page', page.toString());
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { get };
