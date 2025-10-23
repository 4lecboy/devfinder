import { Link } from 'react-router-dom';
import { Github, Users, GitFork, Code2, SearchCode, ExternalLink } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center mb-6">
            <SearchCode className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Find <span className="text-primary">GitHub</span> Developers<br />
            In Just Seconds
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            DevFinder helps you discover and connect with GitHub users, explore their profiles, 
            and access their repositories with a clean, responsive interface.
          </p>
          <div className="pt-4">
            <Link to="/search">
              <Button 
                size="md"
                icon={<SearchCode className="w-5 h-5" />}
                className="text-base px-8 py-6"
              >
                Start Searching
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Github className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">GitHub API Integration</h3>
            <p className="text-muted-foreground">
              Search for any GitHub user and get detailed profile information instantly.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">User Profiles</h3>
            <p className="text-muted-foreground">
              View comprehensive user profiles with stats, repositories, and social links.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-md transition-all duration-300">
            <div className="flex justify-center mb-4">
              <GitFork className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quick Access</h3>
            <p className="text-muted-foreground">
              Jump directly to followers, following, and repositories with a single click.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <SearchCode className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Search</h3>
            <p className="text-muted-foreground">Enter any GitHub username to start</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Discover</h3>
            <p className="text-muted-foreground">View detailed profile information</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-4 mb-4">
              <ExternalLink className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Connect</h3>
            <p className="text-muted-foreground">Access repositories and social links</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-secondary p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to explore?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Start searching GitHub users now and discover developers from around the world.
            </p>
            <Link to="/search">
              <Button size="md" className="px-8">
                Get Started
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default HomePage;
