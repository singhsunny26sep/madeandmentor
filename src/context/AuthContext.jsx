import React, { createContext, useContext, useState, useEffect } from 'react';

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
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    if (storedBalance) {
      setWalletBalance(parseFloat(storedBalance));
    }
  }, []);

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
  };

  const addToWallet = (amount) => {
    const newBalance = walletBalance + amount;
    setWalletBalance(newBalance);
    localStorage.setItem('walletBalance', newBalance.toString());
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
    deductFromWallet
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
