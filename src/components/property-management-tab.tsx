'use client';

import React, {useState, useEffect} from 'react';

import {getStructureProperties, updateStructureProperties} from '@/services/structxplorer';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export const PropertyManagementTab: React.FC = () => {
  const [material, setMaterial] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [loads, setLoads] = useState<string>('');

  useEffect(() => {
    const fetchStructureProperties = async () => {
      const properties = await getStructureProperties();
      setMaterial(properties.material);
      setSection(properties.section);
      setLoads(properties.loads);
    };

    fetchStructureProperties();
  }, []);

  const handleUpdateProperties = async () => {
    await updateStructureProperties({material, section, loads});
    alert('Properties updated!');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Structure Properties</CardTitle>
        <CardDescription>View and modify structure properties</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Material</label>
          <Input type="text" value={material} onChange={(e) => setMaterial(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Section</label>
          <Input type="text" value={section} onChange={(e) => setSection(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Loads</label>
          <Input type="text" value={loads} onChange={(e) => setLoads(e.target.value)} />
        </div>
        <Button onClick={handleUpdateProperties}>Update Properties</Button>
      </CardContent>
    </Card>
  );
};
