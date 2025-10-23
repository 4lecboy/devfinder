import { Search } from 'lucide-react';
import Button from '../ui/Button';

const SearchForm = ({ username, setUsername, handleSearch, isLoading }) => {
  return (
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
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isLoading}
              loadingText="Searching..."
              showLoadingText={true}
              classNName="w-full md:w-auto"
            >
              Search User
            </Button>
          </div> 
        </div>
      </form> 
    </div>
  ); 
};
 
export default SearchForm;