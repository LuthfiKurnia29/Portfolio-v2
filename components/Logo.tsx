import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" id="logo-home" aria-label="Kembali ke beranda">
      <div className="flex items-center gap-2 group">
        {/* Monogram box */}
        <div className="w-9 h-9 rounded-lg bg-lightSky/10 border border-lightSky/30 flex items-center justify-center group-hover:bg-lightSky/20 group-hover:border-lightSky/60 transition-all duration-300">
          <span className="font-bold text-sm text-lightSky font-mono tracking-tighter">
            LK
          </span>
        </div>
        {/* Name */}
        <div className="flex flex-col leading-none">
          <span className="text-white font-semibold text-sm group-hover:text-lightSky transition-colors duration-300">
            Luthfi
          </span>
          <span className="text-mutedText text-xs font-mono">Kurnia</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;