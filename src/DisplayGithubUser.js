import useGitHubUser from "./useGithubUser";
export function GitHubUser({ username }) {
  const {Data, fetchUser, loading, error } = useGitHubUser(username)
  return (
    <div>
      <div>Username: {Data.name}</div>
      <div>Location: {Data.location }</div>
      <div>{loading && <p>Loading...</p>}</div>
      <div>{error && <p>Error</p>}</div>
    </div>
  );
}
export default GitHubUser