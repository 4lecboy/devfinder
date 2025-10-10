import { Search } from 'lucide-react'
import React from 'react'

const SearchPage = () => {
  return (
      <div className='mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 h-full'>
        <div className='flex flex-col h-full'>
          <div className='rounded-xl sm:rounded-2xl bg-background/50 backdrop-blur-sm shadow-sm flex-1'>
            <div className='p-4 sm:p-6 md:p-8 lg:p-10 h-full'>
              <div className='container max-w-screen-2xl py-6'>
                <div className='space-y-4 sm:space-y-6'>
                  <div className='bg-card rounded-lg border shadow-sm'>
                    {/** Search Form */}
                    <form action="" className='divide-y p-6'>
                      <div className='space-y-4'>
                        <div className='flex items-center gap-2'>
                          <Search className='h-5 w-5 text-primary' />
                          <h2 className='text-xl font-bold text-foreground'>
                            Search Github Users
                          </h2>
                        </div>
                        <div className='flex items-center'>
                          <input type="text" placeholder="Enter GitHub username" className='border border-gray-300 rounded-md p-2 flex-1' />
                          <button type="submit" className='bg-primary text-white rounded-md px-4 py-2 ml-2'>Search</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/** Search Results */}
                  <div className='space-y-4 sm:space-y-6'>
                    <div className='bg-card rounded-lg border shadow-sm p-6'>
                      <h2 className='text-xl font-bold text-foreground mb-4'>Start your search</h2>
                      <p className='text-muted-foreground'>No results to display. Please enter a GitHub username and click "Search".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SearchPage
