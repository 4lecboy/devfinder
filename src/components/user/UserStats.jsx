import React from 'react';
import { Link } from 'react-router-dom';
import { Users, WarehouseIcon } from 'lucide-react';

const UserStats = ({ user }) => {
  const BASE_URL = "https://github.com/";
  
  return (
    <div className='flex items-center justify-between w-full bg-secondary/50 rounded-lg p-2 sm:p-3 mt-3 sm:mt-4'>
      <div className='flex space-x-2 sm:space-x-4 items-center justify-between w-full mx-8'>
        <Link to={`${BASE_URL}${user.login}?tab=followers`} className='flex flex-col items-center'>
          <Users className='h-4 w-4 text-muted-foreground mb-1.5 group-hover:text-primary transition-colors' />
          <div className='text-center'>
            <div className='text-xs sm:text-sm font-semibold'>
              {user.followers}
            </div>
            <div className='text-[10px] sm:text-xs text-muted-foreground'>
              Followers
            </div>
          </div>
        </Link>
        <Link to={`${BASE_URL}${user.login}?tab=following`} className='flex flex-col items-center'>
          <Users className='h-4 w-4 text-muted-foreground mb-1.5 group-hover:text-primary transition-colors' />
          <div className='text-center'>
            <div className='text-xs sm:text-sm font-semibold'>
              {user.following}
            </div>
            <div className='text-[10px] sm:text-xs text-muted-foreground'>
              Following
            </div>
          </div>
        </Link>
        <Link to={`${BASE_URL}${user.login}?tab=repositories`} className='flex flex-col items-center'>
          <WarehouseIcon className='h-4 w-4 text-muted-foreground mb-1.5 group-hover:text-primary transition-colors' />
          <div className='text-center'>
            <div className='text-xs sm:text-sm font-semibold'>
              {user.public_repos}
            </div>
            <div className='text-[10px] sm:text-xs text-muted-foreground'>
              Repositories
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserStats;