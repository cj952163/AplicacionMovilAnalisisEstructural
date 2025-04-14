'use client';

import React, {useEffect, useState} from 'react';

import {getAnalysisResults} from '@/services/structxplorer';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

export const AnalysisResultsTab: React.FC = () => {
  const [visualization2D, setVisualization2D] = useState<string>('');
  const [visualization3D, setVisualization3D] = useState<string>('');
  const [deformations, setDeformations] = useState<string>('');
  const [stressDistributions, setStressDistributions] = useState<string>('');

  useEffect(() => {
    const fetchAnalysisResults = async () => {
      const results = await getAnalysisResults();
      setVisualization2D(results.visualization2D);
      setVisualization3D(results.visualization3D);
      setDeformations(results.deformations);
      setStressDistributions(results.stressDistributions);
    };

    fetchAnalysisResults();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>2D Visualization</CardTitle>
          <CardDescription>Displays the 2D structure</CardDescription>
        </CardHeader>
        <CardContent>{visualization2D || 'Loading...'}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>3D Visualization</CardTitle>
          <CardDescription>Displays the 3D structure</CardDescription>
        </CardHeader>
        <CardContent>{visualization3D || 'Loading...'}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Deformations</CardTitle>
          <CardDescription>Displays the deformation data</CardDescription>
        </CardHeader>
        <CardContent>{deformations || 'Loading...'}</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stress Distributions</CardTitle>
          <CardDescription>Displays the stress distribution data</CardDescription>
        </CardHeader>
        <CardContent>{stressDistributions || 'Loading...'}</CardContent>
      </Card>
    </div>
  );
};
