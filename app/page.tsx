import { Button } from "@/components/ui/button";
import { ArrowBigRight, LinkIcon } from "lucide-react";
export default function Home() {
  return (
      <div className="flex flex-col items-center h-screen mb-4 mt-8 p-10">
        <img src="/Luthfi.png" alt="Foto" className="rounded-full w-32 h-32 object-cover" />
        <h1 className="text-3xl font-semibold mt-4">👋Hi All, I am Luthfi Kurnia Hadi👋</h1>
        <p className="text-lg text-center mt-4">Passionate in building apps using .NET Core & Framework</p>
        <div className="flex flex-col items-center h-screen mt-10">
          <h1 className="text-3xl font-semibold">Contact Me</h1>
          <div className="flex gap-3 mt-4">
            <div className="rounded-full bg-gray-600 p-2">
              <a href="https://www.linkedin.com/in/luthfi-kurnia-hadi-901b78240/" target="_blank" rel="noopener noreferrer">
                <LinkIcon fontSize="large" className="text-blue-600" />
              </a>
            </div>
            <div className="rounded-full bg-gray-600 p-2">
              <a href="https://www.instagram.com/luth29._/" target="_blank" rel="noopener noreferrer">
                <LinkIcon fontSize="large" className="text-blue-600" />
              </a>
            </div>
            <div className="rounded-full bg-gray-600 p-2">
              <a href="https://www.linkedin.com/in/luthfi-kurnia-hadi-901b78240/" target="_blank" rel="noopener noreferrer">
                <LinkIcon fontSize="large" className="text-blue-600" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center h-screen mt-10">
          <h1 className="text-3xl font-semibold">About Me</h1>
          <p className="text-lg text-center mt-4 px-20">
            I`m a software engineer who is passionate about making open-source more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include .NET Core, .NET Framework, and Azure.
          </p>
        </div>
        <div className="flex flex-col items-center h-screen mt-10">
          <Button className="bg-blue-800 text-white rounded-full px-4 py-2">
            Next Page
            <ArrowBigRight className="mr-2" />
          </Button>
        </div>
      </div>
  );
}
