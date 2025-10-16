import { useState } from 'react';
import { fetchGitHubUser } from '../utils/api';

export function useGithubUser() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  
  const searchUser = async (e) => {
    if (e) e.preventDefault();
    
    setError("");
    const trimmed = username.trim();
    if (!trimmed) {
      setError("Please enter a GitHub username");
      return;
    }

    setIsLoading(true);
    try {
      const data = await fetchGitHubUser(trimmed);
      if (!data) {
        setError("User not found");
        setUser(null);
        return;
      }
      setUser(data);
    } catch (err) {
      setError(err?.message || "An error occurred");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  return { 
    username, 
    setUsername, 
    user, 
    setUser,
    isLoading, 
    error, 
    searchUser 
  };
}