import React from 'react';
import { Navigate } from 'react-router-dom';
import { UseAuth } from '../context/AuthContext';

const UserAuthCheck = ({ children }) => {

  const { cUser } = UseAuth();
  console.log(cUser);
  // get authintication
  return cUser ? children : < Navigate to='/login' />
};

export default UserAuthCheck;