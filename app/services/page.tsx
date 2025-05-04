import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowBigRight, LinkIcon } from 'lucide-react';
import React from 'react'

const Services = () => {
  return (
      <div className="flex flex-col items-center h-screen mt-8">
          <h1 className="text-3xl font-semibold mt-4">This My Gallery Portofolio</h1>
          <p>Im open to work more apps including Web, Mobile, ERP, etc. Here is some my portofolio using many technologies</p>
          <div className='flex gap-4 justify-center mt-4 p-10'>
            <div className='col-4'>
              <Card className="w-full h-64 mt-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <a href='/services/web' rel='noopener noreferrer' className="flex flex-col items-center justify-center h-full">
                    <div className="p-4 flex flex-col items-center justify-center h-full">
                      <h2 className="text-xl font-semibold">Website</h2>
                      <p className="text-gray-600">Click the button below to see my portofolio</p>
                    </div>
                  </a>
                </Card>
            </div>
            <div className='col-4'>
              <Card className="w-full h-64 mt-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <a href='#' rel='noopener noreferrer' className="flex flex-col items-center justify-center h-full">
                    <div className="p-4 flex flex-col items-center justify-center h-full">
                      <h2 className="text-xl font-semibold">ERP</h2>
                      <p className="text-gray-600">Click the button below to see my portofolio</p>
                    </div>
                  </a>
                </Card>
            </div>
            <div className='col-4'>
              <Card className="w-full h-64 mt-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <a href='#' rel='noopener noreferrer' className="flex flex-col items-center justify-center h-full">
                    <div className="p-4 flex flex-col items-center justify-center h-full">
                      <h2 className="text-xl font-semibold">Design</h2>
                      <p className="text-gray-600">Click the button below to see my portofolio</p>
                    </div>
                  </a>
                </Card>
            </div>
            <div className='col-4'>
              <Card className="w-full h-64 mt-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <a href='#' rel='noopener noreferrer' className="flex flex-col items-center justify-center h-full">
                    <div className="p-4 flex flex-col items-center justify-center h-full">
                      <h2 className="text-xl font-semibold">Mobile</h2>
                      <p className="text-gray-600">Click the button below to see my portofolio</p>
                    </div>
                  </a>
                </Card>
            </div>
          </div>
      </div>
  )
}

export default Services;