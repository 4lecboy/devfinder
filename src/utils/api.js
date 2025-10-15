import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export async function fetchGitHubUser(username) {
  if (!username) throw new Error("Username required");
  try {
    const response = await axios.get(`${BASE_URL}${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN || ""}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) return null;
    const msg =
      error.response?.data?.message || error.message || "GitHub API request failed";
    throw new Error(msg);
  }
}

export async function fetchUserRepos(username) {
  const response = await axios.get(`${BASE_URL}${username}/repos`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN || ""}`,
    },
  });
  return response.data;
}
