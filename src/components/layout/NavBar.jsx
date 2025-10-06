import { SearchCode } from 'lucide-react';


const NavBar = () => {
  return (
    <header className="bg-background dark:bg-background/80 shadow-sm dark:shadow-lg z-[100] sticky w-full mx-auto border-b border-border/60 dark:border-border/30">
        <nav className='max-w-4xl mx-auto my-0 px-4 py-3 md:py-4 flex items-center justify-between'>
            <div className='container flex items-center gap-3'>
                <div className='inline-flex items-center justify-center cursor-pointer transition-colors hover:text-primary'>
                    <SearchCode className='h-5 w-5 md:h-6 md:w-6' />
                </div>
                <div className='flex flex-col leading-tight text-left'>
                    <h1 className=' text-lg font-poppins font-bold text-primary tracking-tight leading-none'>
                        <span>Dev</span>Finder
                    </h1>
                    <p className='text-gray-500 text-sm'>Find your Developer</p>
                </div>
            </div>


        </nav>
    </header>
  )
}

export default NavBar
