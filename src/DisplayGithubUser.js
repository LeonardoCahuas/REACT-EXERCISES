import useGitHubUser from "./useGithubUser";

export function GitHubUser({ username }) {
  const { data} = useGitHubUser(username);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Username: {data.name}</div>
      <div>Location: {data.location}</div>
    </div>
  );
}

export default GitHubUser;