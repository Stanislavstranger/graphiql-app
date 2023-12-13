import querySchema from '../../constants/querySchema';

export const initialGraphQLRequest = async (endpoint: string) => {
  const query = querySchema;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();

  console.log(data);
};
