import { useState } from 'react'
import { Search } from 'lucide-react'
import { fetchGitHubUser } from '../utils/api';

const SearchPage = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
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
  }

  return (
      <div className='mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 h-full'>
        <div className='flex flex-col h-full'>
          <div className='rounded-xl sm:rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm flex-1'>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10 h-full'>
              <div className='container max-w-screen-2xl py-6'>
                <div className='space-y-4 sm:space-y-6'>
                  <div className='bg-card rounded-lg border shadow-sm'>
                      <form onSubmit={handleSearch} className='divide-y p-6'>
                          <div className='space-y-4'>
                              <div className='flex items-center gap-2'>
                                  <Search className='h-5 w-5 text-primary' />
                                  <h2 className='text-xl font-bold text-foreground'>
                                  Search Github Users
                                  </h2>
                              </div>
                              <div className='flex flex-col md:flex-row gap-4'>
                                  <div className='relative flex-grow'>
                                      <input 
                                          type="text" 
                                          placeholder="Enter GitHub username"
                                          value={username}
                                          onChange={(e) => setUsername(e.target.value)}
                                          className='flex w-full rounded-md border border-input px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 h-12 text-lg bg-background' 
                                          aria-label="GitHub username"
                                      />
                                      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground' />
                                  </div>
                                  <button 
                                  type="submit"
                                  disabled={isLoading || !username.trim()}
                                  className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-y-[-1px] py-2 h-11 px-6 md:w-auto w-full'
                                  >
                                      {isLoading ? 'Searching...' : 'Search Users'}
                                  </button>
                              </div>
                          </div>
                      </form>
                  </div>
                  {/* Results */}
                  {error && <p className='text-red-500'>{error}</p>}
                  {user && (
                    <div className='space-y-4 sm:space-y-6'>
                      <div className='bg-card rounded-lg border shadow-sm p-6'>
                        <div className='flex flex-col md:flex-row gap-6 items-start'>
                          {/* Avatar */}
                          <div className='flex-shrink-0'>
                            <img
                              src={user.avatar_url}
                              alt={user.login}
                              className='w-28 h-28 rounded-full border-2 border-transparent object-cover'
                            />
                          </div>

                          {/* Main info */}
                          <div className='flex-1'>
                            <div className='flex items-start justify-between gap-4'>
                              <div>
                                <h2 className='text-2xl font-bold text-foreground flex items-center gap-3'>
                                  {user.name || user.login}
                                </h2>
                                <p className='text-sm text-muted-foreground'>@{user.login}</p>
                                {user.bio && <p className='mt-2 text-sm text-muted-foreground'>{user.bio}</p>}
                                <div className='mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground'>
                                  {user.location && (
                                    <div className='flex items-center gap-2'>
                                      <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4 9 5.567 9 7.5 10.343 11 12 11z'></path><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 11v10'></path></svg>
                                      <span>{user.location}</span>
                                    </div>
                                  )}
                                  {user.blog && (
                                    <a className='text-primary hover:underline' href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target='_blank' rel='noreferrer'>
                                      Website
                                    </a>
                                  )}
                                  {user.twitter_username && (
                                    <a className='text-primary hover:underline' href={`https://twitter.com/${user.twitter_username}`} target='_blank' rel='noreferrer'>
                                      @{user.twitter_username}
                                    </a>
                                  )}
                                </div>
                              </div>

                              <div className='text-right'>
                                <a className='text-sm text-primary hover:underline' href={user.html_url} target='_blank' rel='noreferrer'>
                                  View on GitHub
                                </a>
                              </div>
                            </div>

                            {/* Stats */}
                            <div className='mt-5 grid grid-cols-2 md:grid-cols-4 gap-3'>
                              <div className='bg-muted/10 rounded-md p-3 text-center'>
                                <div className='text-xs text-muted-foreground'>Followers</div>
                                <div className='text-lg font-semibold'>{user.followers}</div>
                              </div>
                              <div className='bg-muted/10 rounded-md p-3 text-center'>
                                <div className='text-xs text-muted-foreground'>Following</div>
                                <div className='text-lg font-semibold'>{user.following}</div>
                              </div>
                              <div className='bg-muted/10 rounded-md p-3 text-center'>
                                <div className='text-xs text-muted-foreground'>Repos</div>
                                <div className='text-lg font-semibold'>{user.public_repos}</div>
                              </div>
                              <div className='bg-muted/10 rounded-md p-3 text-center'>
                                <div className='text-xs text-muted-foreground'>Public gists</div>
                                <div className='text-lg font-semibold'>{user.public_gists ?? 0}</div>
                              </div>
                            </div>

                            {/* Contact */}
                            <div className='mt-5 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between'>
                              <div className='text-sm text-muted-foreground'>
                                {user.email && (
                                  <div className='flex items-center gap-2'>
                                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8'></path><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8'></path></svg>
                                    <span>{user.email}</span>
                                  </div>
                                )}
                              </div>

                              <div className='flex items-center gap-3'>
                                {user.blog && (
                                  <a className='text-sm text-muted-foreground hover:text-primary' href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target='_blank' rel='noreferrer'>
                                    Blog
                                  </a>
                                )}
                                <a className='text-sm text-muted-foreground hover:text-primary' href={user.html_url} target='_blank' rel='noreferrer'>
                                  GitHub
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SearchPage
