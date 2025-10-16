import { GithubService } from '../services/github';

export const fetchGitHubUser = (username) => {
  return GithubService.getUser(username);
};

export const fetchUserRepos = (username) => {
  return GithubService.getUserRepos(username);
};
