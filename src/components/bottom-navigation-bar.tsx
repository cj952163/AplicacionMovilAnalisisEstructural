'use client';

import React from 'react';
import {Home, ListChecks, FileText} from 'lucide-react';

interface BottomNavigationBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({activeTab, setActiveTab}) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-secondary border-t border-border z-50">
      <div className="container mx-auto">
        <div className="flex justify-around items-center py-2">
          <button
            className={`flex flex-col items-center ${activeTab === 'analysis' ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('analysis')}
          >
            <Home className="h-5 w-5 mb-1" />
            <span>Analysis</span>
          </button>
          <button
            className={`flex flex-col items-center ${activeTab === 'properties' ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('properties')}
          >
            <ListChecks className="h-5 w-5 mb-1" />
            <span>Properties</span>
          </button>
          <button
            className={`flex flex-col items-center ${activeTab === 'reports' ? 'text-primary' : 'text-muted-foreground'}`}
            onClick={() => setActiveTab('reports')}
          >
            <FileText className="h-5 w-5 mb-1" />
            <span>Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};
