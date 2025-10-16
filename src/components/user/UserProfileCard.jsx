import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, CopyIcon, Github, Mail, MapPin, Search } from 'lucide-react';
import UserStats from './UserStats';
import UserSocialLinks from './UserSocialLinks';
import Button from '../ui/Button';
import { Card } from '../ui/Card';

const UserProfileCard = ({ user }) => {
  const BASE_URL = "https://github.com/";
  
  return (
    <div className='p-4 sm:p-6 hover:bg-muted/30 transition-colors'>
      <Card className="hover:shadow-lg transition-all duration-300">
        <div className="relative m-6">
          <div className='absolute right-0 top-0 flex items-center gap-2'>
            <Button variant="secondary" size="icon">
              <Bookmark className='h-4 w-4' />
            </Button>
          </div>
          <div className='flex flex-col sm:flex-row sm:gap-6 gap-4'>
            <div className='flex flex-row sm:flex-col items-center gap-4 sm:w-auto w-full'>
              <div className='relative group'>
                <img 
                  src={user.avatar_url} 
                  alt="User Avatar" 
                  className='w-20 h-20 sm:w-32 sm:h-32 rounded-full border-2 border-border group-hover:border-primary transition-colors'
                />
                <Link 
                  to={`${BASE_URL}${user.login}`} 
                  className='absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 rounded-full transition-opacity'
                >
                  <Github className='w-6 h-6 sm:w-8 sm:h-8' />
                </Link>
                <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 absolute -top-1 -right-1 sm:top-0 sm:right-0 transform sm:translate-x-1/4 sm:-translate-y-1/4 text-[10px] sm:text-xs bg-green-500 text-white'>
                  {!user.hirable ? 'Open to Work' : 'Not Available'}
                </div>
              </div>
              <div className='flex flex-col sm:items-center gap-2'>
                <UserSocialLinks user={user} />
                <div className='flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground'>
                  <MapPin className='w-3 h-3 sm:w-4 sm:h-4' />
                  <span>{user.location || 'Unknown Location'}</span>
                </div>
              </div>
            </div>
            <div className='flex-1 min-w-0 space-y-3 sm:space-y-4'>
              <div className='space-y-2'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
                  <h2 className='text-xl sm:text-2xl font-bold tracking-tight truncate'>
                    {user.name || 'No Name'}
                  </h2>
                </div>
                <div className='flex items-center gap-2 text-muted-foreground'>
                  <span className='text-xs sm:text-sm'>@{user.login}</span>
                  <button className='p-1 rounded-md hover:bg-primary/10 transition-colors' 
                  onClick={() => {
                          navigator.clipboard.writeText(user.login);
                          // Optionally add a toast notification here
                        }}
                        aria-label="Copy username">
                    <CopyIcon className='w-3 h-3'/> 
                  </button>
                </div>
                <p className='text-xs sm:text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none text-left'>
                  {user.bio || 'No Bio'}
                </p>
                
                <UserStats user={user} />
                
                <div className='flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4'>
                  <Button variant="ghost" size="sm" icon={<Search className='w-3 h-3 sm:w-4 sm:h-4' />}>
                    Find Social Profiles
                  </Button>
                </div>
                
                {user.email && (
                  <div className='space-y-1.5'>
                    <p className='text-[10px] text-left sm:text-xs font-medium text-muted-foreground'>Contact</p>
                    <div className='flex items-center gap-2'>
                      <Mail className='w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground'/>
                      <Link to={`mailto:${user.email}`} className='text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
                        {user.email}
                      </Link>
                      <button 
                        className='p-1 rounded-md hover:bg-primary/10 transition-colors group'
                        onClick={() => {
                          navigator.clipboard.writeText(user.email);
                          // Optionally add a toast notification here
                        }}
                        aria-label="Copy email address"
                      >
                        <CopyIcon className='w-3 h-3 text-muted-foreground group-hover:text-primary'/>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfileCard;