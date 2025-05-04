import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowBigRight, LinkIcon } from 'lucide-react';
import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center h-screen mb-4 mt-8 p-10">
        <h1 className="text-3xl font-semibold mt-4">This My Contact</h1>
        {/* <div className="flex flex-col items-center h-screen mt-10"> */}
          {/* <h1 className="text-3xl font-semibold">Contact Me</h1> */}
          <div className="flex gap-3 mt-4">
            {/* <div className="bg-gray-600 p-2">
              <a href="https://www.linkedin.com/in/luthfi-kurnia-hadi-901b78240/" target="_blank" rel="noopener noreferrer">
                <LinkIcon fontSize="large" className="text-blue-600" />
              </a>
              <Card className="p-2">
              <img src="/Luthfi.png" alt="Foto" className="object-cover" />
              <p className='text-center'>Test</p>
              </Card>
            </div> */}
          </div>
        {/* </div> */}
      </div>
  )
}

export default Contact;