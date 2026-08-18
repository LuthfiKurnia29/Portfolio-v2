import { Download, Briefcase, GraduationCap } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { ExperienceData, EducationData } from "@/constants";

export default function Resume() {
  return (
    <main className="pt-20">
      <section id="resume" className="section-container">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionTitle
            label="resume"
            title="Pengalaman & Pendidikan"
            subtitle="Perjalanan profesional dan latar belakang pendidikan saya."
          />
          <a
            href="/cv-luthfi-kurnia-hadi.pdf"
            id="resume-download-cv"
            download
            className="btn-primary self-start md:self-auto flex-shrink-0"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* ─── WORK EXPERIENCE ─── */}
        <div className="mb-16">
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-cardBorder">
            <div className="w-8 h-8 rounded-lg bg-lightSky/10 border border-lightSky/20 flex items-center justify-center text-lightSky flex-shrink-0">
              <Briefcase size={16} />
            </div>
            <h2 className="text-lg font-semibold text-white tracking-wide uppercase">
              Pengalaman Kerja
            </h2>
          </div>

          {/* Experience rows */}
          <div className="space-y-10">
            {ExperienceData.map((exp, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8"
              >
                {/* Left: date + location */}
                <div className="md:pt-1">
                  <p className="text-subtleText justify-start text-sm leading-snug">{exp.period}</p>
                  {exp.duration && (
                    <p className="text-subtleText text-sm">({exp.duration})</p>
                  )}
                  {exp.location && (
                    <p className="text-mutedText text-xs mt-2 leading-snug">
                      {exp.location}
                    </p>
                  )}
                </div>

                {/* Right: content */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-0.5">{exp.role}</h3>
                  <p className="text-lightSky font-semibold text-sm mb-3 uppercase tracking-wide">
                    {exp.company}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-subtleText text-sm leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-lightSky/60 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <SkillBadge key={t} name={t} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── EDUCATION ─── */}
        <div>
          {/* Section heading */}
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-cardBorder">
            <div className="w-8 h-8 rounded-lg bg-lightSky/10 border border-lightSky/20 flex items-center justify-center text-lightSky flex-shrink-0">
              <GraduationCap size={16} />
            </div>
            <h2 className="text-lg font-semibold text-white tracking-wide uppercase">
              Pendidikan
            </h2>
          </div>

          {/* Education rows */}
          <div className="space-y-8">
            {EducationData.map((edu, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[220px_1fr] gap-4 md:gap-8"
              >
                {/* Left: year */}
                <div className="md:pt-1">
                  <p className="text-mutedText text-sm font-mono">{edu.period}</p>
                </div>

                {/* Right: content */}
                <div>
                  <h3 className="text-white font-bold text-lg mb-0.5">
                    {edu.institution}
                  </h3>
                  <p className="text-lightSky font-semibold text-sm">
                    {edu.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Skill bars (compact) ─── */}
        <div className="mt-16 card-glass p-6 max-w-xl">
          <p className="text-mutedText font-mono text-xs mb-5">Keahlian utama</p>
          <div className="space-y-4">
            {[
              { label: "Backend Development (.NET / C#)", level: 90 },
              { label: "Database & SQL", level: 85 },
              { label: "Frontend (React / Next.js)", level: 70 },
              { label: "System Architecture", level: 75 },
            ].map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs text-subtleText">{skill.label}</span>
                  <span className="text-xs font-mono text-lightSky">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 bg-cardBorder rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-lightSky to-hoverColor rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}