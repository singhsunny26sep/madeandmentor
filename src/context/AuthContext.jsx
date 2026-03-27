import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiGet } from '../utils/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [walletBalance, setWalletBalance] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user');
    const storedBalance = localStorage.getItem('walletBalance');
    const storedToken = localStorage.getItem('authToken');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    if (storedBalance) {
      setWalletBalance(parseFloat(storedBalance));
    }
    
    // Check for existing auth token
    if (storedToken) {
      console.log('✅ Found existing auth token on load');
    }
  }, []);

  // Refresh wallet balance from API when page loads and user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshWalletBalance();
    }
  }, [isAuthenticated]);

  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Check if this is first login (no existing wallet balance)
    const existingBalance = localStorage.getItem('walletBalance');
    if (!existingBalance) {
      // Give 10 minutes free (assuming ₹12/min = ₹120)
      const freeMinutes = 10;
      const freeCredits = freeMinutes * 12; // ₹12 per minute
      setWalletBalance(freeCredits);
      localStorage.setItem('walletBalance', freeCredits.toString());
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  };

  const addToWallet = (amount) => {
    const newBalance = walletBalance + amount;
    setWalletBalance(newBalance);
    localStorage.setItem('walletBalance', newBalance.toString());
  };

  const refreshWalletBalance = async () => {
    try {
      const result = await apiGet('/wallet');
      if (result.success && result.data) {
        const inrBalance = result.data.balances?.INR || 0;
        setWalletBalance(inrBalance);
        localStorage.setItem('walletBalance', inrBalance.toString());
      }
    } catch (error) {
      console.error('Error refreshing wallet balance:', error);
    }
  };

  const deductFromWallet = (amount) => {
    if (walletBalance >= amount) {
      const newBalance = walletBalance - amount;
      setWalletBalance(newBalance);
      localStorage.setItem('walletBalance', newBalance.toString());
      return true;
    }
    return false;
  };

  const value = {
    user,
    walletBalance,
    isAuthenticated,
    login,
    logout,
    addToWallet,
    deductFromWallet,
    refreshWalletBalance
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
