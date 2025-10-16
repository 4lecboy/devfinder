import { GithubService } from '../services/github';

export const fetchGitHubUser = (username) => {
  return GithubService.getUser(username);
};
