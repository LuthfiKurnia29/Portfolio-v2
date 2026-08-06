import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { SkillsData, StatsData, SocialLinks } from "@/constants";

export default function Home() {
  return (
    <main className="pt-20">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden">
        {/* Glow blobs */}
        <div
          className="glow-blob w-96 h-96 bg-lightSky"
          style={{ top: "-5rem", left: "-8rem" }}
        />
        <div
          className="glow-blob w-72 h-72 bg-blue-500"
          style={{ top: "10rem", right: "-4rem" }}
        />

        <div className="section-container flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lightSky/20 bg-lightSky/5 text-lightSky text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-lightSky animate-pulse" />
              Tersedia untuk proyek baru
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
              Hai, Saya{" "}
              <span className="gradient-text block mt-1">
                Luthfi Kurnia Hadi
              </span>
            </h1>

            <p className="text-subtleText text-base md:text-lg mb-4 font-mono">
              // Web Developer · .NET Specialist
            </p>

            <p className="text-subtleText leading-relaxed max-w-lg mb-8 text-sm md:text-base">
              Seorang Web Developer dengan pengalaman lebih dari 2 tahun
              membangun aplikasi web menggunakan <strong className="text-white">C# dan .NET</strong>. Fokus pada kualitas kode,
              performa sistem, dan arsitektur yang maintainable.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="/services" id="hero-view-work" className="btn-primary">
                Lihat Pekerjaan Saya
                <ArrowRight size={16} />
              </a>
              <a
                href="/resume"
                id="hero-download-cv"
                className="btn-outline"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8 justify-center md:justify-start">
              <span className="text-xs text-mutedText font-mono">// temukan saya di</span>
              <a
                href="https://www.linkedin.com/in/luthfi-kurnia-hadi-901b78240/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg border border-cardBorder flex items-center justify-center text-subtleText hover:text-lightSky hover:border-lightSky transition-all duration-300"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://github.com/LuthfiKurnia29"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg border border-cardBorder flex items-center justify-center text-subtleText hover:text-lightSky hover:border-lightSky transition-all duration-300"
              >
                <Github size={14} />
              </a>
              <a
                href="https://www.instagram.com/luth29._/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg border border-cardBorder flex items-center justify-center text-subtleText hover:text-lightSky hover:border-lightSky transition-all duration-300"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex-shrink-0 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lightSky/30 to-transparent blur-2xl scale-110" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-lightSky/30 overflow-hidden shadow-2xl">
                <Image
                  src="/Luthfi.png"
                  alt="Foto Luthfi Kurnia Hadi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-3 -right-3 bg-cardBg border border-cardBorder rounded-xl px-3 py-2 shadow-xl">
                <p className="text-xs text-mutedText font-mono">exp.</p>
                <p className="text-sm font-bold text-lightSky">2+ Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────────────── */}
      <section id="stats" className="border-y border-cardBorder bg-cardBg/40">
        <div className="section-container py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {StatsData.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-mutedText mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle
              label="tentang saya"
              title="Siapa Saya"
              subtitle="Seorang developer yang passionate membangun solusi digital yang bersih dan efisien."
            />
            <div className="space-y-4 text-subtleText text-sm leading-relaxed">
              <p>
                Saya adalah seorang <strong className="text-white">Web Developer</strong> dengan
                pengalaman lebih dari 2 tahun dalam mengembangkan aplikasi web
                menggunakan <strong className="text-white">C# dan .NET</strong>. Terbiasa
                membangun aplikasi yang scalable, efisien, dan maintainable.
              </p>
              <p>
                Saya berfokus pada kualitas kode, performa sistem, serta
                integrasi sistem. Selama perjalanan karier, saya telah terlibat
                dalam berbagai proyek — dari backend API hingga frontend modern —
                baik secara individu maupun kolaborasi tim.
              </p>
              <p>
                Dengan mindset yang adaptif dan komitmen tinggi, saya selalu
                berupaya memberikan solusi terbaik untuk setiap tantangan teknis
                yang dihadapi.
              </p>
            </div>
          </div>

          {/* Info card */}
          <div className="card-glass p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { label: "Nama", value: "Luthfi Kurnia Hadi" },
                { label: "Status", value: "Open to Work" },
                { label: "Lokasi", value: "Indonesia" },
                { label: "Spesialisasi", value: ".NET Developer" },
                { label: "Pengalaman", value: "2+ Tahun" },
                { label: "Bahasa", value: "Indonesia, Inggris" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-mutedText font-mono mb-0.5">
                    // {item.label}
                  </p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-cardBorder">
              <a
                href="/resume"
                id="about-cv-link"
                className="btn-primary w-full justify-center text-xs"
              >
                <Download size={14} />
                Lihat Resume Lengkap
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────────────────── */}
      <section id="skills" className="border-t border-cardBorder bg-cardBg/20">
        <div className="section-container">
          <SectionTitle
            label="keahlian"
            title="Teknologi & Tools"
            subtitle="Teknologi yang saya gunakan sehari-hari dalam membangun produk digital."
            centered
          />

          <div className="flex flex-wrap gap-3 justify-center">
            {SkillsData.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
