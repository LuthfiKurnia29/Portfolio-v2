import { Button } from "@/components/ui/button";
import { ArrowBigRight, LinkIcon } from "lucide-react";
export default function Home() {
  return (
      <div className="flex flex-col items-center h-screen mb-4 mt-8 p-10">
        <img src="/Luthfi.png" alt="Foto" className="rounded-full w-32 h-32 object-cover" />
        <h1 className="text-3xl font-semibold mt-4">👋Hi All, I am Luthfi Kurnia Hadi👋</h1>
        {/* <p className="text-lg text-center mt-4">Passionate in building apps using .NET Core & Framework</p> */}
        {/* <div className="flex flex-col items-center h-screen mt-10">
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
        </div> */}
        <div className="flex flex-col items-center h-screen mt-4">
          {/* <h1 className="text-3xl font-semibold">Tentang Saya</h1> */}
          <p className="text-lg text-center mt-4 px-20">
            Saya adalah seorang Web Developer dengan pengalaman lebih dari 2 tahun dalam mengembangkan aplikasi web menggunakan C# dan .NET. Terbiasa membangun aplikasi yang scalable, efisien, dan maintainable, saya selalu berfokus pada kualitas kode serta performa sistem. Saya memiliki ketertarikan besar pada pengembangan backend, arsitektur aplikasi, serta integrasi sistem. Selama perjalanan karier saya, saya telah terlibat dalam berbagai proyek, baik secara individu maupun kolaborasi tim, sehingga terbiasa bekerja dengan komunikasi yang baik, manajemen waktu yang efektif, dan pendekatan problem-solving yang terstruktur. Saya senang mempelajari teknologi baru, mengikuti best practice di dunia web development, dan terus meningkatkan skill untuk memberikan solusi yang optimal. Dengan mindset yang adaptif dan tanggung jawab tinggi, saya siap berkontribusi secara maksimal dalam setiap proyek yang saya kerjakan.
          </p>
        </div>
        <div className="flex flex-col items-center h-screen mt-4">
          <h1 className="text-3xl font-semibold">Skill dan Pengalaman</h1>
          <ol>
            <li>Mengembangkan aplikasi web menggunakan C# dan .NET (ASP.NET MVC / ASP.NET Core)</li>
            <li>Membangun RESTful API untuk kebutuhan frontend dan integrasi sistem</li>
            <li>Mengelola dan merancang database relasional menggunakan SQL Server</li>
            <li>Menerapkan prinsip clean code, SOLID, dan best practice dalam pengembangan aplikasi</li>
            <li>Melakukan debugging, testing, dan maintenance pada aplikasi yang sudah berjalan</li>
          </ol>
        </div>
        {/* <div className="flex flex-col items-center h-screen mt-10">
          <Button className="bg-blue-800 text-white rounded-full px-4 py-2">
            Next Page
            <ArrowBigRight className="mr-2" />
          </Button>
        </div> */}

      </div>
  );
}
