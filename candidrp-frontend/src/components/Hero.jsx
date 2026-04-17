import hero1 from "../assets/hero.png";
import hero2 from "../assets/Team.png";
import hero4 from "../assets/Team2.png";
import hero3 from "../assets/Services.png";

import aboutImg2 from "../assets/aboutus2.png";
import img1 from "../assets/AvinashChander.png";
import img2 from "../assets/MerlynChander.png";
import img3 from "../assets/SandraShantanu.png";
import img4 from "../assets/RishabhShantanu.png";
import img5 from "../assets/SatishKumar.png"; 
import { FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

// Team images
const team = [
  { name: "Avinash Chander", img: img1 },
  { name: "Merlyn Chander", img: img2 },
  { name: "Sandra Shantanu", img: img3 },
  { name: "Rishabh Shantanu", img: img4 },
  { name: "Satish Kumar", img: img5 },
];

const loopData = [...team, ...team]; 

// animations
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Hero() {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  // SCROLL SLIDES (RENAMED)
  const scrollSlides = [
    {
      title: "VISUAL CLARITY.",
      subtitle: "NEXT GENERATION INTERFACE",
      description: "Precision-engineered components meeting glass-morphic design.",
      stats: { label: "LATENCY", value: "14ms" },
    },
    {
      title: "TOTAL CONTROL.",
      subtitle: "DECENTRALIZED NODES",
      description: "Seamlessly manage your assets across a global cluster.",
      stats: { label: "UPTIME", value: "99.9%" },
    },
    {
      title: "SCALABLE OPS.",
      subtitle: "HYPER-FLUID TECH",
      description: "Designed for massive throughput.",
      stats: { label: "VOLUME", value: "$2.4B" },
    },
    {
      title: "GET STARTED.",
      subtitle: "JOIN THE NETWORK",
      description: "Deploy your first environment in seconds.",
      stats: { label: "STATUS", value: "ACTIVE" },
    },
  ];


  // HERO IMAGES
  const heroImages = [hero1, hero2, hero3];

  // HERO SLIDER
  const heroSlides = [
    heroImages[heroImages.length - 1],
    ...heroImages,
    heroImages[0],
  ];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // ABOUT SECTION
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  

  // AUTO SLIDE
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // LOOP FIX
  useEffect(() => {
    if (current === heroSlides.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(1);
      }, 800);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(heroSlides.length - 2);
      }, 800);
    }
  }, [current, heroSlides.length]);

  // RE-ENABLE ANIMATION
  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  }, [isAnimating]);

  // GLASS CIRCLE
  const GlassCircle = ({ size, color, scrollYProgress, rotateSpeed, top, left, zIndex = 0 }) => {
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * rotateSpeed]);
    const floating = useTransform(scrollYProgress, [0, 1], [0, -150 * rotateSpeed]);

    const smoothRotate = useSpring(rotate, { stiffness: 60, damping: 30 });
    const smoothFloat = useSpring(floating, { stiffness: 60, damping: 30 });

    return (
      <motion.div
        style={{ width: size, height: size, top, left, zIndex, y: smoothFloat, perspective: "1200px" }}
        className="absolute flex items-center justify-center pointer-events-none"
      >
        <motion.div
          style={{ rotateX: smoothRotate, rotateY: smoothRotate }}
          className="relative w-full h-full rounded-full border border-white/30 backdrop-blur-2xl shadow-[0_0_120px_rgba(59,130,246,0.3)]"
        >
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} opacity-40`} />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_70%)] opacity-60" />
          <div className="absolute inset-[2px] rounded-full border border-white/20" />
        </motion.div>
      </motion.div>
    );
  };

  // SCROLL SECTION
  const containerRef = useRef(null);

 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start start", "end start"], // 🔥 KEY FIX
});

  

  const totalSlides = scrollSlides.length;

  const xTranslate = useTransform(
  scrollYProgress,
  [0, 0.85], // ✅ STOP BEFORE END
  ["0%", `-${(totalSlides - 1) * 100}%`]
);
const smoothX = useSpring(xTranslate, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});

  


  
  // RETURN STARTS BELOW



  
  return (
    <div className="w-full overflow-hidden">


      <div ref={containerRef} className="relative bg-[#02040a] text-white">
      {/* Scrollable Area */}
      <div
        className="relative"
        style={{ height: "100vh" }}
      >
        
        {/* Sticky viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          <div className="absolute bottom-0 left-0 w-full h-40 
            bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
          
          {/* BACKGROUND LAYER (Fixed horizontally, moves vertically with scroll) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Ambient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[140px]" />
            <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[140px]" />

            {/* These circles are OUTSIDE the motion.div (smoothX),
                so they don't move left/right when the slides do.
                They are 'absolute' inside a 'sticky' container, meaning they
                stay "fixed" to the screen horizontally but can animate 
                internally (floating/rotating).
            */}
            <GlassCircle 
              size="min(600px, 80vw)" 
              color="from-blue-400/30 to-blue-800/40" 
              scrollYProgress={scrollYProgress}
              rotateSpeed={0.7}
              top="10%"
              left="45%" 
              zIndex={0}
            />
            
            <GlassCircle 
              size="300px" 
              color="from-cyan-300/40 to-blue-500/20" 
              scrollYProgress={scrollYProgress}
              rotateSpeed={-1.1}
              top="55%"
              left="10%"
              zIndex={0}
            />

            <GlassCircle 
              size="180px" 
              color="from-indigo-400/40 to-purple-500/20" 
              scrollYProgress={scrollYProgress}
              rotateSpeed={2.2}
              top="20%"
              left="15%"
              zIndex={0}
            />
          </div>

          {/* HORIZONTAL TRACK (Only the content moves left) */}
          <div className="w-full h-full overflow-hidden"> 
          <motion.div
            style={{
              x: smoothX,
              width: `${scrollSlides.length * 100}%`,
            }}
            className="relative z-10 flex h-full will-change-transform"
            >
            {scrollSlides.map((slide, index) => (
              <section 
                key={index} 
                className="w-screen h-screen flex-shrink-0 flex items-center px-8 md:px-24 overflow-hidden"
              >
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
                  
                  {/* Text Content */}
                  <div className="space-y-8 relative">
                    <div className="flex items-center gap-3">
                      <div className="h-[1px] w-12 bg-blue-500 shadow-[0_0_8_rgba(59,130,246,0.5)]" />
                      <motion.span
                initial={{ x: "100%", opacity: 0 }}   // 👉 start from RIGHT outside
                animate={{ x: 0, opacity: 1 }}        // 👉 move to normal position
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="text-blue-400 text-xs font-bold uppercase tracking-[0.4em]"
              >
                {slide.subtitle}
              </motion.span>
                    </div>
                    
                    <motion.h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85]">

  {/* VISUAL */}
  <motion.div
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {slide.title.split(" ")[0]}
  </motion.div>

  {/* CLARITY */}
  <motion.div
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{
      duration: 0.4,
      ease: "easeOut",
      delay: 0.2, // ⚡ very small delay
    }}
    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-300"
  >
    {slide.title.split(" ")[1]}
  </motion.div>
  

</motion.h2>

                    
                    <p className="text-xl text-slate-300/90 max-w-lg font-light leading-relaxed drop-shadow-lg">
                      {slide.description}
                    </p>
                    
                    <div className="pt-4">
                      <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 relative z-20">
                        Explore Interface
                      </button>
                    </div>
                  </div>

                  {/* Visual Stats Card */}
                  <div className="hidden lg:flex justify-end relative z-20">
<motion.div
  initial={{ opacity: 0, y: 120, scale: 0.85, rotateX: 15 }}
  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
  transition={{
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1], // 🔥 smooth premium easing
  }}
  whileHover={{
    scale: 1.03,
    rotateX: 2,
    rotateY: -2,
  }}
  className="p-12 rounded-3xl border border-white/20 bg-black/40 backdrop-blur-2xl shadow-2xl min-w-[340px] relative overflow-hidden"
>

  {/* Glow Effect */}
<motion.div
  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/20 blur-[140px] rounded-full"
/>

<motion.div
  initial={{ x: "-100%" }}
  animate={{ x: "120%" }}
  transition={{
    duration: 1.2,
    delay: 0.5,
    ease: "easeInOut",
  }}
  className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
/>



                      <div className="text-xs text-blue-400 font-bold mb-2 tracking-[0.2em] uppercase">Status Check</div>
                      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="text-7xl font-mono tracking-tighter mb-6"
>
  {slide.stats.value}
</motion.div>
                      <div className="h-[1px] w-full bg-white/10 mb-6" />
                      <div className="flex items-end gap-2 h-14">
                         {[...Array(8)].map((_, i) => (
                           <motion.div 
                             key={i}
                             animate={{ height: ["20%", "100%", "40%"] }} 
                             transition={{ repeat: Infinity, duration: 1.2 + (i * 0.15), ease: "easeInOut" }}
                             className="flex-1 bg-gradient-to-t from-blue-600 to-purple-400 rounded-full" 
                           />
                         ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
            ))}
          </motion.div>
        </div>
      </div>
      </div> 

      {/* Progress Bar (Fixed) */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1">
      
        <div className="w-44 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] origin-left" 
          />
        </div>
        <span className="text-[10px] tracking-[0.5em] text-white/60 uppercase font-bold">
          Navigation
        </span>
      </div>
    </div>


      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 
bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />

        {/* SLIDER */}
        <motion.div
          className="flex h-full"
          animate={{ x: `-${current * 100}%` }}
          transition={
            isAnimating
              ? { duration: 0.8, ease: "easeInOut" }
              : { duration: 0 }
          }
        >
          {heroSlides.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </motion.div>

        {/* OVERLAY */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1f0434]/90 via-[#0d0764]/20 to-transparent"></div> */}
         <div
  className="absolute inset-0"
  style={{
    background: `linear-gradient(
      to right,
      rgba(31, 4, 52, 0.95) 0%,     /* LEFT - strong dark */
      rgba(13, 7, 100, 0.6) 20%,    /* MIDDLE - smooth blend */
      rgba(13, 7, 100, 0.2) 50%,    /* RIGHT FADE START */
      rgba(13, 7, 100, 0) 100%      /* FULL TRANSPARENT */
    )`
  }}
></div>
        
        {/* CONTENT */}
<div className="absolute inset-0 z-10 flex items-center pt-20  px-16 text-white">
  <motion.div
    className="max-w-2xl"
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    
  <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
               Connecting Talent to Opportunity &{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Find the Perfect Fit with Us!
              </span>
            </h1>

            <p className="text-xl text-indigo-100 leading-relaxed max-w-xl">
                      Our team brings extensive knowledge of your specific talent requirements across industries.

            </p>
      <br/><br/>



    <button
  onClick={() => navigate("/about")}
  className="group relative flex items-center 
  w-[200px] h-[60px] rounded-full overflow-hidden
  bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500
  text-white font-semibold tracking-wide
  shadow-[0_8px_25px_rgba(128,0,128,0.4)]
  transition-all duration-500"
>
  {/* Sliding Circle */}
  <div
    className="absolute left-1 top-1 w-[52px] h-[52px] 
    bg-gray-200 rounded-full flex items-center justify-center
    text-purple-700 text-xl
    transition-all duration-500 ease-in-out
    group-hover:left-[calc(100%-56px)]"
  >
    →
  </div>

  {/* Text */}
  <span
    className="w-full text-center transition-all duration-500
    group-hover:-translate-x-4"
  >
    Read More
  </span>
</button>


  </motion.div> {/* ✅ IMPORTANT: correct closing */}
  {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
</div>
        

       
        {/* DIAMOND INDICATORS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
  {heroImages.map((_, index) => (
    <button
      key={index}
      onClick={() => {
        setCurrent(index + 1);
        setIsPaused(true);

        setTimeout(() => {
          setIsPaused(false);
        }, 5000);
      }}
      className={`text-xl transition-all ${
        current === index + 1
          ? "text-purple-700 scale-125"
          : "text-white/50"
      }`}
    >
      ◈
    </button>
  ))}
</div>

      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        ref={ref}
        className="py-20 px-16 bg-white grid md:grid-cols-2 gap-10 items-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp}>
          <span className="bg-gradient-to-r from-purple-900 to-purple-500  text-yellow-400 px-3 py-2 rounded-full text-sm font-medium">
            
            ABOUT US
          </span>
          

          <h2 className="text-4xl font-bold mt-4 mb-4 text-[#531192]">
            Global Reach, Local Expertise
          </h2>
          <br/>

          <p className="text-gray-600 mb-6">
            At Candid Resourcing Partners Ltd, we focus on solving recruitment challenges by delivering the right talent that fuels business growth and long-term success.
            <br/><br/>
            With strong expertise across banking, finance, IT, and healthcare, we use market insights and extensive networks to provide accurate, tailored hiring solutions. From junior roles to senior leadership, we ensure every placement aligns with your objectives and contributes to lasting organisational success.
          </p>

          <h2 className="text-xl font-bold mt-4 mb-4 text-[#3d0275]">
            CORE COMPETENCIES
          </h2>

          <ul className="text-gray-600 mb-6 space-y-1">
            <li>• Banking</li>
            <li>• IT</li>
            <li>• Finance</li>
            <li>• Healthcare</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
         <img src={aboutImg2} className="rounded-xl w-90" />     
          
        </motion.div>
      </motion.section>

    

      {/* ================= SERVICES ================= */}
<section className="py-20 px-16 bg-gray-50 text-center">
  <span className="bg-gradient-to-r from-purple-900 to-purple-500  text-yellow-400 px-3 py-2 rounded-full text-sm">
    OUR SERVICES
  </span>

 
    <h2 className="text-4xl font-bold mt-4 mb-10 text-[#531192] ">
    OUR RECRUITMENT SOLUTIONS
    </h2>
 

 

<motion.div
  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-50px" }}
>
  {[
    {
      title: "Permanent Recruitment",
      desc: "We leverage proven recruitment strategies to identify and deliver highly skilled professionals across multiple industries, ensuring the right long-term fit for your organisation.",
    },
    {
      title: "Executive Search",
      desc: "Our retained and executive search services prioritise your hiring needs, enabling access to top-tier and hard-to-reach talent through targeted headhunting expertise.",
    },
    {
      title: "Contract Hiring",
      desc: "We provide flexible contract hiring solutions, both inside and outside IR35, helping you scale your workforce efficiently based on project requirements.",
    },
    {
      title: "RPO Consultancy",
      desc: "From supporting your internal team to fully managing your recruitment process, we deliver strategic insights, improved efficiency, and cost-effective hiring solutions.",
    },
    {
      title: "Bespoke Solutions",
      desc: "Every organisation is unique. We design customised recruitment solutions tailored to your specific hiring challenges and business objectives.",
    },
    {
      title: "Talent Advisory",
      desc: "Our experts provide market insights, talent trends, and strategic guidance to help you make informed hiring decisions and stay ahead of the competition.",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      variants={cardAnimation}
      whileHover={{
        scale: 1.04,
        y: -8,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
      }}
      className="bg-white p-6 rounded-xl shadow text-left transition-all"
    >
      <h3 className="font-semibold mb-3 text-[#0b2c5a]">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  ))}
</motion.div>
</section>

{/* ================= CTA ================= */}
      <motion.section
  className="py-20 px-16 
  bg-gradient-to-r from-[#1f0638] via-[#5b2c91] to-[#9b5de5]
  text-white flex justify-between items-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div>
    <h2 className="text-3xl font-bold">
      Meet Your HR Needs with India's Leading Recruitment Agency
    </h2>
    <p className="text-gray-200 mt-2">
      Discover end-to-end HR solutions.
    </p>
  </div>

  <motion.button
   onClick={() => navigate("/about")}
  
    whileHover={{ scale: 1.05 }}
    className="bg-white text-black px-6 py-3 rounded-full"
  >
    Explore More →
  </motion.button>
</motion.section>

      {/* ================= INVESTORS ================= */}
      <motion.section
        className="py-20 px-16 grid md:grid-cols-2 gap-10 items-center"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <span className="bg-gradient-to-r from-purple-900 to-purple-500  text-yellow-400 px-3 py-2 rounded-full text-sm">
            INVESTORS
          </span>

          <h2 className="text-3xl font-bold mt-4 mb-4 text-[#531192]">
            Global Talent Solutions
          </h2>

          <p className="text-gray-600">
            We are a young company with a proven track record of commitment to long-term value creation. Our approach is rooted in commitment, innovation, and a deep understanding of evolving business needs.
            <br/><br/>
            By leveraging advanced technology and data-driven insights, we are strategically positioned to create sustainable value for our clients and partners. As the Indian economy continues to grow, the demand for skilled talent is expected to rise significantly—presenting a strong opportunity for us to expand our capabilities and deliver impactful recruitment solutions.
            <br/><br/>
            At Candid Resourcing Partners Ltd, we are focused on connecting the right talent with the right opportunities, enabling organizations to scale, innovate, and succeed in an increasingly competitive landscape.

          </p>

          
        </motion.div>

        <motion.img variants={fadeUp} src={hero4} />
      </motion.section>

      
{/* 🔵 LEADERS SECTION */}
      <section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    <div>
      <h2 className="text-4xl text-[#4e0f89] mb-4">
        Our Leaders
      </h2>

      <p className="text-gray-600 mb-4">
        Focused on delivering an unparalleled, personalized experience.
      </p>

      <Link
        to="/team"
        className="text-blue-600 underline cursor-pointer hover:text-purple-600 transition"
      >
        View all leaders →
      </Link>
    </div>

    <div className="h-80 overflow-hidden rounded-xl bg-gray-100 flex items-center relative">
    
      {/* FADE */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
    
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: [0, -1000] }} // 🔥 FIXED
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {loopData.map((member, i) => (
          <div key={i} className="flex flex-col items-center min-w-[180px]">
    
            {/* IMAGE */}
            <div className="w-50 h-60 rounded-xl overflow-hidden border-2 border-white shadow-md">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
    
            {/* NAME */}
            <p className="text-sm mt-2 text-gray-900 font-medium">
              {member.name}
            </p>
    
          </div>
        ))}
      </motion.div>
    
    </div>
   

  </div>
</section>
    
      

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-16 bg-gray-50">
  <h2 className="text-3xl font-bold mb-10 text-[#531192]">
    Our Latest Client's Feedback
  </h2>

  <motion.div
    className="grid md:grid-cols-3 gap-8"
    variants={stagger}
    initial="hidden"
    animate="show"
  >
    {[
      {
        text: "Candid Resourcing Partners is a highly reliable partner who successfully fills critical positions in record time. They have a thorough understanding of the talent landscape and are a great recruitment partner.",
      },
      {
        text: "CANDID has provided us with excellent service over the years. Whenever there is an urgent requirement, we rely on them, knowing they will deliver without fail.",
      },
      {
        text: "The team at Candidrp truly understands our recruitment needs and process flow. Their professional and friendly approach consistently delivers quality results.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
      >
        {/* Quote Icon */}
        <div className="text-purple-700 text-3xl mb-3">❝</div>

        {/* Feedback */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {item.text}
        </p>

        {/* Client Name */}
        
      </motion.div>
    ))}
  </motion.div>
</section>

      
     

    </div>
  );
}


















 