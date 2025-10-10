import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';



const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">    
        <NavBar />
        
        <main className="flex-1 relative py-4 sm:py-6 md:py-8">
        <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default Layout
