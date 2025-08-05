import React from 'react';
import { Header } from './Header';
import { Dashboard } from './Dashboard';

export const MainContent = () => {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <Header 
        
      />
      <Dashboard />
    </div>
  );
};