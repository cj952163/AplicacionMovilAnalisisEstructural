'use client';

import React, {useState} from 'react';

import {generateAnalysisReport} from '@/services/structxplorer';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';

export const ReportGenerationTab: React.FC = () => {
  const [reportData, setReportData] = useState<string>('');

  const handleGenerateReport = async () => {
    const report = await generateAnalysisReport();
    setReportData(report);
  };

  const handleExportDXF = async () => {
    alert('Export to DXF functionality to be implemented via AI model.');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Generation</CardTitle>
        <CardDescription>Generate and export analysis reports</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button onClick={handleGenerateReport}>Generate Report</Button>
        {reportData && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Analysis Report</label>
            <Textarea value={reportData} readOnly />
          </div>
        )}
        <Button onClick={handleExportDXF}>Export to DXF</Button>
      </CardContent>
    </Card>
  );
};
