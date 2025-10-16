import SearchForm from '../components/search/SearchForm';
import UserProfileCard from '../components/user/UserProfileCard';
import { useGithubUser } from '../hooks/useGithubUser';

const SearchPage = () => {
  const { username, setUsername, user, isLoading, error, searchUser } = useGithubUser();

  return (
    <div className='mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 h-full'>
      <div className='flex flex-col h-full'>
        <div className='rounded-xl sm:rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm flex-1'>
          <div className='p-4 sm:p-6 md:p-8 lg:p-10 h-full'>
            <div className='container max-w-screen-2xl py-6'>
              <div className='space-y-4 sm:space-y-6'>
                <SearchForm 
                  username={username}
                  setUsername={setUsername}
                  handleSearch={searchUser}
                  isLoading={isLoading}
                />
                
                {error && <p className='text-red-500'>{error}</p>}
                {user && <UserProfileCard user={user} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
