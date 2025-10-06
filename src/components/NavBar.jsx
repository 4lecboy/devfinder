import { CodeXml } from 'lucide-react';


const NavBar = () => {
  return (
    <header className=" backdrop-blur shadow-2xl sticky top-0 z-50">
        <nav className='flex max-w-4xl h-full mx-auto px-4 md:px-6 items-center justify-between'>
            <div className='flex items-center gap-3'>
                <CodeXml/>
                <div className='flex flex-col leading-tight'>
                    <h1 className='text-ld md:text-xl font-semibold tracking-tight'>
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
