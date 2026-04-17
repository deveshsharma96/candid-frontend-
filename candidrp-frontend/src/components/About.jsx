import { motion } from "framer-motion";
import hero from "../assets/About.png";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import img1 from "../assets/AvinashChander.png";
import img2 from "../assets/MerlynChander.png";
import img3 from "../assets/SandraShantanu.png";
import img4 from "../assets/RishabhShantanu.png";
import img5 from "../assets/SatishKumar.png"; 

// Team images
const team = [
  { name: "Avinash Chander", img: img1 },
  { name: "Merlyn Chander", img: img2 },
  { name: "Sandra Shantanu", img: img3 },
  { name: "Rishabh Shantanu", img: img4 },
  { name: "Satish Kumar", img: img5 },
];

const loopData = [...team, ...team]; // IMPORTANT // duplicate for infinite loop


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut"}
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function About() {
  return (
    <div className="bg-white">

      {/* 🔵 HERO SECTION */}
      <div
        className="h-[500px] flex items-center px-10 text-white relative"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1f0638]/90 via-[#5b2c91]/40 to-[]/70"></div> */}
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
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="relative z-10 max-w-5xl"
>
  
  
  <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] max-w-3xl">
    About {" "}
    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
    Us
  </span>
</h1>

  <p className="text-xl text-indigo-100 leading-relaxed max-w-xl">
        Helping our clients build meaningful partnerships that drive long term success
  </p>

  
</motion.div>
{/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* 🔵 CONTENT SECTION (YOUR TEXT) */}
      <motion.div
      className="max-w-6xl mx-auto px-6 py-16 text-gray-700 space-y-6"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

        

        <motion.p
          variants={fadeUp}
          className="leading-relaxed text-center mx-auto max-w-6xl"
        >
        At <strong>Candid Resourcing Partners Ltd</strong>, we don’t just fill roles — 
        we solve hiring challenges. With deep sector expertise and a clear understanding 
        of your business landscape, we deliver measurable results by connecting you with 
        high-calibre professionals who drive growth, innovation, and long-term success.
        </motion.p>

        <motion.p
            variants={fadeUp}
            className="leading-relaxed text-center mx-auto max-w-5xl"
          >
        We believe recruitment is more than matching skills to job descriptions — 
        it’s about building meaningful partnerships that create lasting value.
         </motion.p>

        <br/> <br/> <br/>

        <motion.p variants={fadeUp} className="leading-relaxed">
            <strong>Industry‑Led Expertise. Precision‑Driven Results</strong><br/>

            Our team brings extensive knowledge of your specific talent requirements across banking, finance, IT, and healthcare. Leveraging powerful regional networks and market intelligence, we identify exceptional candidates faster and with unmatched accuracy — ensuring every hire aligns with your goals and culture.
        </motion.p>
       
        <motion.p variants={fadeUp} className="leading-relaxed">
            <strong>Insight‑Backed Recruitment for a Competitive Edge</strong><br/>

           We continuously monitor talent availability, skill trends, and industry shifts to craft tailored recruitment strategies that reduce turnover and strengthen organisational performance. Whether you’re scaling rapidly or hiring for niche, business‑critical roles, our specialists deliver solutions that keep you ahead.
         </motion.p>
       
        <motion.p variants={fadeUp} className="leading-relaxed">
            <strong>Talent That Elevates Your Organisation</strong><br/>

            From entry‑level professionals to senior leadership, our experts source and secure the best talent at every level. With our proven methodology and commitment to excellence, we help organisations and candidates thrive — fostering innovation, stability, and sustainable success.
         </motion.p>

        <br/><br/><br/>

        <div>
          <h3 className="font-semibold text-lg mb-1">Who We Are</h3>
         <motion.p variants={fadeUp} className="leading-relaxed">
            We are a specialist recruitment partner with deep expertise across <strong>banking, finance, IT, and healthcare</strong>. Our team brings years of hands‑on experience, strong regional networks, and a clear understanding of the evolving talent landscape. This allows us to deliver recruitment solutions that are fast, accurate, and aligned with your strategic goals.
         </motion.p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">What We Do</h3>
          <motion.p variants={fadeUp} className="leading-relaxed">
            We connect businesses with exceptional professionals — from emerging talent to senior leadership. By combining market intelligence with a personalised approach, we ensure every placement strengthens your organisation’s performance and culture. Our commitment to quality means we focus on long‑term fit, not short‑term fixes.
          </motion.p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">How We Work</h3>
          <motion.p variants={fadeUp} className="leading-relaxed">
            We monitor industry trends, talent availability, and skill-market shifts to stay ahead of your hiring needs. Our tailored recruitment strategies reduce turnover, enhance workforce stability, and give you a competitive edge. Whether you’re scaling rapidly or hiring for niche, business‑critical roles, we deliver solutions that work.
          </motion.p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-1">Our Promise</h3>
          <p>
            We are dedicated to creating value for both clients and candidates. With our unmatched experience and people‑first approach, we help organisations thrive and professionals build meaningful careers. At Candid Resourcing Partners Ltd, we don’t just recruit — we empower growth.
          </p>
        </div>
      </motion.div>
    
    <motion.section
  className="py-20 px-16 bg-gray-50"
  initial="hidden"
  animate="show"
  variants={stagger}
>
  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <motion.h2
      variants={fadeUp}
      className="text-3xl md:text-4xl font-bold text-[#2f1475] mb-4"
    >
      How We Deliver the Perfect Fit
    </motion.h2>

    <motion.p
      variants={fadeUp}
      className="text-gray-600 max-w-3xl mx-auto mb-12"
    >
      Our approach combines deep business understanding with candidate insights 
      to ensure every placement creates long-term value for both organisations and professionals.
    </motion.p>

    {/* CARDS */}
    <motion.div
      variants={stagger}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
    >
      {[
        {
          title: "Understanding Goals & Potential",
          desc: "We fully understand organisational goals and candidate potential to ensure the best placement decisions and the ideal fit for both parties.",
        },
        {
          title: "Precise Role Matching",
          desc: "We analyse role responsibilities in depth to accurately match candidate qualifications with client requirements.",
        },
        {
          title: "Beyond Technical Skills",
          desc: "We value social and interpersonal abilities alongside technical expertise, recognising their impact on productivity, satisfaction, and team dynamics.",
        },
        {
          title: "Social Intelligence Evaluation",
          desc: "By assessing a candidate’s social intelligence, we make informed decisions that benefit both the organisation and the individual.",
        },
        {
          title: "Long-Term Alignment",
          desc: "Our approach goes beyond initial placement—we focus on sustained success and alignment between employer and employee.",
        },
        {
          title: "Global Network Strength",
          desc: "Our UK office collaborates seamlessly with global teams, leveraging international expertise to deliver locally implemented recruitment solutions worldwide.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <h3 className="font-semibold text-lg text-[#0b2c5a] mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>

  </div>
</motion.section>




      

      {/* 🔵 DNA SECTION */}
{/* 🔵 DNA SECTION - PREMIUM STYLE */}
<section className="py-24 px-6 bg-gradient-to-r from-[#2a084d] via-[#4c1d95] to-[#7c3aed] text-white">

  <div className="max-w-6xl mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Our DNA
    </h2>

    <p className="text-purple-200 max-w-2xl mx-auto mb-16">
      The foundation of our success lies in our values, vision, and commitment 
      to delivering exceptional recruitment solutions globally.
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Vision",
          text: "To be a trusted global recruitment partner, delivering exceptional talent solutions that drive long-term business success.",
        },
        {
          title: "Mission",
          text: "To connect organisations with the right talent through insight-driven recruitment, ensuring the perfect fit for both clients and candidates.",
        },
        {
          title: "Values",
          text: "Integrity, client-centricity, collaboration, and a commitment to excellence guide everything we do.",
        },
        {
          title: "Who We Are",
          text: "A specialist recruitment partner with deep expertise across banking, finance, IT, and healthcare.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-left 
          hover:scale-105 hover:bg-white/20 transition-all duration-300 shadow-lg"
        >
          {/* NUMBER */}
          <div className="text-sm text-purple-300 mb-2">
            0{i + 1}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>

          {/* TEXT */}
          <p className="text-purple-100 text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* 🔵 LEADERS SECTION */}
      <div className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    <div>
      <h2 className="text-4xl text-[#2f1475] mb-4">Our Leaders</h2>

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
</div>
      


<ContactSection />

    </div>
  );
}