import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Portofolio — Luthfi Kurnia Hadi",
  description:
    "Web Developer dengan spesialisasi C# dan .NET. Membangun aplikasi web yang scalable, efisien, dan maintainable.",
  keywords: ["Web Developer", "C#", ".NET", "ASP.NET", "Next.js", "Portfolio"],
  authors: [{ name: "Luthfi Kurnia Hadi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        {children}
        {/* Footer */}
        <footer className="border-t border-cardBorder py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-mutedText text-xs font-mono">
              © {new Date().getFullYear()} Luthfi Kurnia Hadi
            </p>
            <p className="text-mutedText text-xs font-mono">
              built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
