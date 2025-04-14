'use client';

import React from 'react';

import {SidebarProvider} from '@/components/ui/sidebar';
import {BottomNavigationBar} from '@/components/bottom-navigation-bar';
import {AnalysisResultsTab} from '@/components/analysis-results-tab';
import {PropertyManagementTab} from '@/components/property-management-tab';
import {ReportGenerationTab} from '@/components/report-generation-tab';

const AppContent = () => {
  const [activeTab, setActiveTab] = React.useState('analysis');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'analysis':
        return <AnalysisResultsTab />;
      case 'properties':
        return <PropertyManagementTab />;
      case 'reports':
        return <ReportGenerationTab />;
      default:
        return <AnalysisResultsTab />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-4">
        {renderTabContent()}
      </div>

      <BottomNavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default function Home() {
  return (
    <SidebarProvider>
      <AppContent />
    </SidebarProvider>
  );
}

