import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// LOGOS
import logo from './assets/logo.png'
import logoRemoved from './assets/logo-removebg.png'
// STUDIO
import studio1 from './assets/studio1.png'
import studio2 from './assets/studio2.png'
import studio3 from './assets/studio3.png'
import studio4 from './assets/studio4.png'
import studio5 from './assets/studio5.png'
import studio6 from './assets/studio6.png'
// ARTISTS & TATTOOS
import zac from './assets/zac.png'
import ztattoo1 from './assets/ztattoo1.png'
import ztattoo2 from './assets/ztattoo2.png'
import ztattoo3 from './assets/ztattoo3.png'
import giorgos from './assets/giorgos.png'
import gtattoo1 from './assets/gtattoo1.png'
import gtattoo2 from './assets/gtattoo2.png'
import gtattoo3 from './assets/gtattoo3.png'
import anna from './assets/anna.png'
import ap1 from './assets/ap1.png'
import ap2 from './assets/ap2.png'
import ap3 from './assets/annap.png'
import t1 from './assets/t1.png'
import t2 from './assets/t2.png'
import t3 from './assets/t3.png'
import t4 from './assets/t4.png'
import t5 from './assets/t5.png'
import t6 from './assets/t6.png'

// PIERCINGS
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'
import p4 from './assets/p4.png'
function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    t1,
    t2,
    t3,
    t4,
    t5,
    t6
  ];

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const trackInteraction = (action_name) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18068501641',
        'event_category': 'Engagement',
        'event_label': action_name
      });
      // Also send a general event for Analytics if connected
      window.gtag('event', 'click_' + action_name);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-accent-silver selection:text-black">
      <Helmet>
        <title>Maze Tattoo Studio | Premium Tattoos in Heraklion, Crete</title>
        <meta name="description" content="Enter the Maze. Maze Tattoo Studio in Heraklion, Crete offers premium tattoo art and piercing. Specializing in Fine Line, Geometric, Micro-realism, and Surrealism by our resident creators. Book your session today." />
        <meta name="keywords" content="tattoo studio heraklion, premium tattoos crete, fine line tattoo, geometric tattoo, piercing heraklion, micro-realism tattoo" />
        <meta property="og:title" content="Maze Tattoo Studio | Premium Tattoos in Heraklion" />
        <meta property="og:description" content="Enter the Maze. Maze Tattoo Studio in Heraklion, Crete offers premium tattoo art and piercing. Specializing in Fine Line, Geometric, Micro-realism, and Surrealism." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mazetattoo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              "name": "Maze Tattoo Studio",
              "image": "https://mazetattoo.com/logo.png",
              "description": "Enter the Maze. Maze Tattoo Studio in Heraklion, Crete offers premium tattoo art and piercing. Specializing in Fine Line, Geometric, Micro-realism, and Surrealism by our resident creators.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kagiampi 11",
                "addressLocality": "Heraklion",
                "addressRegion": "Crete",
                "postalCode": "71201",
                "addressCountry": "GR"
              },
              "telephone": "+302811815136",
              "openingHours": "Mo-Sa 11:00-20:00",
              "url": "https://mazetattoo.com"
            }
          `}
        </script>
      </Helmet>

      {/* FIXED BACKGROUND WATERMARK - Φαίνεται πίσω από Gallery Vol 1 & 2 */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.img
          initial={{ opacity: 15, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          src={logo}
          alt="Watermark"
          className="w-[140vw] md:w-[70vw] grayscale brightness-150 contrast-125 mix-blend-screen"
          style={{ filter: "drop-shadow(0 0 30px rgba(255,255,255,0.1))" }}
        />
      </div>

      {/* NAVIGATION - Minimal Centered (Original Style) */}
      <nav className="relative z-50 flex flex-col items-center py-12 space-y-8">

        {/* Logo & Name Center */}
        <div
          className="flex items-center space-x-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={logoRemoved}
            alt="Maze Tattoo Studio Logo Heraklion"
            className="w-10 h-10 object-contain transition-transform duration-700 group-hover:rotate-12"
          />
          <div className="text-3xl font-thin tracking-[0.5em] uppercase">
            Maze <span className="text-accent-silver font-bold">Tattoo</span>
          </div>
        </div>

        {/* Menu Links Center */}
        <div className="flex space-x-8 text-[10px] uppercase tracking-[0.4em] text-gray-500">
          <button
            onClick={() => { smoothScroll('gallery'); trackInteraction('menu_gallery'); }}
            className="hover:text-white transition-all duration-500"
          >
            Works
          </button>
          <button
            onClick={() => { smoothScroll('artists-section'); trackInteraction('menu_artists'); }}
            className="hover:text-white transition-all duration-500"
          >
            Artists
          </button>
          <button
            onClick={() => { smoothScroll('contact'); trackInteraction('menu_contact'); }}
            className="hover:text-white transition-all duration-500"
          >
            Find Us
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative z-10 flex flex-col items-center text-center py-20 md:py-32">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent-silver text-[9px] md:text-[10px] tracking-[0.6em] uppercase mb-4 italic">
          Established 2026
        </motion.p>
        <h1 className="text-5xl md:text-8xl font-extralight uppercase tracking-[0.1em] leading-tight px-4">
          Path of <span className="font-bold">Ink</span>
        </h1>
        <button
          onClick={() => { smoothScroll('contact'); trackInteraction('hero_cta_clicked'); }}
          className="mt-12 group relative px-10 md:px-14 py-4 overflow-hidden border border-white/10"
        >
          <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase group-hover:text-black transition-colors duration-500">Get in the Maze</span>
          <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </header>

      {/* STUDIO SECTION */}
      <section className="relative z-10 py-20 md:py-32 border-t border-white/5 bg-zinc-950/20">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 italic">
            Our <span className="text-accent-silver">Space</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
            In the heart of Heraklion, we have created a space where art meets absolute hygiene.
            <span className="block mt-4 text-accent-silver font-medium uppercase text-xs tracking-[0.3em]">
              📍 11 Kagiampi St, Heraklion, Crete
            </span>
          </p>
        </div>

        <div className="w-full h-[50vh] md:h-[80vh] relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="h-full w-full"
          >
            {[studio1, studio2, studio3, studio4, studio5, studio6].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="h-full w-full overflow-hidden">
                  <img src={img} className="w-full h-full object-cover" alt={`Maze Tattoo Studio Heraklion Interior View ${i + 1}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ARTISTS SECTION */}
      <section id="artists-section" className="relative z-10 py-24 md:py-32 max-w-6xl mx-auto px-6 border-t border-white/5">
        <div className="text-center mb-24">
          <h2 className="text-[10px] tracking-[0.8em] uppercase text-accent-silver mb-4">Resident Creators</h2>
          <h3 className="text-5xl md:text-6xl font-thin uppercase tracking-[0.2em]">The <span className="font-bold">Artists</span></h3>
        </div>

        <div className="space-y-32 md:space-y-48">
          {/* ARTIST 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">
              <img src={zac} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Zac - Fine Line and Geometric Tattoo Artist at Maze Studio Heraklion" />
            </div>
            <div className="space-y-6">
              <h4 className="text-4xl md:text-5xl font-bold uppercase italic text-accent-silver tracking-tighter">Zac</h4>
              <p className="text-gray-400 text-sm leading-loose tracking-widest uppercase italic">
                Zac works on both large-scale and small tattoo projects, always emphasizing precision, detail, and the correct placement of each design on the body. He creates fully custom pieces tailored to the individual, drawing from experience across a wide range of styles. While he has explored many artistic directions, he places strong focus on Japanese, Οld school style, as well as cartoon and anime-inspired designs, using solid colors, deep blacks, and a dynamic mix of bold and fine lines. He also works extensively with black and grey compositions, incorporating a variety of textures to add depth and character to each piece.
              </p>
              <a href="https://www.instagram.com/zac_tatts/" onClick={() => trackInteraction('instagram_zac')} target="_blank" rel="noreferrer" className="inline-block border-b border-accent-silver/30 pb-1 text-[10px] tracking-widest uppercase hover:text-accent-silver transition-colors">
                Instagram — @zac_tatts
              </a>
              <div className="grid grid-cols-3 gap-3 pt-6">
                {[ztattoo1, ztattoo2, ztattoo3].map((img, i) => (
                  <div key={i} className="aspect-square bg-zinc-800 overflow-hidden cursor-zoom-in group">
                    <img src={img} onClick={() => setSelectedImage(img)} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" alt={`Fine Line and Geometric Tattoo by Zac at Maze Studio Heraklion ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ARTIST 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1 space-y-6 text-left md:text-right">
              <h4 className="text-4xl md:text-5xl font-bold uppercase italic text-accent-silver tracking-tighter">Yorgos Frag</h4>
              <p className="text-gray-400 text-sm leading-loose tracking-widest uppercase italic">
                Yorgos creates mixed graphic concepts with realism, micro-realism and surrealism - accompanied with precision, fine lines, sharp detailes and a strong sense of design. He has traveled around the globe to various countries tattooing and continues his journey into art - combining his love to new cultures and experiences.
              </p>
              <a href="https://www.instagram.com/frag_ttt/" onClick={() => trackInteraction('instagram_frag')} target="_blank" rel="noreferrer" className="inline-block border-b border-accent-silver/30 pb-1 text-[10px] tracking-widest uppercase hover:text-accent-silver transition-colors">
                @frag_ttt — Portfolio
              </a>
              <div className="grid grid-cols-3 gap-3 pt-6">
                {[gtattoo1, gtattoo2, gtattoo3].map((img, i) => (
                  <div key={i} className="aspect-square bg-zinc-800 overflow-hidden cursor-zoom-in group">
                    <img src={img} onClick={() => setSelectedImage(img)} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" alt={`Micro-realism and Surrealism Tattoo by Yorgos Frag at Maze Studio Heraklion ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">
              <img src={giorgos} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Yorgos Frag - Micro-realism and Surrealism Tattoo Artist at Maze Studio Heraklion" />
            </div>
          </div>
          {/* ARTIST 3*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-900 shadow-2xl">
              <img src={anna} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Kuki Blades - Professional Body Piercer at Maze Studio Heraklion" />
            </div>
            <div className="space-y-6">
              <h4 className="text-4xl md:text-5xl font-bold uppercase italic text-accent-silver tracking-tighter">Kuki Blades </h4>
              <p className="text-gray-400 text-sm leading-loose tracking-widest uppercase italic">
                Specialized in Industrial yet Luxury Projects.
                Professional body piercer since 2018, with international experience across Europe and beyond.
              </p>
              <a href="https://www.instagram.com/kuki_blades/" onClick={() => trackInteraction('instagram_kuki')} target="_blank" rel="noreferrer" className="inline-block border-b border-accent-silver/30 pb-1 text-[10px] tracking-widest uppercase hover:text-accent-silver transition-colors">
                Instagram — @kuki_blades

              </a>
              <div className="grid grid-cols-3 gap-3 pt-6">
                {[ap1, ap2, ap3].map((img, i) => (
                  <div key={i} className="aspect-square bg-zinc-800 overflow-hidden cursor-zoom-in group">
                    <img src={img} onClick={() => setSelectedImage(img)} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity" alt={`Luxury Body Piercing by Kuki Blades at Maze Studio Heraklion ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="relative z-10 py-24 md:py-32 border-t border-white/5 bg-[#080808]/40">
        <div className="text-center mb-20 overflow-hidden px-6">
          <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 0.5 }} className="text-[10px] tracking-[0.8em] uppercase text-accent-silver mb-4 italic">Volume 01</motion.h2>
          <div className="flex justify-center items-center gap-3 md:gap-6 text-5xl md:text-8xl font-thin uppercase tracking-widest">
            <span>The</span>
            <span className="font-bold italic text-white">Archives</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 max-w-6xl mx-auto px-6">
          <div className="md:col-span-8 aspect-[4/5] overflow-hidden bg-zinc-900/20 group">
            <img onClick={() => setSelectedImage(images[0])} src={images[0]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 cursor-zoom-in" alt="Premium Custom Tattoo and Piercing Art Portfolio Heraklion" />
          </div>
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-10">
            <div className="aspect-square overflow-hidden bg-zinc-900 group">
              <img onClick={() => setSelectedImage(images[1])} src={images[1]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 cursor-zoom-in" alt="Premium Custom Tattoo and Piercing Art Portfolio Heraklion" />
            </div>
            <div className="hidden md:block py-6 border-l border-white/10 pl-8">
              <p className="text-[8px] text-gray-600 tracking-[0.5em] uppercase leading-loose">Maze Studio / Selected Projects<br />Visual Identity 2026</p>
            </div>
          </div>
          <div className="md:col-span-12 aspect-[21/9] overflow-hidden bg-zinc-900 group">
            <img onClick={() => setSelectedImage(images[2])} src={images[2]} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 cursor-zoom-in" alt="Premium Custom Tattoo and Piercing Art Portfolio Heraklion" />
          </div>
          {[images[3], images[4], images[5]].map((img, i) => (
            <div key={i} className={`md:col-span-4 aspect-[3/4] overflow-hidden bg-zinc-900 group ${i === 0 ? 'md:translate-y-12' : i === 2 ? 'md:translate-y-24' : ''}`}>
              <img onClick={() => setSelectedImage(img)} src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 cursor-zoom-in" alt="Premium Custom Tattoo and Piercing Art Portfolio Heraklion" />
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY VOLUME 02 - THE SILVER RITUAL (PIERCINGS) */}
      <section id="piercings" className="relative z-10 py-32 border-t border-white/5 bg-black/40">

        {/* Header Volume 02 */}
        <div className="text-center mb-24 overflow-hidden px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.8em] uppercase text-accent-silver mb-4 italic"
          >
            Volume 02
          </motion.h2>

          <motion.h3
            className="text-5xl md:text-8xl font-thin uppercase tracking-widest leading-none flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <span className="text-gray-500">The Silver</span>
            <span className="font-bold italic text-accent-silver drop-shadow-[0_0_15px_rgba(192,192,192,0.3)]">Ritual</span>
          </motion.h3>
          <p className="mt-8 text-[9px] text-gray-600 tracking-[0.4em] uppercase">Precision • Aesthetics • Anatomy</p>
        </div>

        {/* Piercing Grid - Πιο "κοφτερό" και συμμετρικό */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

          {/* Image 1 - Vertical */}
          <div className="col-span-2 row-span-2 aspect-[3/4] overflow-hidden bg-zinc-900 group border border-white/5">
            <img
              onClick={() => setSelectedImage(p1)}
              src={p1}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 cursor-zoom-in"
              alt="The Silver Ritual - Premium Body Piercings Heraklion"
            />
          </div>

          {/* Small Square 1 */}
          <div className="aspect-square overflow-hidden bg-zinc-900 group border border-white/5">
            <img
              onClick={() => setSelectedImage(p2)}
              src={p2}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in"
            />
          </div>

          {/* Small Square 2 */}
          <div className="aspect-square overflow-hidden bg-zinc-900 group border border-white/5">
            <img
              onClick={() => setSelectedImage(p3)}
              src={p3}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in"
            />
          </div>

          {/* Image 2 - Wide on Desktop */}
          <div className="col-span-2 aspect-video md:aspect-auto md:h-full overflow-hidden bg-zinc-900 group border border-white/5">
            <img
              onClick={() => setSelectedImage(p4)}
              src={p4}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 cursor-zoom-in"
            />
          </div>

          {/* Bonus: Ένα "quote" ανάμεσα στις φωτογραφίες */}
          <div className="hidden md:flex items-center justify-center p-8 border border-white/5 bg-zinc-950/50">
            <p className="text-[10px] text-accent-silver tracking-[0.5em] uppercase text-center leading-loose">
              Metallic<br />Elegance
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT & MAP SECTION */}
      <section id="contact" className="relative z-10 py-24 md:py-32 border-t border-white/5 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-[10px] tracking-[0.8em] uppercase text-accent-silver opacity-60">Ready for ink?</h2>
              <h3 className="text-5xl md:text-7xl font-bold uppercase italic tracking-tighter leading-none">Enter The <span className="text-white">Maze</span></h3>
            </div>
            <div className="space-y-8 pt-6">
              <div>
                <p className="text-[9px] text-gray-600 uppercase tracking-widest mb-3">Instagram Portfolio</p>
                <a href="https://www.instagram.com/mazetattoostudio/" onClick={() => trackInteraction('instagram_main')} className="text-2xl md:text-3xl font-light hover:text-accent-silver transition-all tracking-wide underline underline-offset-8 decoration-white/10">@mazetattoostudio
                </a>
              </div>
              <div>
                <p className="text-[9px] text-gray-600 uppercase tracking-widest mb-3">Direct Contact</p>
                <p className="text-gray-400 text-sm tracking-[0.2em] leading-loose">
                  11 KAGIAMPI ST, HERAKLION, CRETE<br />
                  <a href="tel:+302811815136" onClick={() => trackInteraction('call_phone')} className="hover:text-accent-silver transition-colors">TEL: 2811815136</a><br />
                  MONDAY - SATURDAY: 11:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px] bg-zinc-900 border border-white/5 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 group">
            <iframe
              src="https://maps.google.com/maps?q=Kagiampi%2011,%20Heraklion,%20Greece&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="opacity-50 group-hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER - Bold & Visible */}
      <footer className="relative z-10 py-24 text-center border-t border-white/5 bg-[#050505]/20">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.8em" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[12px] md:text-[14px] text-white font-bold uppercase tracking-[0.8em] mb-4"
        >
          Find your way out.
        </motion.p>

        <div className="mt-8 opacity-20 text-[8px] tracking-[0.4em] uppercase text-gray-500">
          Maze Tattoo Studio • Heraklion • 2026
        </div>
      </footer>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 cursor-zoom-out" onClick={() => setSelectedImage(null)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-5xl w-full flex justify-center">
            <img src={selectedImage} className="max-h-[85vh] max-w-full object-contain shadow-2xl border border-white/5" alt="Enlarged" />
            <button className="absolute -top-12 right-0 text-white text-[10px] tracking-widest uppercase opacity-50 hover:opacity-100 transition-opacity">Close [x]</button>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default App