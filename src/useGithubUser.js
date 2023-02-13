import useSWR from 'swr';

const fetchUser = (url) =>
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((error) => {
      console.error(error);
      throw error; // lancia l'errore per farlo gestire da useSWR
    });

function useGitHubUser(username) {
  console.log(username);
  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetchUser
  );

  return {
    data,
    error,
  };
}

export default useGitHubUser;
