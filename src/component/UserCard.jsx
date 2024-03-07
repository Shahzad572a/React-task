// components/UserCard.js
import React from 'react';
import { Link } from 'react-router-dom';
function UserCard({ user }) {
  if (!user) {
    return null; // or render a loading indicator or placeholder
  }
  return (
    <div className="flex justify-center">
    <div className="w-64">  
      <div className="max-w-sm rounded overflow-hidden shadow-lg border border-black m-2">
        <Link to={`/user/${user.login.uuid}`} className="block">
          <div className="px-6 py-4">
          
            <img className="w w-10" src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
            <div className="font-bold text-xl mb-2">{user.name.first} {user.name.last}</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
  
  
  
  
 
  );
}

export default UserCard;
