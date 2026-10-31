"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CHECKS = [
  "Senior engineers only",
  "Ship in weeks, not months",
  "Monitoring included",
];

const AVATARS = [
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/65e3fcd7c34e8ffed623b1d08907976f-1619207353829/ff591810-8646-4d69-a3a4-617405c8f453.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/110f4fff726164f780b94ff9d60a8ec1-1624213898824/2b462463-e813-4728-8bae-8c46b8b53282.jpeg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/d5b74f37aabb5bf397f928fa8ef83174-743836741596390704.906231/90ABB451-BF26-4D22-A958-08C501FE2C8B.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/33256108/original/600710_10151401161744070_286028602_n.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/33bc4173ea279a054c29d0d8f6b4ce07-1539806278747/28413816-05d1-4f97-a685-318a19b47623.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1540103/original/aa.jpg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8fd94d7e384933f3b8ea57b47b1b0c2e-1707576894598/09d21929-1a00-45fd-bc51-18dd8ba8c9c4.jpeg",
  "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ac52a372ae434d3358e2f5a52a6c2b3a-1654792993352/8e493fba-1687-45c8-a286-1af0ef3a34e3.jpg",
  "https://images.bigibyte.com/cdn-cgi/image/width=160,height=160,fit=cover,quality=80,format=auto/client/1777579006404.jpg",
  "https://images.bigibyte.com/cdn-cgi/image/width=160,height=160,fit=cover,quality=80,format=auto/client/1652600318017.jpg",
];

const HERO_SHOTS = [
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-scraper-live-runs.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-web-scraper-runs-dashboard.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-automation-flow-canvas.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-b2b-saas-leads-database.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-python-scraper-code.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-price-tracker-mobile-app.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-google-maps-leads.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-real-estate-listings-map.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-ai-agent-steps.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-ecommerce-product-catalog-sync.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-product-extraction.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-google-maps-lead-automation.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-crm-pipeline.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-ai-scraping-agent-chat.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-real-estate-listings.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-business-leads-spreadsheet-delivery.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-slack-report.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-social-creator-insights-dashboard.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-data-notebook.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-competitor-pricing-heatmap.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-rag-knowledge-base.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-python-playwright-scraper-code.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-verified-email-list.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-hotel-price-comparison-lisbon.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-monitoring-alerts.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-remote-job-board-scraper.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/hero-inbox-automation.webp",
  "https://images.bigibyte.com/cdn-cgi/image/width=1400,quality=80,format=auto/projects/project-agent-lead-workflow-vertical.webp",
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative -mt-20 px-5 pt-32 pb-20 bg-white text-slate-900 overflow-hidden"
    >
      {/* Grid Background - The "Precision" Device */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0 1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0 1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: The Blueprint */}
          <div className="lg:col-span-7 flex flex-col gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 text-xs font-medium text-slate-500"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              Booking Q4 2026 projects
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl md:text-7xl font-medium leading-[1.1] tracking-tighter text-slate-900"
            >
              Your data partner for scraping, automation &amp; SaaS products.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-xl"
            >
              We turn messy web data into clean pipelines, and clean pipelines into
              products your customers pay for.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://cal.com/shamim-reza-pq9t65"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-150 active:scale-95 hover:bg-slate-800 inline-flex items-center justify-center"
              >
                Book a free call
              </a>
              <Link
                href="#work"
                className="bg-white border border-slate-200 px-8 py-4 rounded-lg text-sm font-medium text-slate-900 transition-all duration-150 active:scale-95 hover:bg-slate-50 inline-flex items-center justify-center"
              >
                See our work
              </Link>
            </motion.div>

            {/* Trust Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-4 pt-8 border-t border-slate-100"
            >
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 border-2 border-white rounded-full bg-slate-100 overflow-hidden"
                    style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                ))}
              </div >
              <p className="text-sm text-slate-500">
                <span className="text-slate-900 font-medium">Join founders</span> who automated their data.
              </p>
            </motion.div>
          </div>

          {/* Right Column: The Evidence */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10"
            >
              {/* Technical "Blueprint" Frame */}
              <div className="p-2 bg-slate-100 border border-slate-200 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 bg-slate-50">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-[10px] font-mono text-slate-400">pipeline_preview.exe</span>
                  </div>
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={HERO_SHOTS[0]}
                      alt="Featured Project"
                      className="object-cover w-full h-full"
                      width={800}
                      height={450}
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Data Point */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 p-4 bg-white border border-slate-200 rounded-xl shadow-lg z-20 max-w-[180px]"
              >
                <div className="text-[10px] font-bold text-brand-accent uppercase tracking-wider mb-1">Status</div>
                <div className="text-sm font-medium text-slate-900">1.2M rows extracted</div>
                <div className="text-[10px] text-slate-400 mt-1">Verified • Cleaned • Synced</div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Horizontal evidence strip (Simplified) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-12">
          {CHECKS.map((check, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] shrink-0">
                {i + 1}
              </div>
              <span className="text-sm font-medium text-slate-600">{check}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
