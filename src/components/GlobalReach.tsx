import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";

const countries = [
  { name: "UAE", flag: "🇦🇪", lat: 24, lng: 54 },
  { name: "Saudi Arabia", flag: "🇸🇦", lat: 25, lng: 45 },
  { name: "Qatar", flag: "🇶🇦", lat: 25, lng: 51 },
  { name: "Kuwait", flag: "🇰🇼", lat: 29, lng: 48 },
  { name: "Oman", flag: "🇴🇲", lat: 21, lng: 57 },
  { name: "Bahrain", flag: "🇧🇭", lat: 26, lng: 50 },
  { name: "UK", flag: "🇬🇧", lat: 52, lng: -1 },
  { name: "Germany", flag: "🇩🇪", lat: 51, lng: 10 },
  { name: "Netherlands", flag: "🇳🇱", lat: 52, lng: 5 },
  { name: "France", flag: "🇫🇷", lat: 47, lng: 2 },
  { name: "USA", flag: "🇺🇸", lat: 39, lng: -98 },
  { name: "Canada", flag: "🇨🇦", lat: 56, lng: -106 },
  { name: "Japan", flag: "🇯🇵", lat: 36, lng: 138 },
  { name: "Singapore", flag: "🇸🇬", lat: 1, lng: 104 },
  { name: "Malaysia", flag: "🇲🇾", lat: 4, lng: 102 },
  { name: "Russia", flag: "🇷🇺", lat: 62, lng: 105 },
];

const CobeGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;
    let animationId: number;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.15, 0.4, 0.2],
      markerColor: [1, 0.84, 0],
      glowColor: [0.1, 0.3, 0.15],
      markers: countries.map((c) => ({
        location: [c.lat, c.lng] as [number, number],
        size: 0.06,
      })),
    });

    function animate() {
      phiRef.current += 0.005;
      globe.update({ phi: phiRef.current, theta: 0.2 });
      animationId = requestAnimationFrame(animate);
    }
    animate();

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        maxWidth: 420,
        aspectRatio: "1",
        opacity: 0,
        transition: "opacity 1s ease",
        cursor: "grab",
      }}
    />
  );
};

const GlobalReach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-foreground relative overflow-hidden" ref={ref}>
      {/* Starfield background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-body font-semibold text-sm tracking-[0.15em] uppercase">
            Global Presence
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            We Export Worldwide
          </h2>
          <p className="text-primary-foreground/60 font-body mt-4 max-w-2xl mx-auto">
            Reva International LLP proudly serves clients across 25+ countries, delivering premium Indian agro products to every corner of the globe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Earth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotateY: -30 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md flex items-center justify-center"
          >
            <CobeGlobe />
          </motion.div>

          {/* Country flags grid */}
          <div className="grid grid-cols-4 gap-3 md:gap-4">
            {countries.map((country, i) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06, type: "spring", stiffness: 150 }}
                whileHover={{ scale: 1.15, y: -6, rotateY: 10, z: 30 }}
                className="flex flex-col items-center gap-1.5 cursor-default"
                style={{ perspective: "600px" }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 flex items-center justify-center text-3xl shadow-lg hover:shadow-accent/20 hover:border-accent/30 transition-all duration-300">
                  {country.flag}
                </div>
                <span className="text-[10px] font-body text-primary-foreground/60 font-medium text-center leading-tight">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-14 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { val: "25+", label: "Countries" },
            { val: "500+", label: "Clients" },
            { val: "6", label: "Continents" },
            { val: "10K+", label: "Shipments" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-accent">{s.val}</div>
              <div className="text-primary-foreground/50 font-body text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;
