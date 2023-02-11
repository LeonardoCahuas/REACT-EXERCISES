import useGitHubUser from "./useGithubUser";
export function GitHubUser({ username }) {
  const {Data} = useGitHubUser(username)

  return (
    <div>
      <div>Username: {Data.name}</div>
      <div>Location: {Data.location }</div>
    </div>
  );
}
export default GitHubUser