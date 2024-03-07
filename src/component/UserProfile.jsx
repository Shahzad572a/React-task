import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock } from 'react-icons/fa';
 
function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null); 
  useEffect(() => { 
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api`);
        setUser(response.data.results[0]); 
      } catch (error) {
        console.error('Error fetching user:', error);
      }}; 
    fetchUser();
  }, [userId]);
  return (
    <div className="flex flex-col items-center justify-center">
      {user && (
        <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md m-4 b border-8 border-black px-20">
          <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} className="w-24 h-24 mx-auto rounded-full border-4 border-black my-6" />
          <div className="text-center">
            <p className="text-gray-500">Hi, my name is</p>
            <p className="text-lg font-bold">{`${user.name.first} ${user.name.last}`}</p>
              <div className="flex items-center justify-center space-x-8 my-2">
              <FaUser className="h-6 w-6 text-green-500" />
              <FaEnvelope className="h-6 w-6 text-green-500" />
              <FaPhone className="h-6 w-6 text-green-500" />
              <FaMapMarkerAlt className="h-6 w-6 text-green-500" />
              <FaLock className="h-6 w-6 text-green-500" />
            </div>
        
            <p>{`${user.location.city}, ${user.location.country}`}</p>
            <p>{user.login.username}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
