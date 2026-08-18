import { ArrowRight, Globe, Server, Database, Smartphone } from "lucide-react";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { ServicesData } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  "01": <Globe size={24} />,
  "02": <Server size={24} />,
  "03": <Database size={24} />,
  "04": <Smartphone size={24} />,
};

export default function Services() {
  return (
    <main className="pt-20">
      <section id="services" className="section-container">
        <SectionTitle
          label="layanan"
          title="Apa yang Saya Tawarkan"
          centered
        />

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {ServicesData.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              id={`service-card-${service.id}`}
              className="card-glass p-6 group block"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-lightSky/10 border border-lightSky/20 flex items-center justify-center text-lightSky group-hover:bg-lightSky/20 group-hover:border-lightSky/40 transition-all duration-300">
                  {iconMap[service.id]}
                </div>
                {/* Number */}
                <span className="font-mono text-4xl font-bold text-white/5 group-hover:text-lightSky/10 transition-colors duration-300 select-none">
                  {service.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-lightSky transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-subtleText text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-cardBorder text-mutedText text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link arrow */}
              <div className="flex items-center gap-1 text-xs text-lightSky font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Lihat detail
                <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="card-glass inline-block p-8 max-w-xl mx-auto">
            <p className="text-mutedText font-mono text-xs mb-3">Butuh sesuatu yang lain?</p>
            <h3 className="text-xl font-bold text-white mb-2">
              Ada proyek di benak Anda?
            </h3>
            <p className="text-subtleText text-sm mb-6">
              Saya selalu terbuka untuk diskusi tentang proyek baru dan
              kesempatan kolaborasi.
            </p>
            <a href="/contact" id="services-contact-cta" className="btn-primary">
              Hubungi Saya
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}