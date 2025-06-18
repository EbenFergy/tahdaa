import React from 'react';
import { Button, Card, CardContent } from '@mui/material';

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Categories</h2>
          <p className="text-xl text-gray-600">Choose from a wide range of professional services</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            { name: 'Plumbing', icon: '🔧' },
            { name: 'Electrical', icon: '⚡' },
            { name: 'Carpentry', icon: '🔨' },
            { name: 'Painting', icon: '🎨' },
            { name: 'Cleaning', icon: '🧽' },
            { name: 'Gardening', icon: '🌱' },
            { name: 'Roofing', icon: '🏠' },
            { name: 'HVAC', icon: '❄️' },
            { name: 'Flooring', icon: '📐' },
            { name: 'Appliance Repair', icon: '🔧' },
            { name: 'Handyman', icon: '🛠️' },
            { name: 'Moving', icon: '📦' },
          ].map((category, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button>View All Categories</Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
