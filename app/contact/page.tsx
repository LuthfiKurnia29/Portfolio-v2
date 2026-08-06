"use client";

import { useState } from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  Send,
  MapPin,
  Clock,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { SocialLinks } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={18} />,
  github: <Github size={18} />,
  instagram: <Instagram size={18} />,
  mail: <Mail size={18} />,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – integrate with Resend/Nodemailer later
    setSent(true);
  };

  return (
    <main className="pt-20">
      <section id="contact" className="section-container">
        <SectionTitle
          label="kontak"
          title="Mari Berkolaborasi"
          subtitle="Punya proyek atau ingin berdiskusi? Saya selalu senang mendengar ide-ide baru."
          centered
        />

        <div className="grid md:grid-cols-5 gap-10 max-w-4xl mx-auto">
          {/* Left: Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Status card */}
            <div className="card-glass p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-lightSky animate-pulse" />
                <span className="text-lightSky text-xs font-mono">Tersedia</span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">
                Open to Work
              </h3>
              <p className="text-subtleText text-xs leading-relaxed">
                Saat ini saya terbuka untuk peluang freelance maupun full-time.
              </p>
            </div>

            {/* Contact info */}
            <div className="card-glass p-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-lightSky/10 flex items-center justify-center text-lightSky flex-shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-xs text-mutedText font-mono">// email</p>
                  <p className="text-white text-xs">lutpihadi29@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-lightSky/10 flex items-center justify-center text-lightSky flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <p className="text-xs text-mutedText font-mono">// lokasi</p>
                  <p className="text-white text-xs">Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-lightSky/10 flex items-center justify-center text-lightSky flex-shrink-0">
                  <Clock size={14} />
                </div>
                <div>
                  <p className="text-xs text-mutedText font-mono">// waktu respon</p>
                  <p className="text-white text-xs">Dalam 24 jam</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="card-glass p-5">
              <p className="text-mutedText font-mono text-xs mb-4">// media sosial</p>
              <div className="flex flex-col gap-3">
                {SocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`contact-social-${link.icon}`}
                    className="flex items-center gap-3 text-subtleText hover:text-lightSky transition-colors duration-300 group"
                  >
                    <span className="w-8 h-8 rounded-lg border border-cardBorder flex items-center justify-center group-hover:border-lightSky/40 group-hover:bg-lightSky/5 transition-all duration-300">
                      {iconMap[link.icon]}
                    </span>
                    <span className="text-sm">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <div className="card-glass p-6">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-lightSky/10 border border-lightSky/30 flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-lightSky" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-subtleText text-sm">
                    Terima kasih telah menghubungi saya. Saya akan membalas
                    secepatnya.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-mutedText font-mono text-xs mb-2">
                    // kirim pesan
                  </p>

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs text-subtleText mb-1.5"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Nama kamu"
                      className="w-full bg-bodyColor border border-cardBorder rounded-xl px-4 py-3 text-sm text-white placeholder:text-mutedText focus:outline-none focus:border-lightSky/50 focus:ring-1 focus:ring-lightSky/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs text-subtleText mb-1.5"
                    >
                      Alamat Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@kamu.com"
                      className="w-full bg-bodyColor border border-cardBorder rounded-xl px-4 py-3 text-sm text-white placeholder:text-mutedText focus:outline-none focus:border-lightSky/50 focus:ring-1 focus:ring-lightSky/20 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs text-subtleText mb-1.5"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ceritakan tentang proyek kamu..."
                      className="w-full bg-bodyColor border border-cardBorder rounded-xl px-4 py-3 text-sm text-white placeholder:text-mutedText focus:outline-none focus:border-lightSky/50 focus:ring-1 focus:ring-lightSky/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    <Send size={16} />
                    Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}