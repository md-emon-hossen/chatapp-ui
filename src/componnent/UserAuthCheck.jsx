import React from 'react';
import { Navigate } from 'react-router-dom';

const UserAuthCheck = ({ children }) => {

  // get authintication
  const cUser = true;

  return cUser ? children : < Navigate to='/login' />
};

export default UserAuthCheck;