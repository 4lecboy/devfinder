import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Globe, TwitterIcon } from 'lucide-react';

const UserSocialLinks = ({ user }) => {
  return (
    <div className='flex items-center gap-2'>
      <Link to={`https://github.com/${user.login}`} className='text-muted-foreground hover:text-primary transition-colors'>
        <Github className='w-5 h-5' />
      </Link>
      {user.blog && (
        <div className='flex items-center'>
          <Link to={`${user.blog}`} className='text-muted-foreground hover:text-primary transition-colors'>
            <Globe className='w-5 h-5' />
          </Link>
        </div>
      )}
      {user.twitter_username && (
        <Link to={`https://x.com/${user.twitter_username}`} className='text-muted-foreground hover:text-primary transition-colors'>
          <TwitterIcon className='mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5' />
        </Link>
      )}
    </div>
  );
};

export default UserSocialLinks;