

export default function SearchForm({ searchTerm, setSearchTerm, isLoading }) {

    return (
    <div className='bg-card rounded-lg border shadow-sm'>
        <form onSubmit={handleSubmit} className='divide-y p-6'>
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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='flex w-full rounded-md border border-input px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 h-12 text-lg bg-background' 
                        />
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground' />
                    </div>
                    <button 
                    type="submit"
                    disabled={isLoading || !searchTerm.trim()}
                    className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-y-[-1px] py-2 h-11 px-6 md:w-auto w-full'
                    >
                        {isLoading ? 'Searching...' : 'Search Users'}
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
