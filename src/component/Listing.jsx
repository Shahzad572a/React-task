import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import Filters from './Filters';
import UserCard from './UserCard'; 

import SearchBar from './SearchBar';

function Listing() {
    debugger
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [genderFilter, setGenderFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [currentPage, genderFilter]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://randomuser.me/api/?page=${currentPage}&results=4&gender=${genderFilter}`);
      setUsers(response.data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenderChange = (gender) => {
    setGenderFilter(gender);
    setCurrentPage(1); // Reset pagination when changing filter
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
     
  };

  useEffect(() => {
    filterUsers();
  }, [users, searchQuery]);

  const filterUsers = () => {
    if (!searchQuery) {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        (user.name.first + ' ' + user.name.last).toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };
  

  return (
    <div>
    <div className="flex justify-center space-x-4 mb-4">
      <Filters gender={genderFilter} onChange={handleGenderChange} /> 
      <SearchBar onSearch={handleSearch} />
    </div>
    {filteredUsers.map(user => (
     <UserCard key={user.login.uuid} user={user} />

    ))}
    <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
  </div>
  );
}

export default Listing;
